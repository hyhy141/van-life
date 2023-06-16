import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../server";

const Vans = () => {
  const [vans, setVans] = useState([]);

  function dataFetch() {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <section className="vans">
      <div className="vans_header">
        <h1>Explore our van options</h1>
        <div className="vans_filters_wrapper">
          <div className="filters">
            <div className="filter">Simple</div>
            <div className="filter">Luxury</div>
            <div className="filter">Rugged</div>
          </div>
          <button>Clear Filters</button>
        </div>
      </div>
      <div className="vans_list">
        {vans.map((van) => (
          <Link key={van.id} to={`/vans/${van.id}`}>
            <div className="van">
              <img src={van.imageUrl} alt={van.name} />
              <div className="van_info">
                <h2>{van.name}</h2>
                <p>
                  ${van.price} <br /> <span>/day</span>
                </p>
              </div>
              <div
                className="van_type"
                style={{
                  backgroundColor:
                    van.type === "simple"
                      ? "#E17654"
                      : van.type === "luxury"
                      ? "#161616"
                      : "#115E59",
                }}
              >
                {van.type}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Vans;
