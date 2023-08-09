import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { HomePage } from "src/features/core/layouts/HomePage";
import RootLayout from "src/features/core/layouts/RootLayout";
import { SurahPage } from "src/features/surah/layout/SurahPage";
import { SalahPage } from "src/features/salah/SalahPage";
import { GetServerSideProps } from "next";

interface Props {
  city: string;
  country: string;
  date: string;
}

const Page = (props: SalahTimesRequest) => {
  if (
    props.city === undefined ||
    props.country === undefined ||
    props.date === undefined
  ) {
    props.city = "London";
    props.country = "United Kingdom";
    props.date = "2021-09-01";
  }

  return (
    <RootLayout>
      <SalahPage {...props} />
    </RootLayout>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  return {
    props: {
      city: context.query.city as string,
      country: context.query.country as string,
      date: context.query.date as string,
    },
  };
};
