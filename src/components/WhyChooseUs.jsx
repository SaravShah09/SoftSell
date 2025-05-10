// src/components/WhyChooseUs.jsx
import SectionDivider from './SectionDivider';

import { BoltIcon, ShieldCheckIcon, UsersIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "Instant Quotes",
    desc: "Quick and accurate license valuation.",
    Icon: BoltIcon,
  },
  {
    title: "Secure Payments",
    desc: "We guarantee fast and safe transactions.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Trusted by 500+ Companies",
    desc: "We’re the go-to platform for license resale.",
    Icon: UsersIcon,
  },
];

const WhyChooseUs = ({ theme }) => (
  <>
  <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-50 text-gray-900'} text-center`}>
    <h2 className="text-3xl font-semibold mb-12">Why Choose Us</h2>
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-4">
      {features.map(({ title, desc, Icon }) => (
        <div
          key={title}
          className={`p-6 rounded-2xl shadow-md w-full max-w-xs mx-auto 
            ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}
        >
          <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{desc}</p>
        </div>
      ))}
    </div>
  </section>
  <SectionDivider theme={theme} />
  </>
);

export default WhyChooseUs;
