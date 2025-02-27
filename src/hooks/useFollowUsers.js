import useAuthStore from "../store/authStore";

const useFollower = () => {
const [isUpdating, setIsUpdating] = useState(false)
const [isFollowing, setIsFollowing] = useState(false)

const authUser = useAuthStore(state => state.user)

}


export default useFollower;