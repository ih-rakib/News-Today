import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Contact <span className="text-blue-600">Us</span>
      </h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
        We’d love to hear from you! Feel free to reach out for any inquiries.
      </p>
      <div className="text-center">
        <p className="text-lg text-gray-700 dark:text-gray-400">
          Email:{" "}
          <a
            href="mailto:info@nextnewstoday.com"
            className="text-blue-500 underline"
          >
            info@nextnewstoday.com
          </a>
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-400">
          Phone: <span className="text-blue-500">+1 (123) 456-7890</span>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
