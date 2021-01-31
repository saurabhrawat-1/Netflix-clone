import React from "react";

export const FooterParamsBlock = ({ param_1, param_2, param_3, param_4 }) => {
  return (
    <div className="links__container">
      <FooterParams text={param_1} />
      <FooterParams text={param_2} />
      <FooterParams text={param_3} />
      <FooterParams text={param_4} />
    </div>
  );
};

function FooterParams({ text }) {
  return <a href="#">{text}</a>;
}

export default FooterParams;

export const details = {
  prop_1: "FAQ",
  prop_2: "Invester Relation",
  prop_3: "Privacy",
  prop_4: "Speed Test",
  prop_5: "Help Center",
  prop_7: "Jobs",
  prop_6: "Cookie References",
  prop_8: "Legal Notice",
  prop_9: "Accounts",
  prop_10: "Ways To Watch",
  prop_11: "Corporate Information",
  prop_12: "Netflix Originals",
  prop_13: "Media Center",
  prop_14: "Terms Of Use",
  prop_15: "Contact Us",
};
