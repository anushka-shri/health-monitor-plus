import React from "react";
import "../trial.css";
import Particles from "../../Components/Particles/Particles.js";

function DailyMonitoring() {
  return (
    <>
      <Particles />
      <div>
        <h2 className="heading">BloodPressure</h2>
        <h2 className="heading">Glucose</h2>
        <h2 className="heading">Oxygen</h2>
      </div>
    </>
  );
}

export default DailyMonitoring;
