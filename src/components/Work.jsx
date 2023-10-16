import React from 'react';
import Weather from '../assets/Kaique-Rocha-weather-photo.jpg';
import Blog from '../assets/Blog.jpg';
import Photoblog from '../assets/Photoblog.jpg';

const Work = () => {
  return (
    <div className="w-full lg:h-screen" name="work">
      <div className=" w-full mx-auto flex flex-col justify-center items-center p-4 py-8">
        <h2 className="text-5xl ">My work!</h2>
        <span className="py-8">
          Here you can find some of my latest projects
        </span>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            alt="weather photo"
            style={{ backgroundImage: `url(${Weather})` }}
            className="group container bg-no-repeat
            bg-center bg-cover mx-auto rounded-md shadow-2xl shadow-[#131313] border-2 border-white border-solid"
          >
            <div className="bg-[#2b2b2bd2] group-active:opacity-100 group-hover:opacity-100 opacity-0 w-100 h-[100%] z-1 group duration-300 ease-in-out">
              <div className="opacity-0 group-active:opacity-100 group-hover:opacity-100 duration-300 w-[250px] flex flex-col pt-8 z-2">
                <span className="text-2xl font-bold text-[#ffffff] tracking-wider text-center items-center ">
                  Simple Weather App
                </span>
                <span className="text-md text-[#ffffff] tracking-wider text-center items-center ">
                  (TypeScript + Next.JS + Tailwind)
                </span>
                <div className="pt-8 text-center ">
                  <button className="rounded-md m-4 font-bold text-2xl bg-[#ffffff] text-[#131313] p-2 hover:scale-110 duration-300">
                    <a
                      href="https://weather-app-ua3y.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="rounded-lg m-4 font-bold text-2xl bg-[#ffffff] text-[#131313] p-2 hover:scale-110 duration-300">
                    <a
                      href="https://github.com/aftermath321/weather-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            alt="blog photo"
            style={{ backgroundImage: `url(${Blog})` }}
            className="group container bg-no-repeat
            bg-center bg-cover mx-auto rounded-md shadow-2xl shadow-[#131313] border-2 border-white border-solid"
          >
            <div className="bg-[#2b2b2bd2] group-active:opacity-100 group-hover:opacity-100 opacity-0 w-100 h-[100%] z-1 group duration-300 ease-in-out">
              <div className="opacity-0 group-active:opacity-100 group-hover:opacity-100 duration-300 w-[250px] flex flex-col pt-8 z-2">
                <span className="text-2xl font-bold text-[#ffffff] tracking-wider text-center items-center ">
                  Blog Mock-up
                </span>
                <span className="text-lg text-[#ffffff] tracking-wider text-center items-center ">
                  (Next.JS + CSS3)
                </span>
                <div className="pt-8 text-center ">
                  <button className="rounded-lg m-4 font-bold text-2xl bg-[#ffffff] text-[#131313] p-2 hover:scale-110 duration-300">
                    <a
                      href="https://blog-mockup.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="rounded-lg m-4 font-bold text-2xl bg-[#ffffff] text-[#131313] p-2 hover:scale-110 duration-300">
                    <a
                      href="https://github.com/aftermath321/blog_mockup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            alt="photoblog photo"
            style={{ backgroundImage: `url(${Photoblog})` }}
            className="group container bg-no-repeat
            bg-center bg-cover mx-auto rounded-md shadow-2xl shadow-[#131313] border-2 border-white border-solid"
          >
            <div className="bg-[#2b2b2bd2] group-active:opacity-100 group-hover:opacity-100 opacity-0 w-100 h-[100%] z-1 group duration-300 ease-in-out">
              <div className="opacity-0 group-active:opacity-100 group-hover:opacity-100 duration-300 w-[250px] flex flex-col pt-8 z-2">
                <span className="text-2xl font-bold text-[#ffffff] tracking-wider text-center items-center ">
                  Photo-Blog
                </span>
                <span className="text-md text-[#ffffff] tracking-wider text-center items-center ">
                  (TypeScript + Next.JS + TailWind)
                </span>
                <div className="pt-8 text-center ">
                  <button className="rounded-lg m-4 font-bold text-2xl bg-[#ffffff] text-[#131313] p-2 hover:scale-110 duration-300">
                    <a
                      href="https://photo-blog-beta.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="rounded-lg m-4 font-bold text-2xl bg-[#ffffff] text-[#131313] p-2 hover:scale-110 duration-300">
                    <a
                      href="https://github.com/aftermath321/photo-blog"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
