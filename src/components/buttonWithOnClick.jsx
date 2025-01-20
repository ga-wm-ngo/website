"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

const OtherButton = () => {
  return <Button className="bg-red-400" onClick={() => alert("boop")}>Boop</Button>;
};
export default OtherButton;