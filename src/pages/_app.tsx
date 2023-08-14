import Head from "next/head";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { DashboardLayout } from "@/dashboard/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>College Mentor Dashboard</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
        </style>
      </Head>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </>
  );
}

export default MyApp;
