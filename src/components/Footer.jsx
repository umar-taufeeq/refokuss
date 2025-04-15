import React from "react";

const Footer= ()=> {
  return (
    <div className="w-full   ">
      <div className=" max-w-screen-xl mx-auto py-10 flex gap-32  px-20 ">
        <div className="basis-1/2">
          <h1 className="text-[10.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
          <div className="flex gap-4 mt-10">
          {["Privacy Policy", "Cookie policy","impressum","Terms"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-sm text-zinc-600">{item}</a>
            ))}
          </div>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className=" mb-10 text-zinc-400 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className=" mb-10 text-zinc-400 capitalize">socials</h4>
            {["Home", "Work", "Careers","Contact"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize ">{item}</a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right text-sm w-52">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img className="w-32 mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;