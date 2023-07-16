import { type NextPage } from "next";
import { SEO } from "y/components/elements/SEO";
import { Top } from "y/components/pages/Top";

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Top />
    </>
  );
};

export default Home;
