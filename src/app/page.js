import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Next.js</h1>
      <p>Hello, world</p>
      <Image src="/home.png" width={50} height={50} alt="Picture of the author" />
    </>
  );
}
