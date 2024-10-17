import React from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import BlogComponent from "@/components/BlogComponent";

export const metadata = {
  title: "AILEAD || Blog",
  description: "AILEAD - A Inteligência do Líder",
};
const BlogPage = () => {
  return (
    <MasterLayout>
      <BlogComponent />
    </MasterLayout>
  );
};

export default BlogPage;
