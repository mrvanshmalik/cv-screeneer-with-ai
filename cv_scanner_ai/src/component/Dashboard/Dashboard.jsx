import styles from "./Dashboard.module.css";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Skeleton from "@mui/material/Skeleton";
import WithAuthHOC from "../../utils/HOC/withAuthHOC";
import { useState } from "react";
import axios from "../../utils/axios";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";

const Dashboard = () => {
  const [uploadFiletext, setUploadFileText] = useState("Upload your resume");
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");

  const [result, setResult] = useState(null);

  const { userInfo } = useContext(AuthContext);

  const handleOnChangeFile = (e) => {
    setResumeFile(e.target.files[0]);
    setUploadFileText(e.target.files[0].name);
  };

  const handleUpload = async () => {
    setResult(null);
    if (!jobDesc || !resumeFile) {
      alert("Please fill Job Description & Upload Resume");
      return;
    }
    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("job_desc", jobDesc);
    formData.append("user", userInfo._id);

    setLoading(true);

    try {
      const result = await axios.post("/api/resume/addResume", formData);
      setResult(result.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardLeft}>
        <div className={styles.dashboardHeader}>
          <div className={styles.dashboardHeaderTitle}>
            Smart Resume Screening
          </div>
          <div className={styles.dashboardHeaderLargeTitle}>
            Resume Match Score{" "}
          </div>

          <div className={styles.alertInfo}>
            <div>⚠︎ Important Instructions</div>

            <div className={styles.dashboardInstruction}>
              <div>
                📄 Please paste the complete job discription in the "Job
                Description" field before submitting.
              </div>

              <div>📝 Only PDF format (.pdf) resume are accepted</div>
            </div>
          </div>

          <div className={styles.dashboardUploadResume}>
            <div className={styles.dashboardResumeBlock}>{uploadFiletext}</div>
            <div className={styles.dashboardInputField}>
              <label htmlFor="inputField" className={styles.analyzeAIBtn}>
                Upload
              </label>
              <input
                type="file"
                accept=".pdf"
                id="inputField"
                onChange={handleOnChangeFile}
              />
            </div>
          </div>

          <div className={styles.jobDesc}>
            <textarea
              value={jobDesc}
              onChange={(e) => {
                setJobDesc(e.target.value);
              }}
              className={styles.textArea}
              placeholder="Enter Your Job Description"
              rows={10}
              cols={50}
            />
            <div className={styles.analyzeBtn} onClick={handleUpload}>
              Analyze
            </div>
          </div>
        </div>
      </div>

      <div className={styles.dashboardRight}>
        <div className={styles.dashboardRightTopCard}>
          <div>Analyze With AI</div>
          <img
            className={styles.profileImg}
            src={
              userInfo?.photoUrl
            }
            alt={"User_image"}
          />
          <h2>{userInfo?.name}</h2>
        </div>

        {result && (
          <div className={styles.dashboardRightTopCard}>
            <div>Result</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <h2>{result?.score}%</h2>
              <SportsScoreIcon sx={{ fontSize: 30 }} />
            </div>
            <div className={styles.feedback}>
              <h3>Feedback</h3>
              <p>
                {result?.feedback}
              </p>
            </div>
          </div>
        )}

        {loading && (
          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: "20px" }}
            width={280}
            height={280}
          />
        )}
      </div>
    </div>
  );
};

export default WithAuthHOC(Dashboard);
