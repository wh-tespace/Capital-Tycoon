import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Dashboard = () => {
    const { logOut, user } = useUserAuth();
    let navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");

        } catch(error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <main>
                <h2>You're in the game</h2>

                <h2>{user.email}</h2>

                <button onClick={handleLogout}>Logout</button>
            </main>
        </>
    )
}

export default Dashboard