import Head from "next/head";

import Nav from "../components/Nav";
import Body from "../components/Body";
import About from "../components/About";

export default function Index() {
  return (
    <div>
      <Head>
        <title>QuotesWatch</title>
      </Head>
      <div className="text-lg grid md:grid-cols-2">
        <Nav />
        <Body />
      </div>
      <About />
    </div>
  );
}
