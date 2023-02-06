"use client";
import { Inter } from "@next/font/google";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByFive,
  increment,
  selectCount,
} from "../features/counter/counterSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <main className={inter.className}>
      {count}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement("lol"))}>Decrement</button>
      <button onClick={() => dispatch(increaseByFive(5))}>Decrement</button>
    </main>
  );
}
