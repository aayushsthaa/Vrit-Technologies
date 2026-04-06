import React from 'react'

function FirstPage() {
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
          <div className="flex items-center rounded-[30px] w-148 h-85.25 bg-background-red relative overflow-visible animate-float-card">
            <div className="absolute -bottom-6.75 -left-12.25 w-[237px] h-[338px] animate-float-image">
              <img
                src="./src/assets/images/boy-think.svg"
                alt="boy-thinking"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute bottom-14.5 left-51.5 right-8.75 flex flex-col gap-8 text-white text-right">
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

          <div className="flex items-center rounded-[30px] w-148 h-85.25 bg-background-dark-cyan relative overflow-visible animate-float-card">
            <div className="absolute -bottom-11.5 right-8 w-45 h-91.75 animate-float-image">
              <img
                src="./src/assets/images/boy-reading.svg"
                alt="boy-reading"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute bottom-14.5 left-8.75 right-[35%] flex flex-col gap-8 text-white text-left">
              <div className="flex flex-col gap-2.5 items-start">
                <h2 className="font-Nohemi-bold font-bold text-[32px]">
                  Learn by Doing
                </h2>
                <p className="font-Outfit-medium font-medium text-[24px] ">
                  Practical skills, real projects.
                </p>
              </div>
              <p className="font-Outfit text-[18px] leading-none opacity-90">
                Theory is great, but action is better. At SkillShikshya, you
                learn by doing. Hands-on projects and real-world scenarios help
                you build, break, and create—leading to true mastery.
              </p>
            </div>
          </div>

          <div className="flex items-center rounded-[30px] w-148 h-85.25 bg-background-purple relative overflow-visible animate-float-card">
            <div className="absolute -bottom-6.75 -left-12 w-76.75 h-62.25 animate-float-image">
              <img
                src="./src/assets/images/girl-headphone.svg"
                alt="girl-headphone"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute bottom-14.5 right-8.75 flex flex-col gap-8 text-white text-right w-104.25">
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
          <div className="flex items-center rounded-[30px] w-148 h-85.25 bg-background-brown relative overflow-visible animate-float-card">
            <div className="absolute -bottom-6.75 -right-12 w=70 h-77.5 animate-float-image rotate-6">
              <img
                src="./src/assets/images/boy-laptop.svg"
                alt="boy-laptop"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute bottom-14.5 left-8.75 flex flex-col gap-8 text-white text-left w-104.25">
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