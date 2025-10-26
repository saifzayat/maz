import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Electricity } from "./assets/electricity.svg";
import { ReactComponent as Star } from "./assets/star.svg";
import { ReactComponent as Time } from "./assets/time.svg";
import { SCard } from "./components/SCard";
import { SendMail } from "./components/SendMail";

export const Home = () => {
  return (
    <>
      <main>
        <Logo className="svg" />
        <h2>
          Something <span className="highlight">Extraordinary</span> is Coming
        </h2>
        <p>
          We're crafting a revolutionary platform that transforms ideas into
          measurable impact. Be the first to experience the future of integrated
          innovation.
        </p>
        <SendMail />

        <div style={{ display: "flex", gap: 15 }}>
          <SCard Title="AI-Powered Design" Icon={Star} />
          <SCard Title="Collaboration" Icon={Electricity} />
          <SCard Title="24/7 Expert Support" Icon={Time} />
        </div>
      </main>
    </>
  );
};
