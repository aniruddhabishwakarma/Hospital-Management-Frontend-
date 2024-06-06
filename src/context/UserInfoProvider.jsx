import React, { createContext, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const UserInfoContext = createContext();

export const UserInfoProvider = ({children}) => {

    const [userInfo,setUserInfo] = useState(null);
    const {auth} = useAuth();
    const INFO_URL = '/api/user/info'

    const fetchUserInfo = async () => {
        try{
            const headers = {
              Authorization : `Bearer ${auth.accessToken}`
            };
            const response =  await axios.get(INFO_URL,{headers});
            if(response && response.data){
                setUserInfo(response.data)
               
            }
        }catch(err){
          console.log(err.message);
        }
};
    useEffect(()=> {
        fetchUserInfo();
    },[auth.accessToken]);

    useEffect(()=>{
        if(!auth.accessToken){
            setUserInfo(null);
        }
    },[auth.accessToken]);
    const contextValue = [userInfo,fetchUserInfo]

    return (
        <>
            <UserInfoContext.Provider value = {contextValue}>
                {children}
            </UserInfoContext.Provider> 
        </>
    )
}
export default UserInfoContext;