import React, { FC } from "react";
import { ScoreBadgeProps } from "./types";
import "../../../assets/styles/_common.scss";

const ScoreBadge: FC<ScoreBadgeProps> = ({ className }) => {
  return (
    <div
      className={`${className} score__badge flex flex--column flex__align--center`}
    >
      <div className="score__badge__obtained">76</div>
      <div className="total">of 100</div>
    </div>
  );
};

export default ScoreBadge;
