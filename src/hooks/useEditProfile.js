import { useState } from "react"
import { toast } from "react-toastify"
import {firestore, storage} from '../firebase/firebase'
import { doc, updateDoc } from "firebase/firestore"
import useAuthStore from "../store/authStore"
import { getDownloadURL, uploadString } from "firebase/storage"
const useEditProfile = () => {

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",  
        style: {
          backgroundColor: "#2b3548",  
          color: "#fff",             
          fontSize: "16px",            
          borderRadius: "10px",        
        },
      };

const [isUpdating, setIsUpdating] = useState(false)
const authUser = useAuthStore(state => state.user)

    const editProfile = async(inputs, selectedFile) => {

        if(isUpdating || !authUser) return setIsUpdating(true)
const storageRef = ref(storage, `profilePic/${authUser.uid}`)
const userDocRef = doc(firestore, 'users', authUser.uid)
let URL = ''
try {
    if(selectedFile) {
        await uploadString(storageRef, selectedFile, 'data_url')
        URL = await getDownloadURL(ref(storageRef, `profilePic/${authUser.uid}`))
    }
    const updatedUserDoc = {
        ...authUser,
        fullName: inputs.fullName || authUser.fullName,
        userName: inputs.userName || authUser.userName,
        bio: inputs.bio || authUser.bio,
        profilePicURL: URL || authUser.profilePicURL
    }
 await updateDoc(userDocRef, updatedUserDoc)
 localStorage.setItem('user-info', JSON.stringify(updatedUserDoc))
} catch (error) {
    toast.error(error.message || 'error', toastOptions)
}
    }
}