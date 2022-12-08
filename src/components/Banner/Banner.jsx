import stylesBanner from "./Banner.module.css";

import background from "../../images/fire.jpg";
import born2burn from "../../images/born2burn.svg";

export function Banner() {
  return (
    <section className={`${stylesBanner.section}`}>
      <div
        className={`${stylesBanner.container}`}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      ></div>
      <img
        className={`${stylesBanner.title}`}
        src={born2burn}
        alt="Born 2 Burn"
      />
    </section>
  );
}
