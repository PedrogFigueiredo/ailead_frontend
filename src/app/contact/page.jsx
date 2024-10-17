import React from "react";
import ContactComponent from "@/components/ContactComponent";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "AILEAD || Contact",
  description: "AILEAD - A Inteligência do Líder",
};
const ContactPage = () => {
  return (
    <MasterLayout>
      <ContactComponent />
    </MasterLayout>
  );
};

export default ContactPage;
