import React, { useState, Suspense } from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../api";
import "../server";

export function loader() {
  return defer({ vans: getVans() });
}

const Vans = () => {
  const [seacrhParams, setSeacrhParams] = useSearchParams();
  const dataPromise = useLoaderData();

  const typeFilter = seacrhParams.get("type");

  return (
    <section className="vans">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={dataPromise.vans}>
          {(vans) => {
            const displayedVans = typeFilter
              ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
              : vans;
            const vanElements = displayedVans.map((van) => (
              <Link
                key={van.id}
                to={van.id}
                state={{
                  search: `?${seacrhParams.toString()}`,
                  type: typeFilter,
                }}
              >
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
            ));
            return (
              <div className="vans_header">
                <h1>Explore our van options</h1>
                <div className="vans_filters_wrapper">
                  <div className="filters">
                    <button
                      onClick={() => setSeacrhParams({ type: "simple" })}
                      className={`filter simple ${
                        typeFilter === "simple" ? "selected" : ""
                      }`}
                    >
                      Simple
                    </button>
                    <button
                      onClick={() => setSeacrhParams({ type: "luxury" })}
                      className={`filter luxury ${
                        typeFilter === "luxury" ? "selected" : ""
                      }`}
                    >
                      Luxury
                    </button>
                    <button
                      onClick={() => setSeacrhParams({ type: "rugged" })}
                      className={`filter rugged ${
                        typeFilter === "rugged" ? "selected" : ""
                      }`}
                    >
                      Rugged
                    </button>
                  </div>

                  {typeFilter ? (
                    <button
                      onClick={() => setSeacrhParams({ type: "" })}
                      className="clear_filters"
                    >
                      Clear Filters
                    </button>
                  ) : null}
                </div>
                <div className="vans_list">{vanElements}</div>;
              </div>
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
};

export default Vans;
