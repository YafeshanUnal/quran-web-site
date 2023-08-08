import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { HomePage } from "src/features/core/layouts/HomePage";
import RootLayout from "src/features/core/layouts/RootLayout";
import { SurahPage } from "src/features/surah/layout/SurahPage";
import { SalahPage } from "src/features/salah/SalahPage";

const Page = () => {
  return (
    <RootLayout>
      <SalahPage />
    </RootLayout>
  );
};

export default Page;
