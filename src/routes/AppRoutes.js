import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from '../pages/MoviesPage'
import MoviesDetailsPage from '../pages/MovieDetailsPage'

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='MoviesPage' component={MoviesPage} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='DetailsPage' component={MoviesDetailsPage}></Stack.Screen>
      </Stack.Navigator>
    )
}