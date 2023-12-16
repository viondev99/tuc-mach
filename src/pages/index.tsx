import Head from "next/head";
import HomePage from "@/components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tuc Mach Restaurant | Beer, Wine and Cigar</title>
        <meta name="og:title" content="Nhà Hàng Túc Mạch - Đậm Chất, Đậm Vị" />
        <meta name="og:description" content="Hân Hạnh Phục Vụ Quý Khách" />
        <meta
          name="og:author"
          content="Vion Nguyen - facebook.com/minhhiep.vip99"
        />
        <meta
          name="og:image"
          content="https://res.6chcdn.feednews.com/assets/v2/9bd625c24299463e9522bef37a6c299d?quality=uhq&resize=720"
        />
        <link rel="icon" href="/tuc-mach.favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
