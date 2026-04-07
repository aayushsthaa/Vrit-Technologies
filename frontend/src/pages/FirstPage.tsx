import { useState } from 'react'

function FirstPage() {
  const [isFirstCardHovered, setIsFirstCardHovered] = useState(false);
  const [isSecondCardHovered, setIsSecondCardHovered] = useState(false);
  const [secondCardActiveIndex, setSecondCardActiveIndex] = useState(0);
  return (
        <div className="mt-13.25">
      <h2 className="text-center font-fustat-medium text-[32px]">
        Note: Hover the component to view the animation & Click the arrow icon
      </h2>
      <div className="flex flex-col gap-12 w-303 mx-auto mt-5.5">
        <div className="flex flex-col gap-2">
          <p className="font-Outfit-medium text-2xl">
            Your SkillShikshya Journey
          </p>
          <h2 className="font-Nohemi-bold font-bold text-[32px]">
            <span className="text-dark-green">Step</span> In.{" "}
            <span className="text-dark-green">Skill</span> Up.{" "}
            <span className="text-dark-green">Stand</span> Out. 🚀
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 w-303">
          {/* Card 1 */}
          <div 
            className="relative w-148 h-85.25 group"
            onMouseEnter={() => setIsFirstCardHovered(true)}
            onMouseLeave={() => setIsFirstCardHovered(false)}
          >
            {/* Main card */}
            <div className={`flex items-center rounded-[30px] w-full h-full bg-background-red relative overflow-visible animate-float-card transition-all duration-700 ease-in-out ${isFirstCardHovered ? 'translate-x-[-140%] opacity-0 scale-90 pointer-events-none' : 'translate-x-0 opacity-100'}`}>
              <div className="absolute -bottom-6.75 -left-12.25 w-59.25 h-84.5 animate-float-image">
                <img
                  src="/images/boy-think.svg"
                  alt="boy-thinking"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-51.5 right-8.75 flex flex-col gap-8 text-white text-right">
                <div className="flex flex-col gap-2.5 items-end">
                  <h2 className="font-Nohemi-bold font-bold text-[32px]">
                    Start with Clarity
                  </h2>
                  <p className="font-Outfit-medium font-medium text-[24px]">
                    Step into a better learning path.
                  </p>
                </div>
                <p className="font-Outfit text-[18px] leading-none opacity-90">
                  Overwhelmed by too many learning options? SkillShikshya provides
                  a clear, curated roadmap from the start. Whether you're a
                  beginner or upskilling, we have a path tailored to your growth.
                </p>
              </div>
            </div>

            {/* First card */}
            <div
              className={`absolute inset-0 rounded-[30px] bg-background-red overflow-x-visible overflow-y-clip transition-all duration-700 ease-out flex items-center px-6.25 ${isFirstCardHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
              <div className={`w-20 h-20 absolute -left-5 rounded-r-full bg-white transition-opacity ${isFirstCardHovered ? 'opacity-100 duration-300 delay-[50ms]' : 'opacity-0 duration-300 delay-0'}`}></div>
              <div className={`w-20 h-20 absolute -right-5 rounded-l-full bg-white transition-opacity ${isFirstCardHovered ? 'opacity-100 duration-300 delay-[50ms]' : 'opacity-0 duration-300 delay-0'}`}></div>
              <div className="absolute -left-3.25 top-1/2 -translate-y-1/2 w-15.5 h-15.5 drop-shadow-md drop-shadow-gray-400">
                <img
                  src="/images/arrow-left.svg"
                  alt="arrow-left"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full items-center gap-4 relative">
                <div className="w-88 object-contain h-80.75 relative">
                  <img
                    src="/images/image 2.png"
                    alt="boy"
                    className="w-full h-full relative z-10"
                  />
                  <img
                    src="/images/image 2.png"
                    alt="shadow"
                    className="absolute bottom-0 left-3 z-0"
                    style={{ filter: "brightness(0)" }}
                  />
                </div>
                <div className="absolute top-6 left-4 object-contain">
                  <img
                    src="/images/wow.png"
                    alt="wow"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-6.5 right-15.5 object-contain scale-x-[-1] rotate-20">
                  <img
                    src="/images/wow.png"
                    alt="wow"
                    className="w-full h-full"
                  />
                </div>
                <div className="text-white">
                  <h3 className="font-Nohemi-bold text-[20px] tracking-normal w-60.25 absolute top-8 right-0">
                    Clarity unlocked—stickers, sips, and skills all in one go!
                  </h3>
                </div>
              </div>
              <div className="absolute -right-3.25 top-1/2 -translate-y-1/2 w-15.5 h-15.5 drop-shadow-md drop-shadow-gray-400">
                <img
                  src="/images/arrow-right.svg"
                  alt="arrow-right"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>


          {/* Card 2 */}
          <div 
            className="relative w-148 h-85.25 group"
            onMouseEnter={() => setIsSecondCardHovered(true)}
            onMouseLeave={() => setIsSecondCardHovered(false)}
          >
            {/* Main card */}
            <div className={`flex items-center rounded-[30px] w-full h-full bg-background-dark-cyan relative overflow-visible transition-all duration-700 ease-in-out ${isSecondCardHovered ? 'translate-x-[140%] opacity-0 scale-90 pointer-events-none' : 'translate-x-0 opacity-100'}`}>
              <div className="absolute -bottom-11.5 right-8 w-45 h-91.75 animate-float-image">
                <img src="/images/boy-reading.svg" alt="boy" className="w-full h-full object-contain drop-shadow-2xl" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-8.75 flex flex-col gap-8 text-white text-left">
                <div className="flex flex-col gap-2.5 items-start">
                  <h2 className="font-Nohemi-bold font-bold text-[32px]">Learn by Doing</h2>
                  <p className="font-Outfit-medium font-medium text-[24px]">Practical skills, real projects.</p>
                </div>
                <p className="font-Outfit text-[18px] leading-none w-88">Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.</p>
              </div>
            </div>
            {/* inside card */}
            <div className={`absolute inset-0 rounded-[30px] bg-background-dark-cyan overflow-x-visible overflow-y-clip transition-all duration-700 ease-out flex items-center px-6.25 ${isSecondCardHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
              <div className={`w-20 h-20 absolute -left-5 rounded-r-full bg-white transition-opacity ${isSecondCardHovered ? 'opacity-100 duration-200 delay-[50ms]' : 'opacity-0 duration-300 delay-0'}`}></div>
              <div className={`w-20 h-20 absolute -right-5 rounded-l-full bg-white transition-opacity ${isSecondCardHovered ? 'opacity-100 duration-200 delay-[50ms]' : 'opacity-0 duration-300 delay-0'}`}></div>
              
              {/* Left Arrow */}
              <div className="absolute -left-3.25 top-1/2 -translate-y-1/2 w-15.5 h-15.5 drop-shadow-md drop-shadow-gray-400 cursor-pointer z-30" onClick={() => setSecondCardActiveIndex(secondCardActiveIndex === 0 ? 1 : 0)}>
                <img src="/images/arrow-left.svg" alt="arrow" className="w-full h-full object-cover" />
              </div>
              <div className="relative w-full h-full flex items-center">
                {/* Switcher A */}
                <div className={`absolute inset-0 flex items-center transition-opacity duration-0 ${secondCardActiveIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-white">
                    <h3 className="font-Nohemi-bold text-[20px] w-60.25 absolute top-8 left-20">
                      Focused faces—learning mode: ON!
                    </h3>
                  </div>
                  <div className="w-143 object-contain h-82.25 absolute -bottom-2">
                    <img
                      src="/images/2.png"
                      alt="boy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Switcher B */}
                <div className={`absolute inset-0 transition-opacity duration-0 ${secondCardActiveIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="text-white text-center w-63.25 absolute top-10 left-1/2 -translate-x-1/2 z-10">
                     <h3 className="font-Nohemi-bold text-[20px]">
                       Laptops, lessons, and a whole lot of growth!
                     </h3>
                   </div>
                   <div className="w-143 object-contain h-82.25 absolute -bottom-2 left-1/2 -translate-x-1/2">
                     <img
                       src="/images/group-photo.png"
                       alt="group-photo"
                       className="w-full h-full object-contain"
                     />
                   </div>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="absolute -right-3.25 top-1/2 -translate-y-1/2 w-15.5 h-15.5 drop-shadow-md drop-shadow-gray-400 cursor-pointer z-30" onClick={() => setSecondCardActiveIndex(secondCardActiveIndex === 0 ? 1 : 0)}>
                <img src="/images/arrow-right.svg" alt="arrow" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center rounded-[30px] w-148 h-85.25 bg-background-purple relative overflow-visible animate-float-card">
            <div className="absolute -bottom-6.75 -left-12 w-76.75 h-62.25 animate-float-image">
              <img
                src="/images/girl-headphone.svg"
                alt="girl-headphone"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-8.75 flex flex-col gap-8 text-white text-right w-104.25">
              <div className="w-full">
                <h2 className="font-Nohemi-bold font-bold text-[32px] ">
                  Get Mentored & Supported
                </h2>
                <p className="font-Outfit-medium font-medium text-[24px]">
                  You're not learning alone.
                </p>
              </div>

              <p className="font-Outfit text-[18px] leading-none opacity-90 max-w-77.75 self-end">
                Stuck or need feedback? SkillShikshya's community of mentors and
                learners has your back with live support, interactive
                discussions, and expert insights. You're never on your own.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex items-center rounded-[30px] w-148 h-85.25 bg-background-brown relative overflow-visible animate-float-card">
            <div className="absolute -bottom-6.75 -right-12 w=70 h-77.5 animate-float-image rotate-6">
              <img
                src="/images/boy-laptop.svg"
                alt="boy-laptop"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-8.75 flex flex-col gap-8 text-white text-left w-104.25">
              <div className="w-full">
                <h2 className="font-Nohemi-bold font-bold text-[32px] ">
                  Achieve & Showcase
                </h2>
                <p className="font-Outfit-medium font-medium text-[24px]">
                  Build your portfolio, get job-ready.
                </p>
              </div>

              <p className="font-Outfit text-[18px] leading-none opacity-90 max-w-77.75 self-start">
                Your journey ends with achievement. Each completed project
                builds a portfolio showcasing your skills and job readiness,
                bringing you closer to that dream job, promotion, or your own
                venture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstPage