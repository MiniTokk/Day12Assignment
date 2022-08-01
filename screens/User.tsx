
import { StatusBar } from 'expo-status-bar';
import react, { useEffect, useState } from 'react';
import {
    Button,
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    FlatList
} from 'react-native';

function User({ navigation }: any) {
    const [data, setData] = useState([]);


    //const stringData = '["VALUE1","VALUE2","VALUE3","VALUE4","VALUE5"]';
    //const valuesArray = JSON.parse(stringData);
    const getData = async () => {
        try {
            const response = await fetch("https://reqres.in/api/users");
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getData();
        console.log(data);

    })
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item, i }) =>

                    <View style={{ flex: 1 }} key={i}>
                        <View style={{ flexDirection: "row", borderBottomWidth: 1, paddingLeft: 10, paddingTop: 30, paddingBottom: 20 }}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={{
                                    width: 100,
                                    height: 100,

                                }}
                            />
                            <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 20 }}>{item.first_name} </Text>
                                    <Text style={{ fontSize: 20 }}>{item.last_name}</Text>
                                </View>
                                <Text>{item.email}</Text>
                            </View>
                        </View>
                    </View>

                }
            />


        </SafeAreaView>
    );
}

export default User;
