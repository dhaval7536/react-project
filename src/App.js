import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import VerifyEmail from "./components/views/VerifyEmail";
import Profile from "./components/views/profile";
import Forgot from "./components/views/Forgot";
import { useState, useEffect } from 'react'
import { auth } from './firebase'
import { AuthProvider } from './AuthContext'
import { onAuthStateChanged } from 'firebase/auth'


const Auth = () => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])
  return (
    <Router>
      <AuthProvider value={{ currentUser }}>

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
          <Route path='/forgot-password' element={<Forgot />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Profile />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}



export default Auth;
