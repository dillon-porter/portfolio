import React from 'react';

const CVButton = ({ resumeLink }) => {
  return (
    <div className="mt-1 sm:text-left">
      <a href={resumeLink} className="bg-blue-900 dark:bg-[#2e2e2e] group border-current dark:border-[#3e3e3e] hover:bg-[#8892b0] dark:hover:bg-[#3e3e3e] hover:text-white hover:border-[#8892b0] dark:hover:border-[#4e4e4e] text-white font-medium py-2 px-4 rounded inline-block">
        Download My CV
      </a>
    </div>
  );
};

export default CVButton;
