interface CardProps {
  number: string;
  title: string;
  paragraph: string;
  isActive: boolean;
  onClick: () => void;
}

const Card = ({ number, title, paragraph, isActive, onClick }: CardProps) => {
  const icons = [
    "./src/assets/images/react.png",
    "./src/assets/images/like.png",
    "./src/assets/images/vue.png",
    "./src/assets/images/pen.png",
  ];

  return (
    <div
      onClick={onClick}
      className={`relative h-115 rounded-4xl cursor-pointer transition-all duration-1000 ease-in-out p-10 flex flex-col overflow-hidden bg-secondary
        ${isActive ? 'w-148 text-white' : 'w-70 text-secondary'}`}
    >
      {/* Circle animation */}
      <div 
        className={`absolute rounded-full bg-pink-card transition-all duration-1000 ease-in-out
          ${isActive 
            ? 'w-0 h-0 -bottom-20 -left-20' 
            : 'w-[200%] h-[200%] -bottom-[50%] -left-[50%]'
          }`}
      />

      {/* Top Section Link */}
      <div className={`flex justify-end transition-opacity duration-700 z-10 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button className="flex items-center gap-2 font-Outfit text-sm opacity-90 hover:opacity-100 transition-opacity">
          View all Courses 
          <span className="text-lg">&rarr;</span>
        </button>
      </div>

      {/* Icons */}
      <div className={`absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-700 z-10 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none invisible'}`}>
         <div className="flex gap-6 items-center">
           {icons.map((icon, i) => (
              <div key={i} className="w-18.75 h-18.75 drop-shadow-xl">
                 <img src={icon} alt="tech-icon" className="w-full h-full object-contain" />
              </div>
           ))}
         </div>
      </div>
      {/* Title and Paragraph */}
      <div 
        className={`absolute transition-all duration-500 flex flex-col origin-center z-10
          ${isActive 
            ? 'bottom-14.25 right-8.75 rotate-0 w-69.5 translate-x-0 translate-y-0' 
            : 'bottom-60 right-1/2 translate-x-1/2 -rotate-90 text-left w-54.5'
          }`}
      >
        <h3 className="font-Outfit font-bold text-[32px] leading-tight text-left">{title}</h3>
        <p className={`font-Outfit text-[18px] opacity-90 leading-5 transition-all duration-700 ${isActive ? 'w-55 opacity-100' : 'opacity-0'}`}>
          {paragraph}
        </p>
      </div>
      {/* Number */}
      <div 
        className={`absolute flex bottom-10 z-10
          ${isActive 
            ? 'right-85.5' 
            : 'left-1/2 -translate-x-1/2'
          }`}
      >
        <div className="relative translate-y-2">
          <span className="font-Nohemi-bold text-[150px] leading-1">
            {number}
          </span>
          <span className={`absolute font-Nohemi-bold font-bold transition-all duration-1000 text-[64px] ${isActive ? '-top-29 -right-6' : '-top-29 -right-6'}`}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
