import Link from "next/link";
import Card from "./Card";
export default function Features() {
  const data = [
    {
      id: 1,
      title: "Multiple Preview",
      description: "Get Preview of Link for Multiple Social Media Platform (Facebook, Twitter, WhatsApp)",
    },
    {
      id: 2,
      title: "Auto Paste URL",
      description:
        "Automatically Fill Up Url Field with Copied Link from Clipboard When You Come To This Website or Reload.",
    },
    {
      id: 3,
      title: "Glitch Free",
      description:
        "You Will Rearly Find Any Glitch When Showing Link Preview For Different Platforms.",
    },
    {
      id: 4,
      title: "API for Developers",
      description:
        "Developer Can Use Our Easy to Use API to Get Any URLs Metadata With a Single GET Request (See API Docs By Clicking Get API Button On Header Section).",
    },
    {
      id: 5,
      title: "Download Metadata",
      description: "You Can Easily Download Websites Metadata as A CSV File.",
    },
    {
      id: 6,
      title: "Sharable Link",
      description:
        "You Can Share Link After You Fetch The Website's Link-Preview And Recipient Can See It Opening The Link.",
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
