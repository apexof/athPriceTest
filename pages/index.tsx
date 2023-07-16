import { AthPrice } from "@/components/AthPrice";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto Rank Test Task</title>
      </Head>
      <main>
        <AthPrice currencyName="bitcoin" />
      </main>
    </>
  );
}
