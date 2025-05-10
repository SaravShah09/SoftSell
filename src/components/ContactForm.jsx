import { useState } from "react";
// src/components/ContactForm.jsx
function ContactForm({ theme }) {
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    licenseType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
<section
      className={`py-10 px-6 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-amber-50 text-black'
      }`}
    >
      
      <h2 className="text-center text-2xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4 max-w-md mx-auto text-center">
  <input
    type="text"
    placeholder="Your Name"
    className="w-full p-2 rounded border text-black  bg-cyan-100 border-amber-500 dark:bg-amber-300 dark:text-black dark:border-amber-400"
  />
  <input
    type="email"
    placeholder="Your Email"
    className="w-full p-2 rounded border text-black  bg-cyan-100 border-amber-500 dark:bg-amber-300 dark:text-black dark:border-amber-400"
  />
  <select
    name="licenseType"
    value={formData.licenseType}
    onChange={handleChange}
    className="w-full p-2 rounded border text-black bg-cyan-100 border-amber-500 dark:bg-amber-300 dark:text-black dark:border-amber-400"
  >
    <option value="">Select License Type</option>
    <option value="Windows">Windows</option>
    <option value="Office">Microsoft Office</option>
    <option value="Antivirus">Antivirus</option>
    <option value="Other">Other</option>
  </select>
  <textarea
    placeholder="Message"
    className="w-full p-2 rounded border text-black  bg-cyan-100 border-amber-500 dark:bg-amber-300 dark:text-black dark:border-amber-400"
  />
  <button
    type="submit"
    className="w-full bg-blue-700 text-black font-semibold px-4 py-2 rounded hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-500"
  >
    Submit
  </button>
</form>

    </section>
    </>
  );
}

export default ContactForm;
