import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProfileScreen from './ProfileScreen';
import DetailsScreen from './DetailsScreen';

export default function ProfileStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
    );
}
