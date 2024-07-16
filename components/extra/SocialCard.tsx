import React from "react";
import "./SocialCard.css";

interface SocialCardProps {
  submitMessage: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ submitMessage }) => {
  return (
    <div className="relative w-76 h-100 flex flex-col items-center justify-center text-white font-bold text-xl p-4 pr-8 rounded-2xl overflow-hidden gap-y-4">
      <img
        src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
        alt="astronaut"
        className="w-48 float-animation hover:cursor-grab active:cursor-grabbing"
      />
      <div className="heading">{submitMessage}</div>
    </div>
  );
};

export default SocialCard;
