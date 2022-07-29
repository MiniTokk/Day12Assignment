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
import OtherApps from './screens/OtherApps';
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

function firstScreenStack({ navigation }: any) {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="HomeScreen"
                component={Homescreen}
                options={{
                    headerShown: false,

                    title: 'Home',
                    headerLeft: () =>

                        <NavigationDrawerStructure
                            navigationProps={navigation}

                        />,
                    headerStyle: {
                        backgroundColor: '#f4511e',
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

function secondScreenStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="MyanmarLanguage"
            screenOptions={{
                headerShown: false,
                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#f4511e',
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

function thirdScreenStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="RefreshData"
            screenOptions={{
                headerShown: false,
                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#f4511e',
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
function fourthScreenStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="OtherApps"
            screenOptions={{
                headerShown: false,
                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen
                name="OtherApps"
                component={OtherApps}
                options={{
                    title: 'OtherApps Page',

                }} />

        </Stack.Navigator>
    );
}
function fifthScreenStack({ navigation }: any) {
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
                    backgroundColor: '#f4511e',
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
function sixthScreenStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="AboutUs"
            screenOptions={{
                headerShown: false,
                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={navigation}
                    />,
                headerStyle: {
                    backgroundColor: '#f4511e',
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
                headerShown: false,
                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={Register}
                    />,
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'Register',

                }} />

        </Stack.Navigator>
    );
}
function ProfileStack({ navigation }: any) {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShown: false,
                headerLeft: () =>
                    <NavigationDrawerStructure
                        navigationProps={Profile}
                    />,
                headerStyle: {
                    backgroundColor: '#f4511e',
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
                drawerContent={props => <CustomDrawer{...props} />}>
                <Drawer.Screen name="Home" component={firstScreenStack}
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
                <Drawer.Screen name="Favourites" component={fifthScreenStack}
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
                <Drawer.Screen name="MyanmarLanguage" component={secondScreenStack}
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
                <Drawer.Screen name="RefreshData" component={thirdScreenStack}
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
                <Drawer.Screen name="OtherApps" component={fourthScreenStack}
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

                <Drawer.Screen name="AboutUs" component={sixthScreenStack}
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
