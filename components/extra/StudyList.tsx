import info from '../../utils/info';
import { HoverEffect } from '../ui/HoverEffect';

const StudyList = () => {
  const { educacion } = info.aboutme;

  return (
    <div className="flex flex-wrap justify-center md:justify-start">
      <HoverEffect
        items={educacion.map((item) => ({
          title: item.institute,
          description: item.degree,
          period: item.period,
        }))}
      />
    </div>
  );
};

export default StudyList;