import React, { useContext } from 'react'
import styles from './Login.module.css'
import GoogleIcon from '@mui/icons-material/Google';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { auth,provider } from '../../Utils/firebase';
import{signInWithPopup} from 'firebase/auth';
import { AuthContext } from '../../Utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../../Utils/axios';



const Login = () => {
  const {isLogin,setLogin,userInfo,setUserInfo} = useContext(AuthContext) ;
  const navigate = useNavigate() ;
  const handleLogin = async()=>{
    
    
    
    try{
      const result = await signInWithPopup(auth , provider);
      const user = result.user;
      const userData = {
        name:user.displayName,
        email:user.email,
        photoUrl:user.photoURL
      }
      await axios.post('/api/user',userData).then((response)=>{
        setUserInfo(response.data.user)
        localStorage.setItem("userInfo",JSON.stringify(response.data.user))
      }).catch(err=>{
        console.log(err)
      })
      setLogin(true)
      localStorage.setItem("isLogin",true)
      
      navigate('/dashboard')


    }catch(err){
      alert("somthing went wrong!!!")
      console.log('err')

    }
  }
  return (
    <div className={styles.login}>
      <div className={styles.loginCard}>
        <div className={styles.loginCardTitle}>
          <h1>Login</h1>
          <VpnKeyIcon />
        </div>

        <div className={styles.googleBtn} onClick={handleLogin}>
          <GoogleIcon sx={{fontSize: 20 , color: "red"}} />
          Sing in with Google
          </div>

      </div>
    </div>

  )
}



export default Login