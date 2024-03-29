import React from "react";
import Link from "next/link";

import Image from "next/image";
import SproutIcon from "./images/sprout-icon.png";
import BrainIcon from "./images/brain-icon.png";
import SupportIcon from "./images/support-icon.png";
import Logo from "../app/images/logo.png";
const Home = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <div className="container">
            <h2>Grow Your Wealth with Intelligent Investing</h2>
            <p>
              Welcome to SproutVestor, your personalized guide to stock
              investing. Whether you're a student or new to the world of stocks,
              we're here to help you make informed decisions and achieve
              financial success.
            </p>
            <Link href="/LoginPage" className="btn">
              Get Started
            </Link>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <h2 className="text-4xl">Why Choose SproutVestor?</h2>
            <div className="feature-item">
              <Image
                src={SproutIcon}
                alt="Personalized Guidance"
                className="images-home"
              />
              <h3 className="text-2xl mb-2">Personalized Guidance</h3>
              <p className="text-lg leading-normal">
                Receive tailored investment recommendations based on your
                financial goals and risk tolerance.
              </p>
            </div>
            <div className="feature-item">
              <Image
                src={BrainIcon}
                alt="Intelligent Insights"
                className="images-home"
              />
              <h3 className="text-2xl mb-2">Intelligent Insights</h3>
              <p className="text-lg leading-normal">
                Access advanced market analysis and insights to make informed
                investment decisions.
              </p>
            </div>
            <div className="feature-item">
              <Image
                src={SupportIcon}
                alt="Expert Support"
                className="images-home"
              />
              <h3 className="text-2xl mb-2">Expert Support</h3>
              <p className="text-lg leading-normal">
                Get expert assistance and guidance from our team of experienced
                investors whenever you need it.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
