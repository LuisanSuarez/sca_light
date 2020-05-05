import React from "react";
import VerticalPadding from "./VerticalPadding";
import Jumbotron from "./Jumbotron";
import StaticJumbotron from "./StaticJumbotron";
import Presentation from "./Presentation";
import Features from "./Features";
import About from "./About";
import Services from "./Services";
// import Contact from "./Contact";
import BlogSection from "./BlogSection";
import { colors } from "../globalVariables";

export default function Home() {
  return (
    <>
      {/* <Jumbotron /> */}
      <StaticJumbotron />
      <VerticalPadding backgroundColor={colors.lgray} />
      <Presentation />
      <Features />
      <VerticalPadding backgroundColor={colors.lgray} />
      <Services />
      {/* <VerticalPadding /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <BlogSection />
    </>
  );
}
