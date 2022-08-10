import Link from "next/link";

export default function Features({ props }) {
  return (
    <>
      <div className="relative bg-purple-50 rounded-lg">
        <div className="absolute text-7xl md:text-8xl font-bold text-purple-400 top-[-2.5rem] md:top-[-3rem] left-5 md:left-6">
          {props.id}
        </div>
        <div className="p-16">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text bg-gradient-to-r to-indigo-500 from-purple-500 text-transparent  font-sans mb-6">
            {props.title}
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl  text-slate-600">
            {props.description}
          </div>
        </div>
      </div>
    </>
  );
}
