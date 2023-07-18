import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { HomePage } from "src/features/core/layouts/HomePage";
import RootLayout from "src/features/core/layouts/RootLayout";
import { SurahPage } from "src/features/surah/layout/SurahPage";

const Page = () => {
  return (
    <RootLayout>
      <SurahPage />
    </RootLayout>
  );
};

export default Page;
