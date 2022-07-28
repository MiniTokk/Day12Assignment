
import { StatusBar } from 'expo-status-bar';
import react from 'react';
import {
    Button,
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import Register from './Register';
function HomeScreen({ navigation }: any) {
    return (

        <View style={{ flex: 1, backgroundColor: "#e0ffff", justifyContent: "center" }}>

            <View style={{ flex: 10 }}>
                <Text style={{ textAlign: 'center', marginTop: 20, marginBottom: 60, fontSize: 20, color: "#00008b" }}>
                    Welcome From HomeScreen Page!
                </Text>
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#1e90ff" }}>LOGIN</Text>
                    <TextInput style={{
                        padding: 10,
                        backgroundColor: "#f0ffff",
                        borderColor: "grey",
                        borderRadius: 10,
                        margin: 10,
                        borderWidth: 1,
                    }} placeholder='Enter Email'></TextInput>
                    <TextInput style={{
                        padding: 10,
                        backgroundColor: "#f0ffff",
                        borderColor: "grey",
                        borderRadius: 10,
                        margin: 10,
                        borderWidth: 1,
                    }} placeholder='Enter Password' secureTextEntry={true} ></TextInput>
                    <View style={{
                        padding: 20, borderRadius: 10
                    }}><Button onPress={() => navigation.navigate('MyanmarLanguage')} title='LOGIN' /></View>
                </View>
                <View style={{ margin: 30 }}>
                    <Text style={{ color: "grey", textAlign: "center", fontSize: 18 }}>If You Don't Have An Account,
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{ textAlign: "center", fontWeight: "bold", color: "#0008bf", fontSize: 20 }}>Register</Text>
                        </TouchableOpacity>A New Account</Text>
                </View>

            </View>
        </View>

    );
}

export default HomeScreen;
