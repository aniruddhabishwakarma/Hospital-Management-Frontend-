import React, { useContext } from 'react'
import UserInfoContext from '../../context/UserInfoProvider'

const Profile = () => {
  const [userInfo] = useContext(UserInfoContext)
  console.log(userInfo);
  return (
    <>
        
    </>
  )
}

export default Profile