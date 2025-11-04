// /app/components/CaseStudyCard.js

"use client";

import Image from "next/image";
import Stars from "../../public/images/blue-stars.svg";
import Search from "../..//public/images/search-icon.svg";

const CaseStudyCard = ({ project, onShowMore }) => {
  return (
    <div className="slider-card bg-[#fbfaff] rounded-lg h-full flex flex-col mt-12">
      <div className="flex lg:flex-row flex-col">
        <div className="swiper-left-content lg:w-2/4 w-full p-[30px] lg:text-left text-center">
          <div className="font-semibold uppercase">
            {project.tag} /{" "}
            <span className="text-[#6320ee]">{project.category}</span>
          </div>
          <div className="flex flex-col gap-8 mt-14 lg:text-left lg:items-start text-center items-center">
            <h3 className="text-black">{project.mainMetric}</h3>
            <div>
              <h4 className="font-bold text-[#6320ee]!">
                {project.secondaryMetric}
              </h4>
              Reply Rate
            </div>
            <div>
              <Image src={Stars} className="" width={20} height={20} alt="" />
            </div>
            <div className="flex items-center gap-5">
              <div className="profile-img-wrapper ">
                <Image
                  src={project.author.image}
                  className="object-cover w-full! h-full! rounded-[20px]"
                  width={20}
                  height={20}
                  unoptimized={true}
                  alt=""
                />
              </div>
              <div>
                <h4>{project.author.name}</h4>
                <p>{project.author.role}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-right-content lg:w-2/4 w-full p-[30px] min-h-[580px] border-l border-[#e1d9f6]">
          <span className="bg-[#4001ff] py-1.5 px-3.5 text-[#fbfcfd] leading-normal rounded-full">
            LinkedIn Lead Generation
          </span>
          <div className="flex flex-col mt-10">
            <div className="flex items-center gap-3 border-b border-[#e1d9f6] pb-2 mb-2">
              <Image src={Search} alt="" width={10} height={10} />
              <div className="text-[20px] font-medium leading-normal">
                Strategy
              </div>
            </div>
            <p className="line-clamp-4 text-[16px]!">
              {project.sections[0].text}
            </p>
            <button
              href="#"
              onClick={() => onShowMore(project, "strategy")}
              className="text-[#4001ff] text-[16px] underline text-start mt-1 cursor-pointer font-bold"
            >
              Show more
            </button>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex items-center gap-3 border-b border-[#e1d9f6] pb-2 mb-2">
              <Image src={Search} alt="" width={10} height={10} />
              <div className="text-[20px] font-medium leading-normal">
                Reviews
              </div>
            </div>
            <p className="line-clamp-4 text-[16px]!">
              {project.sections[1].text}
            </p>
            <button
              href="#"
              onClick={() => onShowMore(project, "review")}
              className="text-[#4001ff] text-[16px] underline text-start mt-1 font-bold cursor-pointer"
            >
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
