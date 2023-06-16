import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { van } = useOutletContext();
  return (
    <div className="host_van_pricing">
      <h2>
        ${van.price}.00
        <span>/day</span>
      </h2>
    </div>
  );
};

export default HostVanPricing;
