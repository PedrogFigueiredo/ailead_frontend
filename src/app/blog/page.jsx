import React from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import BlogComponent from "@/components/BlogComponent";

export const metadata = {
  title: "NetGrid || Blog",
  description: "NetGrid - Next JS Portfolio Template",
};
const BlogPage = () => {
  return (
    <MasterLayout>
      <BlogComponent />
    </MasterLayout>
  );
};

export default BlogPage;
