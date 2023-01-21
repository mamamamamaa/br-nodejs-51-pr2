import { UserMenu } from '../UserMenu/UserMenu';
import { AuthMenu } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { Navigation } from '../Navigation/Navigation';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div>
            <div>
                <Navigation />
                <div>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</div>
            </div>
        </div>
    );
};