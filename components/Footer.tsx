import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
      {/* background grid */}
      

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s build something <span className="text-[#1F7D53]">meaningful</span> together.
          
        </h1>
        <p className="text-emerald-100 md:mt-10 my-5 text-center">
        As a student developer, I&apos;m always open to new opportunities and collaborations. Let&apos;s connect!
        </p>
        <a href="mailto:faizan143sh@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Faizan Shaik
        </p>

        <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
            <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[#122D22] rounded-lg border border-[#1E3A2F] hover:scale-105 transition"
            >
                <img src={info.img} alt="icon" width={20} height={20} />
            </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;