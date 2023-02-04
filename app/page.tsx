import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      lorem, ipsum dolor sit amet consectetur adipisicing elit. ullam odio hic
      nisi voluptatem reprehenderit, cum quidem aliquam beatae asperiores
      dignissimos libero dolor ea fugit possimus eos, quisquam iste nostrum
      fuga.
    </main>
  );
}
