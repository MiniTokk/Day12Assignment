
import { StatusBar } from 'expo-status-bar';
import react from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import All from '../components/All';
import BSE from '../components/BSE';
import Manager from '../components/Manager';
import Leader from '../components/Leader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <View style={styles.container}>

            <Tab.Navigator initialRouteName='All'
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen name='All' component={All} options={{
                    tabBarIcon: () => {
                        <View></View>
                    }
                }}
                />
                <Tab.Screen name='Manager' component={Manager} options={{

                    tabBarIcon: () => {
                        <View></View>
                    }
                }} />
                <Tab.Screen name='BSE' component={BSE} options={{
                    tabBarIcon: () => {
                        <View></View>
                    }
                }} />
                <Tab.Screen name='Leader' component={Leader} options={{
                    tabBarIcon: () => {
                        <View></View>
                    }
                }} />
            </Tab.Navigator>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
});

export default BottomTab