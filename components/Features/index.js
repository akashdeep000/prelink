import Link from "next/link";
import Card from "./Card";
export default function Features() {
  const data = [
    {
      id: 1,
      title: "Multiple Preview",
      description:
        "Get preview of link for multiple social media platform (facebook, twitter, whatsapp).",
    },
    {
      id: 2,
      title: "Auto Paste URL",
      description:
        "Automatically fill up url field with copied link from clipboard when you come to this website or reload.",
    },
    {
      id: 3,
      title: "Glitch Free",
      description:
        "You will rarely find any glitch when showing link preview for different platforms.",
    },
    {
      id: 4,
      title: "API for Developers",
      description:
        "Developer can use our easy to use api to get any urls metadata with a single GET request (see api docs by clicking get api button on header section).",
    },
    {
      id: 5,
      title: "Download Metadata",
      description: "You can easily download websites metadata as a CSV file.",
    },
    {
      id: 6,
      title: "Sharable Link",
      description:
        "You can share link after you fetch the website's link-preview and recipient can see the same preview opening the link.",
    },
  ];
  return (
    <>
      <div className="w-full mt-6 md:mt-16 lg:mt-20 grid place-items-center">
        <div className="w-[90%]">
          <div className="h-fill text-slate-700 text-2xl md:text-4xl lg:text-5xl font-semibold grid place-items-center grid-cols-[20%_auto_20%] justify-center">
            <span className="bg-gradient-to-r to-indigo-500 via-purple-200 from-slate-50 w-full h-[25%] rounded-full"></span>
            <span className="px-1.5 text-indigo-500"> Features </span>
            <span className="bg-gradient-to-l to-indigo-500 via-purple-200 from-slate-50 w-full h-[25%] rounded-full"></span>
          </div>
          <div className="py-20 md:mt-6 grid md:grid-cols-2 justify-center gap-x-10 gap-y-16">
            {data.map((e) => {
              return <Card key={e.id} props={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
