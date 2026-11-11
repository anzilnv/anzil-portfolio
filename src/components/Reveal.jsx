import { motion, useReducedMotion } from 'framer-motion';

/**
 * Fades and slides its children into view the first time they scroll on screen.
 * Renders statically when the visitor prefers reduced motion.
 */
function Reveal({ children, delay = 0, y = 24, as = 'div', className = '' }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

export default Reveal;
