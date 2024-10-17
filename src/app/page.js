import React from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import HomeComponent from "@/components/HomeComponent";

export const metadata = {
  title: "AILEAD || Home",
  description: "AILEAD - A Inteligência do Líder",
};
export default function HomePage() {
  return (
    <MasterLayout>
      <HomeComponent />
    </MasterLayout>
  );
}
