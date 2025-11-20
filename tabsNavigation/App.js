import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileStack from "./screens/ProfileStack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({route}) => ({
                        headerShown: false,
                        tabBarIcon: ({color, size}) => {
                            let iconName;

                            const icons = {
                                'Home': 'home',
                                'Profile': 'person',
                                'Settings': 'settings'
                            }

                            iconName = icons[route.name]

                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            )
                        },
                        tabBarActiveTintColor: '#007BFF',
                        tabBarInactiveTintColor: 'gray',
                        tabBarStyle: {
                            paddingBottom: 5,
                            height: 60,
                        }
                    }
                )}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Profile" component={ProfileStack}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
