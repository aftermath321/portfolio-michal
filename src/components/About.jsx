import React from 'react';

const About = () => {
  return (
    <div className="w-full h-screen " name="about">
      <div className="items-center justify-center flex flex-col w-full p-4">
        <h2 className="text-4xl py-6">About</h2>
        <div className="grid grid-cols-2 w-full max-w-[1000px] gap-8 ">
          <div>
            <p className=" text-2xl">
              Hi, I'm <span className="text-4xl text-bold text-[#fb7e14]">Michał!</span>
            </p>
            <p className="text-2xl  pt-2 pl-16">Pleased to meet you!</p>
          </div>
          <div className="justify-center items-center">
            I am a passionate <span className="text-[#fb7e14]">Fullstack Website Developer</span>
            who loves challenges. <br />I started this whole programming thing in 2020 out of
            curiosity.
            <br />
            The vast amount of knowledge and a need for "know-how" immediately caught me and never
            let go. That same year I started
            <span className="text-[#fb7e14]">Java Developer Course</span> at CodersLab. Since then I
            tried different programming languages and that's how I got to learn
            <span className="text-[#fb7e14]">JavaScript</span>, along with
            <span className="text-[#fb7e14]">React</span> and
            <span className="text-[#fb7e14]">NextJS.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
