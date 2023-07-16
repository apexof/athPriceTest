import { AthPrice } from "@/components/AthPrice";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto Rank Test Task</title>
        <meta name="description" content="Crypto Rank Test Task" />
        <meta name="keywords" content="crypto" />
      </Head>
      <main>
        <AthPrice currencyName="bitcoin" />
      </main>
    </>
  );
}
