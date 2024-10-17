"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  FaCommentAlt,
  FaEnvelope,
  FaHome,
  FaThLarge,
  FaUserAlt,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { usePathname } from "next/navigation";
const MasterLayout = (props) => {
  const router = usePathname();
  return (
    <>
      <div className="main__body">{props.children}</div>
    </>
  );
};

export default MasterLayout;
