import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <section className="host_vans">
      <h1>Your listed vans</h1>

      {vans.map((van) => (
        <Link to={`/host/vans/${van.id}`} key={van.id}>
          <div key={van.id} className="host_vans_list">
            <img src={van.imageUrl} alt={van.name} />
            <div className="host_van_info">
              <h2>{van.name}</h2>
              <p>${van.price}/day</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default HostVans;
