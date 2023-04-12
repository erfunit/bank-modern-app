import React, { Component } from "react";
import styles from "./style";

import {
  Navbar,
  Hero,
  Stats,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
  Business,
} from "./components";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX}`}>
      <div className={`${styles.boxWidth} mx-auto`}>
        <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
        <Clients /> <CTA /> <Footer />
      </div>
    </div>
  </div>
);

export default App;
