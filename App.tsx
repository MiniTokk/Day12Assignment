import 'react-native-gesture-handler';
import React from 'react';
import {
    Button,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Homescreen from './screens/Homescreen';
import MyanmarLanguage from './screens/MyanmarLanguage';
import RefreshData from './screens/RefreshData';
import User from './screens/User';
import Favourites from './screens/Favourites';
import AboutUs from './screens/AboutUs';
import CustomDrawer from './components/CustomDrawer';
import Register from './screens/Register';
import Profile from './screens/Profile';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props: any) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                <Image
                    source={require('./assets/drawer.png')}
                    style={{
                        width: 25,
                        height: 25,
                        marginLeft: 5
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

function FirstScreenStack({ navigation }: any) {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="HomeScreen"
                component={Homescreen}
                options={{


                    title: 'Home',
                    headerLeft: () =>

                        <NavigationDrawerStructure
                            navigationProps={navigation}

                        />,
                    headerStyle: {
                        backgroundColor: '#da70d6',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />

        </Stack.Navigator>
    );
}

function SecondScreenStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="MyanmarLanguage"
            screenOptions={{

                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#da70d6',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',

                }
            }}>
            <Stack.Screen
                name="MyanmarLanguage"
                component={MyanmarLanguage}
                options={{
                    headerShown: false,
                    title: 'MyanmarLanguage',

                }} />

        </Stack.Navigator>
    );
}

function ThirdScreenStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="RefreshData"
            screenOptions={{

                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#da70d6',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>

            <Stack.Screen
                name="RefreshData"
                component={RefreshData}
                options={{
                    headerShown: false,
                    title: 'RefreshData',
                }} />

        </Stack.Navigator>
    );
}
function FourthScreenStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="User"
            screenOptions={{

                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#da70d6',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen
                name="User List"
                component={User}
                options={{
                    title: 'User List',

                }} />

        </Stack.Navigator>
    );
}
function FifthScreenStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="Favourites"
            screenOptions={{
                headerShown: false,
                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#da70d6',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    title: 'Favourites Page',

                }} />

        </Stack.Navigator>
    );
}
function SixthScreenStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="AboutUs"
            screenOptions={{

                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#da70d6',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen
                name="AboutUs"
                component={AboutUs}
                options={{
                    title: 'About Us Page',

                }} />

        </Stack.Navigator>
    );
}
function RegisterStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="Register"
            screenOptions={{

                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#da70d6',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen
                name="RegisterScreen"
                component={Register}
                options={{
                    title: 'RegisterScreen',

                }} />

        </Stack.Navigator>
    );
}
function ProfileStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{

                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={Profile}
                    />,
                headerStyle: {
                    backgroundColor: '#da70d6',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profile',

                }} />

        </Stack.Navigator>
    );
}
function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"
                screenOptions={{
                    headerShown: false,

                }}
                drawerContent={props => <CustomDrawer{...props}
                />}>
                <Drawer.Screen name="Home" component={FirstScreenStack}
                    options={{

                        drawerIcon: ({ color }) =>
                        (
                            <Image
                                source={require('./assets/home.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft: 5
                                }}
                            />
                        )
                    }}

                />
                <Drawer.Screen name="Favourites" component={FifthScreenStack}
                    options={{
                        drawerIcon: ({ color }) =>
                        (
                            <Image
                                source={require('./assets/star.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft: 5
                                }}
                            />
                        )
                    }} />
                <Drawer.Screen name="MyanmarLanguage" component={SecondScreenStack}
                    options={{

                        drawerIcon: ({ color }) =>
                        (
                            <Image
                                source={require('./assets/language.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft: 5
                                }}
                            />
                        )
                    }} />
                <Drawer.Screen name="RefreshData" component={ThirdScreenStack}
                    options={{
                        drawerIcon: ({ color }) =>
                        (
                            <Image
                                source={require('./assets/refresh.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft: 5
                                }}
                            />
                        )
                    }} />
                <Drawer.Screen name="User List" component={FourthScreenStack}
                    options={{
                        drawerIcon: ({ color }) =>
                        (
                            <Image
                                source={require('./assets/heart.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft: 5
                                }}
                            />
                        )
                    }} />

                <Drawer.Screen name="AboutUs" component={SixthScreenStack}
                    options={{
                        drawerIcon: ({ color }) =>
                        (
                            <Image
                                source={require('./assets/about.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft: 5
                                }}
                            />
                        )
                    }} />
                <Drawer.Screen name="Register" component={RegisterStack}
                    options={{
                        drawerIcon: ({ color }) =>
                        (
                            <Image
                                source={require('./assets/register.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft: 5
                                }}
                            />
                        )
                    }} />
                <Drawer.Screen name="Profile" component={ProfileStack}
                    options={{
                        drawerIcon: ({ color }) =>
                        (
                            <Image
                                source={require('./assets/user.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft: 5
                                }}
                            />
                        )
                    }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;
