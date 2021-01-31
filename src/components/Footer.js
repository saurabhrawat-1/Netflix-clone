import React from "react";
import { FooterParamsBlock, details } from "./FooterParams";
import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <div className="footer__container">
        <FooterParamsBlock
          param_1={details.prop_1}
          param_2={details.prop_2}
          param_3={details.prop_3}
          param_4={details.prop_4}
        />
        <FooterParamsBlock
          param_1={details.prop_5}
          param_2={details.prop_6}
          param_3={details.prop_7}
          param_4={details.prop_8}
        />
        <FooterParamsBlock
          param_1={details.prop_9}
          param_2={details.prop_10}
          param_3={details.prop_11}
          param_4={details.prop_12}
        />
        <FooterParamsBlock
          param_1={details.prop_13}
          param_2={details.prop_14}
          param_3={details.prop_15}
        />
      </div>
    </div>
  );
}

export default Footer;
