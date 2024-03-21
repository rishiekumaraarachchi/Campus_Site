import React from "react";
import "./Programs.css";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import program_1 from "../../assets/program-icon-1.png";
import program_2 from "../../assets/program-icon-2.png";
import program_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="program1" />
        <div className="caption">
          <img src={program_1} alt="program1" />
          <h3>Program 1</h3>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="program2" />
        <div className="caption">
          <img src={program_2} alt="program1" />
          <h3>Master Degree</h3>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="program3" />
        <div className="caption">
          <img src={program_3} alt="program1" />
          <h3>Post Graduate</h3>
        </div>
      </div>
    </div>
  );
};

export default Programs;
