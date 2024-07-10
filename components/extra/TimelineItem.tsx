import React from 'react';

export const TimelineItem = ({ institute, degree, period }:{
    institute:string;
    degree: string;
    period: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left mb-8 relative md:mb-0 h-full">
      <div className="md:ml-8 md:mr-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg relative z-10 h-full">
        <span className="text-sm text-gray-600 dark:text-gray-400">{period}</span>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">{institute}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{degree}</p>
      </div>
    </div>
  );
};


