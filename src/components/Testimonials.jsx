// src/components/Testimonials.jsx

import SectionDivider from './SectionDivider';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CTO',
    company: 'Acme Corp',
    feedback: 'SoftSell made it easy for us to recoup software costs.',
  },
  {
    name: 'John Smith',
    role: 'IT Manager',
    company: 'Beta Inc.',
    feedback: 'Fast, transparent, and professional service.',
  },
  {
    name: 'Priya Singh',
    role: 'Procurement Lead',
    company: 'TechNova',
    feedback: 'A smooth process from start to finish. Highly recommended!',
  },
  {
    name: 'Carlos Ramirez',
    role: 'Systems Analyst',
    company: 'GlobalWare',
    feedback: 'SoftSell helped us declutter unused software and recover value.',
  },
];

const Testimonials = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <>
    <section
      className={`py-16 text-center ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-3xl font-semibold mb-8">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 px-4">
        {testimonials.map(({ name, role, company, feedback }) => (
          <div
            key={name}
            className={`p-6 rounded shadow w-72 mx-auto ${
              isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
            }`}
          >
            <p className="italic mb-4">“{feedback}”</p>
            <p className="font-semibold">{name}</p>
            <p className={isDark ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>
              {role}, {company}
            </p>
          </div>
        ))}
      </div>
    </section>
    <SectionDivider theme={theme} />
    </>
  );
};

export default Testimonials;
