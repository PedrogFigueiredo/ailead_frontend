import React from "react";
import ServicesComponent from "@/components/ServicesComponent";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "AILEAD || Service",
  description: "AILEAD - A Inteligência do Líder",
};
const page = () => {
  return (
    <MasterLayout>
      <ServicesComponent />
    </MasterLayout>
  );
};

export default page;
