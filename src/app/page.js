import React from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import HomeComponent from "@/components/HomeComponent";

export const metadata = {
  title: "NetGrid || Home",
  description: "NetGrid - Next JS Portfolio Template",
};
export default function HomePage() {
  return (
    <MasterLayout>
      <HomeComponent />
    </MasterLayout>
  );
}
