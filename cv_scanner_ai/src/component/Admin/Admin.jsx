import React from "react";
import styles from "./admin.module.css";
import Skeleton from "@mui/material/Skeleton";
import WithAuthHOC from "../../Utils/HOC/withAuthHOC";
import { useState, useEffect } from "react";
import axios from "../../Utils/axios";

const Admin = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoader(true);
      try {
        const results = await instance.get("/api/resume/get");
        setData(results.data.resumes);
      } catch (err) {
        console.log(err);
        alert("somthing went wrong");
      } finally {
        setLoader(false);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div className={styles.admin}>
      <div className={styles.adminBlock}>
        {loader && (
          <>
            <Skeleton
              variant="rectangular"
              sx={{ borderRadius: "20px" }}
              width={260}
              height={600}
            />
            <Skeleton
              variant="rectangular"
              sx={{ borderRadius: "20px" }}
              width={260}
              height={600}
            />
            <Skeleton
              variant="rectangular"
              sx={{ borderRadius: "20px" }}
              width={260}
              height={600}
            />
          </>
        )}

        {data.map((item, index) => {
          return (
            <div key={item._id} className={styles.adminCard}>
              <h2>{item?.user?.name}</h2>
              <p style={{ color: "green" }}>{item?.user?.email} </p>
              <h3>Score : {item.score}%</h3>
              <p>{item.feedback}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WithAuthHOC(Admin);
