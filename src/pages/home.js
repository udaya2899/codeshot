import React from "react";
import codeshotLogo from "../assets/codeshot-logo.png";
import Banner from "../components/banner";
import CodeEditor from "../components/CodeEditor";

const Home = () => {
  return (
    <div className="p-8 w-full h-full bg-corn-silk bg-opacity-75 flex flex-col">
      <div className="">
        <img
          src={codeshotLogo}
          className="m-auto opacity-50"
          alt="Codeshot Logo"
          width="200"
        />
      </div>{" "}
      <div className="md:flex md:p-8 md:mt-4 w-full h-full md:items-center">
        <Banner />
        <CodeEditor />
      </div>{" "}
    </div>
  );
};

export default Home;
