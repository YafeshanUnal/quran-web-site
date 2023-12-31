import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { HomePage } from "src/features/core/layouts/HomePage";
import RootLayout from "src/features/core/layouts/RootLayout";

const Page = () => {
  return (
    <RootLayout>
      <HomePage />
    </RootLayout>
  );
};

export default Page;
