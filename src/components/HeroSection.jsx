// src/components/HeroSection.jsx
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

function HeroSection({ theme }) {
  const isDark = theme === 'dark';

  return (
    <>
    <motion.section
    
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-center py-20 relative ${
        isDark ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'
      }`}
    >
      <div className="absolute top-6 left-6 text-xl font-bold">SoftSell</div>
      <h1 className="text-4xl font-bold mb-4 mt-10">
        Turn Your Soft Skills into Cash Instantly
      </h1>
      <p className="text-lg mb-6">
        SoftSell helps you quickly value and sell your featured software licenses — fast, secure, and hassle-free.
      </p>
      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className={`px-6 py-2 rounded-full font-semibold ${
            isDark
              ? 'bg-white text-blue-600 hover:bg-gray-100'
              : 'bg-white text-blue-600 hover:bg-gray-100'
          }`}
        >
          Get a Quote
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className={`px-6 py-2 rounded-full font-semibold border ${
            isDark
              ? 'bg-blue-500 border-white hover:bg-blue-700'
              : 'bg-blue-500 border-white hover:bg-blue-700'
          }`}
        >
          Sell My Licenses
        </motion.button>
      </div>
    </motion.section>
    <SectionDivider theme={theme} />
    </>
  );
}

export default HeroSection;
