"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import "./globals.css";
import store from "../store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={{ background: "black", color: "white" }}>
        <ChakraProvider>
          <Provider store={store}>{children}</Provider>
        </ChakraProvider>
      </body>
    </html>
  );
}
