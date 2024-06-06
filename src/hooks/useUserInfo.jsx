import { useContext } from "react"
import UserInfoContext from "../context/UserInfoProvider";


const useUserInfo = () => {
    const userInfo = useContext(UserInfoContext)
    return userInfo
}
export default useUserInfo;