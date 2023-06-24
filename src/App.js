
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './routes/AuthRoutes';
import AppRoutes from './routes/AppRoutes';
import Routes from './routes';
import { AuthProvider } from './contexts/AuthContext';


export default function App() {
  
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>

    </NavigationContainer>
  );
}

