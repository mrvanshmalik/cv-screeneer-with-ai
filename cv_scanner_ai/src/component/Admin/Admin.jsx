import React from 'react'
import styles from "./admin.module.css"
import Skeleton from "@mui/material/Skeleton";
import WithAuthHOC from '../../Utils/HOC/withAuthHoc';


const Admin = () => {
  return (
    <div className={styles.admin}>
        <div className={styles.adminBlock}>
            <Skeleton variant="rectangular" sx={{borderRadius: "20px"}} width={260} height={600} />





            <div className={styles.adminCard}>
                <h2>Coding Love</h2>
                <p style={{color: "green"}}>Malikvansh2704@gmail.com </p>
                <h3>Score : 87%</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus rem rerum culpa, id consequuntur repellat itaque fuga quas sint laudantium ab ipsa, temporibus veniam dolorum corrupti nulla dicta laborum.</p>
            </div>



            <div className={styles.adminCard}>
                <h2>Coding Love</h2>
                <p style={{color: "green"}}>Malikvansh2704@gmail.com </p>
                <h3>Score : 87%</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus rem rerum culpa, id consequuntur repellat itaque fuga quas sint laudantium ab ipsa, temporibus veniam dolorum corrupti nulla dicta laborum.</p>
            </div>




            <div className={styles.adminCard}>
                <h2>Coding Love</h2>
                <p style={{color: "green"}}>Malikvansh2704@gmail.com </p>
                <h3>Score : 87%</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus rem rerum culpa, id consequuntur repellat itaque fuga quas sint laudantium ab ipsa, temporibus veniam dolorum corrupti nulla dicta laborum.</p>
            </div>





            <div className={styles.adminCard}>
                <h2>Coding Love</h2>
                <p style={{color: "green"}}>Malikvansh2704@gmail.com </p>
                <h3>Score : 87%</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus rem rerum culpa, id consequuntur repellat itaque fuga quas sint laudantium ab ipsa, temporibus veniam dolorum corrupti nulla dicta laborum.</p>
            </div>
            
        </div>
    </div>
  )
}

export default WithAuthHOC(Admin) ;
