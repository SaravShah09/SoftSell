// src/components/SectionDivider.jsx
import { motion } from 'framer-motion';

const SectionDivider = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '80%' }}
      transition={{ duration: 0.8}}
      
      className={`mx-auto h-1 my-12 rounded-full ${
        isDark ? 'bg-emerald-400' : 'bg-amber-400'
      }`}
    />
  );
};

export default SectionDivider;
