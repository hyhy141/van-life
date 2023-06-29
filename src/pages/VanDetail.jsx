import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router";
import { Link, useLocation } from "react-router-dom";
import "../server";
import { getVans } from "../api";

export function loader({ params }) {
  return getVans(params.id);
}

const VanDetail = () => {
  const location = useLocation();
  const van = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <section>
      <Link
        className="van_detail_header"
        style={{ textDecoration: "underline" }}
        relative="path"
        to={`..${search}`}
      >
        <ArrowBackIcon style={{ fontSize: "16px" }} />
        Back to {type} vans
      </Link>

      <div className="van_detail">
        <img src={van.imageUrl} alt="" />

        <div className="van_detail_info">
          <div
            className="van_type"
            style={{
              backgroundColor:
                van.type === "simple"
                  ? "#E17654"
                  : van.type === "luxury"
                  ? "#161616"
                  : "#115E59",
              justifySelf: "start",
            }}
          >
            {van.type}
          </div>
          <h2>{van.name}</h2>
          <p className="van_detail_price">
            ${van.price} <span>/day</span>
          </p>
          <p>{van.description}</p>
          <button className="btn van_detail_button">Rent this van</button>
        </div>
      </div>
    </section>
  );
};

export default VanDetail;
