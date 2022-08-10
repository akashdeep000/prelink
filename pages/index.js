import Head from "next/head";
import Header from "components/Header";
import ToolBox from "components/ToolBox";
import Footer from "components/Footer";
import Features from "components/Features"
export default function Home() {
  return (
    <>
      <Head>
        <title>PreLink - Link Previewer</title>
        <meta
          name="description"
          content="Get link preview of any url for different social media platform with all metadata."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <h2 className="p-3 md:p-8 lg-p-14 pt-12 md:pt-16 lg:pt-18 text-2xl md:text-4xl lg:text-5xl  font-bold  text-slate-700 text-center">
          Get
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            {" "}
            Link-Preview{" "}
          </span>
          of any url <br /> and all
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            {" "}
            Metadata{" "}
          </span>
          <br />
          at one click
        </h2>
        <ToolBox />
        <Features/>
      </div>
      <Footer />
    </>
  );
}
