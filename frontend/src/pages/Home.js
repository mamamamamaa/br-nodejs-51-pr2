
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const { user } = useAuth();
  return (
    <h1>
      Welcome {user.name ? `${user.name} to the best phone book app` : 'new user to the best phone book app. Please register'}
    </h1>
  );
};

export default Home;