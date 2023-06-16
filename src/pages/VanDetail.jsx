import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../server";
import { Link } from "react-router-dom";

const VanDetail = () => {
  const [van, setVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <section>
      <Link
        className="van_detail_header"
        style={{ textDecoration: "underline" }}
        to="/vans"
      >
        <ArrowBackIcon style={{ fontSize: "16px" }} />
        Back to all vans
      </Link>

      {van ? (
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
            <button className="van_detail_button">Rent this van</button>
          </div>
        </div>
      ) : (
        <h2 className="van_detail_loading">Loading..</h2>
      )}
    </section>
  );
};

export default VanDetail;
