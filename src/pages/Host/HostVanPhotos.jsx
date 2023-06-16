import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { van } = useOutletContext();
  return (
    <div>
      <img src={van.imageUrl} className="host_van_photo" />
    </div>
  );
};

export default HostVanPhotos;
