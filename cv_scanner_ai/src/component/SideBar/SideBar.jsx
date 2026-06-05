import React, { useContext } from "react";
import styles from "./SideBar.module.css";
import DescriptionIcon from "@mui/icons-material/Description";
import GridViewIcon from "@mui/icons-material/GridView";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Utils/AuthContext";
const SideBar = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const { isLogin, setLogin, userInfo, setUserInfo } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userInfo");
    setLogin(false);
    setUserInfo(null);
    navigate("/");
  };
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarIcon}>
        <DescriptionIcon sx={{ fontSize: 54, marginBottom: 4 }} />
        <div className={styles.sideBarTopContent}>Resume Screening</div>
      </div>
      <div className={styles.sideBarOptionsBlock}>
        <Link
          to={"/dashboard"}
          className={[
            styles.sideBarOption,
            location.pathname === "/dashboard" ? styles.selectedOption : null,
          ].join(" ")}
        >
          <GridViewIcon sx={{ fontSize: 22 }} />
          <div>Dashboard</div>
        </Link>

        <Link
          to={"/history"}
          className={[
            styles.sideBarOption,
            location.pathname === "/history" ? styles.selectedOption : null,
          ].join(" ")}
        >
          <HistoryIcon sx={{ fontSize: 22 }} />
          <div>History</div>
        </Link>

        {userInfo?.role === "admin" && (
          <Link
            to={"/admin"}
            className={[
              styles.sideBarOption,
              location.pathname === "/admin" ? styles.selectedOption : null,
            ].join(" ")}
          >
            <PersonIcon sx={{ fontSize: 22 }} />
            <div>Admin</div>
          </Link>
        )}

        <div onClick={handleLogout} className={styles.sideBarOption}>
          <LogoutIcon sx={{ fontSize: 22 }} />
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
