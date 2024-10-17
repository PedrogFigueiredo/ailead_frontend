import React from "react";
import PortfolioComponent from "@/components/PortfolioComponent";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "AILEAD || Portfolio",
  description: "AILEAD - A Inteligência do Líder",
};
const page = () => {
  return (
    <MasterLayout>
      <PortfolioComponent />
    </MasterLayout>
  );
};

export default page;
