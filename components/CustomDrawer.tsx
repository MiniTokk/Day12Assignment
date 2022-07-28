import React from "react";
import { View, Image, Text } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
const CustomDrawer = (props: any) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: "#6C63FF" }}
            >
                <Image
                    source={require('../assets/logo.jpg')}
                    style={{ height: 100, width: 100, marginLeft: "30%", marginTop: 20, marginBottom: 20 }}
                />

                <Text
                    style={{ marginLeft: 20, marginBottom: 20, fontSize: 20, fontWeight: 'bold', color: "#fff" }}>
                    Seattle Consulting Myanmar
                </Text>

                <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer