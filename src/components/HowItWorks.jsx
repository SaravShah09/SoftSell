// src/components/HowItWorks.jsx
import { motion } from 'framer-motion';
import {
  ArrowUpTrayIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';
import SectionDivider from './SectionDivider';

const steps = [
  {
    title: 'Upload License',
    Icon: ArrowUpTrayIcon,
    description: 'Submit your unused license in a few easy clicks.',
  },
  {
    title: 'Get Valuation',
    Icon: CurrencyDollarIcon,
    description: 'Receive an instant estimate based on market value.',
  },
  {
    title: 'Get Paid',
    Icon: BanknotesIcon,
    description: 'Accept the offer and get paid directly to your account.',
  },
];

const HowItWorks = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <>
    <section
      className={`py-16 text-center ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-3xl font-semibold mb-12">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-4">
        {steps.map(({ title, Icon, description }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`p-6 rounded-2xl shadow-md w-full max-w-xs mx-auto ${
              isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
            }`}
          >
            <Icon
              className={`h-12 w-12 mx-auto mb-4 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}
            />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
    <SectionDivider theme={theme} />
    </>
  );
};

export default HowItWorks;
