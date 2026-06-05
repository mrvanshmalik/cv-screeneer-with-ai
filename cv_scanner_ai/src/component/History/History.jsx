import styles from "./History.module.css";
import { Skeleton } from "@mui/material";
import WithAuthHOC from "../../utils/HOC/withAuthHOC";
import { useState, useEffect, useContext } from "react";
import axios from "../../utils/axios";
import { AuthContext } from "../../utils/AuthContext";

const history = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoader(true);
      try {
        const results = await axios.get(`/api/resume/get/${userInfo?._id}`);
        setData(results.data.resumes);
      } catch (err) {
        console.log(err);
        alert("somthing went wrong");
      } finally {
        setLoader(false);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className={styles.history}>
      <div className={styles.historyCardBlock}>
        {loader && (
          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: "20px" }}
            width={260}
            height={200}
          />
        )}
        {data.map((item, index) => {
          return (
            <div key={item._id} className={styles.historyCard}>
              <div className={styles.cardPercentage}>%</div>
              {/* <h2> Frontend Developer</h2> */}
              <p>Resume Name :{item.resume_name}</p>
              <p>{item.feedback}</p>
              <p>Dated : {item.createdAt.slice(0, 10)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WithAuthHOC(history);
