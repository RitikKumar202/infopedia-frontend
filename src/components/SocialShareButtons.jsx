import React from "react";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaRedditSquare,
} from "react-icons/fa";

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="w-full flex justify-start">
      <a
        href={`https://www.linkedin.com/share?url=${url}&title=${title}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="w-10 md:w-12 h-auto text-[#0072b1] mr-2" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare className="w-10 md:w-12 h-auto text-[#00acee] mr-2" />
      </a>
      <a
        href={`https://api.whatsapp.com/send/?text=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsappSquare className="w-10 md:w-12 h-auto text-[#25d366] mr-2" />
      </a>
      <a
        href={`https://www.reddit.com/submit?url=${url}&title=${title}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaRedditSquare className="w-10 md:w-12 h-auto text-[#ff4500] mr-2" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
