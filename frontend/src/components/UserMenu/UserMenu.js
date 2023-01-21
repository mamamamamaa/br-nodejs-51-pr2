import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { RiLogoutCircleRLine } from "react-icons/ri";


export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const handleClick = () => dispatch(logOut());

    return (
        <div>
            <div>{user.name}</div>
            <button onClick={handleClick}>
                Logout <RiLogoutCircleRLine />
            </button>
        </div>
    );
};