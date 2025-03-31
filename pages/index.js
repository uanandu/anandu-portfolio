import Head from "next/head";
import Header from "../components/Header";
import LinkedInButton from "../components/LinkedInButton";
import Whiteboard from "../components/Whiteboard";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#333",
        fontFamily: "'Inter', sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Head>
        <title>Portfolio Under Construction</title>
        <meta name="description" content="Portfolio Under Construction" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <LinkedInButton />
      <Whiteboard />
    </div>
  );
}