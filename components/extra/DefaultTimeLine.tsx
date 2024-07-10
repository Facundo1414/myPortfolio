import React from 'react';
import { TimelineItem } from './TimelineItem';
import info from '../../utils/info';

export const TimelineComponent = () => {
  const { educacion } = info.aboutme;

  return (
    <div className="relative flex flex-col md:flex-row overflow-x-auto space-x-0 md:space-x-8 p-4">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
      {educacion.map((item, index) => (
          <TimelineItem
            key={index}
            institute={item.institute}
            degree={item.degree}
            period={item.period}
          />
        ))}
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-700 md:top-1/2 md:left-0 md:w-full md:h-1 md:transform-none" />
    </div>
  );
};
