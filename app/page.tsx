"use client";
import { Inter } from "@next/font/google";
import { useSelector } from "react-redux";
import { selectCount } from "../features/counter/counterSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const count = useSelector(selectCount);
  return <main className={inter.className}>{count}</main>;
}
