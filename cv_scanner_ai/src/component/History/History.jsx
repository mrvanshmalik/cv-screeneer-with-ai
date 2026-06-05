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
        const results = await axios.get(`/api/resume/get/${userInfo?._id}`)
        
        
      } catch (err) {
        console.log(err)
        alert("somthing went wrong")
        
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className={styles.history}>
      <div className={styles.historyCardBlock}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "20px" }}
          width={260}
          height={200}
        />

        <div className={styles.historyCard}>
          <div className={styles.cardPercentage}>90%</div>
          <h2> Frontend Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            inventore consectetur minus eius incidunt exercitationem, labore
            deserunt veniam, reiciendis facilis beatae molestiae ea aspernatur
            ipsam maiores quisquam voluptates autem perspiciatis?
          </p>
          <p>Dated : 2025-11-18</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercentage}>90%</div>
          <h2> Frontend Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            inventore consectetur minus eius incidunt exercitationem, labore
            deserunt veniam, reiciendis facilis beatae molestiae ea aspernatur
            ipsam maiores quisquam voluptates autem perspiciatis?
          </p>
          <p>Dated : 2025-11-18</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercentage}>90%</div>
          <h2> Frontend Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            inventore consectetur minus eius incidunt exercitationem, labore
            deserunt veniam, reiciendis facilis beatae molestiae ea aspernatur
            ipsam maiores quisquam voluptates autem perspiciatis?
          </p>
          <p>Dated : 2025-11-18</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercentage}>90%</div>
          <h2> Frontend Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            inventore consectetur minus eius incidunt exercitationem, labore
            deserunt veniam, reiciendis facilis beatae molestiae ea aspernatur
            ipsam maiores quisquam voluptates autem perspiciatis?
          </p>
          <p>Dated : 2025-11-18</p>
        </div>
      </div>
    </div>
  );
};

export default WithAuthHOC(history);
