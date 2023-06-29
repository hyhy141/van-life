import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLoaderData } from "react-router";
import { NavLink, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../components/utils";

export async function loader({ params, request }) {
  requireAuth(request);
  return getHostVans(params.id);
}

const HostVanDetail = () => {
  const van = useLoaderData();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  if (!van) {
    return <h1>Loading..</h1>;
  }

  return (
    <section className="HostVanDetail">
      <Link
        className="van_detail_header"
        style={{ textDecoration: "underline" }}
        to=".."
        relative="path"
      >
        <ArrowBackIcon style={{ fontSize: "16px" }} />
        Back to all vans
      </Link>
      <div key={van.id} className="van_detail_host">
        <div className="van_host_header">
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
            <h2 className="host_name">{van.name}</h2>
            <p className="van_detail_price host_price">
              ${van.price}
              <span>/day</span>
            </p>
          </div>
        </div>
        <nav className="host_nav_detail">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ van }} />
      </div>
    </section>
  );
};

export default HostVanDetail;
