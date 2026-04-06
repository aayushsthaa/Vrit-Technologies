import React from 'react';

interface FloatingCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  bgColorClass: string;
  imageSide?: 'left' | 'right';
  className?: string;
  rotation?: number;
  imageWidth?: string;
  imageHeight?: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  bgColorClass,
  imageSide = 'left',
  className = '',
  rotation = 0,
  imageWidth = '',
  imageHeight = '',
}) => {
  const isRight = imageSide === 'right';

  return (
    <div
      className={`
        flex items-center rounded-[30px] w-148 h-85.25 relative px-12 overflow-visible 
        animate-float-card hover:scale-[1.02] transition-transform duration-300
        ${bgColorClass} ${className}
      `}
    >
      <div
        className={`
          absolute -bottom-6.75 animate-float-image
          ${isRight ? 'right-[31.65px]' : '-left-12.25'}
        `}
        style={{ width: imageWidth || 'auto', height: imageHeight || 'auto' }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={rotation ? { transform: `rotate(${rotation}deg)` } : undefined}
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
      <div
        className={`
          absolute top-14.5 bottom-14.5 flex flex-col gap-8 text-white
          ${isRight ? 'left-8.75 right-[40%] text-left' : 'left-[30%] right-8.75 text-right'}
        `}
      >
        <div className={`flex flex-col gap-2.5 ${isRight ? 'items-start' : 'items-end'}`}>
          <h2 className="font-Nohemi-bold font-bold text-[32px] leading-[1.2]">
            {title}
          </h2>
          <p className="font-Outfit-medium font-medium text-[24px] leading-none">
            {subtitle}
          </p>
        </div>

        <p className="font-Outfit text-[18px] leading-relaxed opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FloatingCard;