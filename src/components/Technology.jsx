import { FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssLine, RiJavascriptLine, RiReactjsLine } from "react-icons/ri";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { SiOdoo } from "react-icons/si";

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3 className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaBootstrap className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMongodb className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiOdoo className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiPostgresql className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
