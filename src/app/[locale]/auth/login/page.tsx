import { Metadata } from "next";
import React, { useState } from "react";
import LoginForm from "./LoginForm";

const Index = () => {
  return <LoginForm />;
};

export const metadata: Metadata = {
  title: "登錄",
  description: "",
  keywords: ["a", "b", "c"],
};

export default Index;
