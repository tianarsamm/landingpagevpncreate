import React from "react";
import Header from "./components/header";
import Provide from "./components/provide";
import Plan from "./components/plan";
import Location from "./components/location";
import Support from "./components/Support";
import Testimonials from "./components/testimonials";
import Subscribe from "./components/subscribe";

const Page = () => {
  return (
    <main>
      <Header />
      <Provide />
      <Plan />
      <Location />
      <Support />
      <Testimonials/>
      <Subscribe />
    </main>
  );
};

export default Page;