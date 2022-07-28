
import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { useState } from 'react';
import {
    Button,
    View,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

function OtherApps({ navigation }: any) {
    const [name, setname] = useState([
        { name: "JAY", key: "1" },
        { name: "JAKE", key: "2" },
        { name: "YANG", key: "3" },
        { name: "TONY", key: "4" },
        { name: "NIKI", key: "5" },
    ]
    )
    return (
        <View style={{ flex: 1, backgroundColor: "#a9a9a9" }}>
            <FlatList
                data={name}
                renderItem={({ item }) => (
                    <View key={item.key} style={styles.person}>

                        <Text style={{ marginRight: "60%" }}>{item.name}</Text>

                        <Image
                            source={require('../assets/star.png')}
                            style={{
                                width: 25,
                                height: 25,
                                marginLeft: 5
                            }}
                        />
                        <Image
                            source={require('../assets/phone.png')}
                            style={{
                                width: 25,
                                height: 25,
                                marginLeft: 5
                            }}
                        />



                    </View>
                )}
            />


        </View>
    );
}
const styles = StyleSheet.create({
    person: {
        backgroundColor: "#00ffff",
        width: "92%",
        padding: 10,
        flexDirection: "row",
        margin: 10

    },
    icons: {

    }
})
export default OtherApps;

