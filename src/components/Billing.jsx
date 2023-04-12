import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="proudc" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" />
        bolling & incvoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit goes, but so does the mass. Mauris eu edipiscing ulterics amethodio
        aenean neque. Fusce Ipsum orci rhoncus aliporttitor places the entire
        street.
      </p>
      <div className="flex-row flex flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          draggable="false"
        />
        <img
          draggable="false"
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
