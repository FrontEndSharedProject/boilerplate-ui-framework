import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "紧跟时代",
    Svg: require("../../static/img/undraw_Website_setup_re_d4y9.svg").default,
    description: (
      <>根据多数开发者的选择, 采用最新的技术栈的同时且保证了代码的稳定性</>
    ),
  },
  {
    title: "功能齐全",
    Svg: require("../../static/img/undraw_Powerful_re_frhr.svg").default,
    description: (
      <>
        使用 Tailwind css 作为底层 css 框架,
        保证开发效率的同时并且最大程度规避开发风险
      </>
    ),
  },
  {
    title: "专心致志",
    Svg: require("../../static/img/undraw_programming_2svr.svg").default,
    description: (
      <>
        使用该模板, 开发者可以全身心投入 UI 组件的开发,
        后续的一切问题我们帮你搞定!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
