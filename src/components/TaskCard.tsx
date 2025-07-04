import React from "react";

interface Avatar {
  src: string;
  alt: string;
}

interface TaskCardProps {
  date: string;
  title: string;
  subtitle: string;
  progress: number; // 0-100
  progressColor?: string; // tailwind color class
  avatars: Avatar[];
  timeLeft: string;
  gradientFrom: string; // tailwind color
  gradientTo: string; // tailwind color
}

const TaskCard: React.FC<TaskCardProps> = ({
  date,
  title,
  subtitle,
  progress,
  progressColor = "bg-cyan-400",
  avatars,
  timeLeft,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div
      className={`relative rounded-2xl p-5 shadow-xl bg-gradient-to-br from-${gradientFrom} to-${gradientTo} overflow-hidden min-h-[220px] flex flex-col justify-between border border-white/10 backdrop-blur-md bg-opacity-60`}
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
    >
      {/* Date and menu */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-white/80 font-medium">{date}</span>
        <button className="text-white/60 hover:text-white text-xl">&#8226;&#8226;&#8226;</button>
      </div>
      {/* Title & Subtitle */}
      <div>
        <h2 className="text-lg font-semibold text-white leading-tight">{title}</h2>
        <p className="text-sm text-white/70 mt-1">{subtitle}</p>
      </div>
      {/* Progress */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-white/70">Progress</span>
          <span className="text-xs text-white/80 font-semibold">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-white/20 rounded-full">
          <div
            className={`${progressColor} h-2 rounded-full transition-all`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      {/* Avatars & Time left */}
      <div className="flex justify-between items-center mt-5">
        <div className="flex -space-x-2">
          {avatars.map((avatar, idx) => (
            <img
              key={idx}
              src={avatar.src}
              alt={avatar.alt}
              className="w-7 h-7 rounded-full border-2 border-white object-cover bg-white/30"
            />
          ))}
        </div>
        <span className="text-xs text-white/80 bg-black/30 px-3 py-1 rounded-full">
          {timeLeft}
        </span>
      </div>
    </div>
  );
};

export default TaskCard; 