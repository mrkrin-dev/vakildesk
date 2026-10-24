import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  Variants,
} from 'motion/react';

export const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface WordRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delayOffset?: number;
  staggerChildren?: number;
}

export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  as: Tag = 'h2',
  className = '',
  delayOffset = 0,
  staggerChildren = 0.045,
}) => {
  const prefersReduced = useReducedMotion();
  const words = text.split(' ');

  if (prefersReduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delayOffset,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: EASE_PREMIUM,
      },
    },
  };

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={wordVariants}
          className="inline-block mr-[0.27em] will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
};

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 28,
  className = '',
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: EASE_PREMIUM,
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.14,
  delayChildren = 0.05,
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}> = ({ children, className = '', hoverLift = false }) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={hoverLift ? { y: -6, transition: { duration: 0.25 } } : undefined}
      whileTap={hoverLift ? { scale: 0.985 } : undefined}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxPhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  children?: React.ReactNode;
}

export const ParallaxPhoto: React.FC<ParallaxPhotoProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  children,
}) => {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Drift slightly slower than page scroll
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <motion.div
      ref={containerRef}
      initial={prefersReduced ? false : { opacity: 0, scale: 0.96, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: EASE_PREMIUM }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Soft wipe reveal mask */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: EASE_PREMIUM }}
        style={prefersReduced ? undefined : { y }}
        className="w-full h-[110%] -mt-[5%] will-change-transform"
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </motion.div>
      {children}
    </motion.div>
  );
};
