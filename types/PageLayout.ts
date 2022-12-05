import { NextPage } from "next";
import React from "react";

export type PageWithLayout<T = {}> = NextPage<T> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
};
