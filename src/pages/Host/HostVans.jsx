import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router";
import { getHostVans } from "../../api";
import { requireAuth } from "../../components/utils";

export async function loader({ request }) {
  await requireAuth(request);
  return getHostVans();
}

const HostVans = () => {
  const vans = useLoaderData();

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
