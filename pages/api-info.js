import Head from "next/head";
import Image from "next/image";
import Header from "components/Header";
import Footer from "components/Footer";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import fs from "fs";
const fsAsync = fs.promises;

export default function ApiInfo({data}) {
  const CodeBlock = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={dracula}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
  //  console.log(data);
  return (
    <>
      <Head>
        <title>PreLink - API documentation</title>
        <meta
          name="description"
          content="Documentation for API of PreLink website to get the metadata from urls."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-full grid justify-center mt-4 p-5">
        <div className="prose prose-indigo overflow-x-auto">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} components={CodeBlock}>
            {data.md}
          </ReactMarkdown>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const markdown = await fsAsync.readFile("api-info.md", "utf8");
  // console.log(markdown);
  return {
    props: { data: { md: markdown } },
  };
}
