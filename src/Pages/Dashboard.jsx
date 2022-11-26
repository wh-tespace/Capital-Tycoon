import { useNavigation } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Dashboard = () => {
    const { logOut, user } = userUseAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");

        } catch(error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <main>
                <h2>You're in the game</h2>

                <h1>{user}</h1>

                <button onClick={handleLogout}></button>
            </main>
        </>
    )
}

export default Dashboard