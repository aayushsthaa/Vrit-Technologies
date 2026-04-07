import { useState } from "react";
import Card from "../components/Card";

function SecondPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Note */}
      <h2 className="text-center font-fustat-medium text-[32px] mt-15">
        Note: Click the cards to view the animation
      </h2>
      <div className="flex flex-col gap-12 w-304 mx-auto mt-6">
        {/* Heading container*/}
        <div className="flex flex-col gap-5 w-135">
          <p className="font-Outfit text-[24px]">
            Explore our classes and master trending skills!
          </p>
          <h3 className="font-Nohemi-bold text-[32px]">
            Dive Into{" "}
            <span className="text-dark-green">What’s Hot Right Now!</span> 🔥
          </h3>
        </div>
        {/* Cards */}
        <div className="flex gap-8 items-center justify-center">
          <Card
            number="23"
            title="All Courses"
            paragraph="courses you're powering through right now."
            isActive={activeIndex === 0}
            onClick={() => setActiveIndex(0)}
          />

          <Card
            number="05"
            title="Upcoming Courses"
            paragraph="exciting new courses waiting to boost your skills."
            isActive={activeIndex === 1}
            onClick={() => setActiveIndex(1)}
          />

          <Card
            number="10"
            title="Ongoing Courses"
            paragraph="currently happening—don't miss out on the action!"
            isActive={activeIndex === 2}
            onClick={() => setActiveIndex(2)}
          />
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
