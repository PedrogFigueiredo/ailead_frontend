import React from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import AboutComponent from "@/components/AboutComponent";

export const metadata = {
  title: "AILEAD || About",
  description: "AILEAD - A Inteligência do Líder",
};
const AboutPage = () => {
  return (
    <MasterLayout>
      <AboutComponent />
    </MasterLayout>
  );
};

export default AboutPage;
