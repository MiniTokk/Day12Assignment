
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDrawerStatusFromState } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import react, { useEffect, useState } from 'react';
import {
    Button,
    View,
    Text,
    Image,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

function Profile({ navigation }: any) {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');

    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        try {
            AsyncStorage.getItem('UserName')
                .then(value => {
                    if (value != null) {
                        setname(value);
                    }
                })

        } catch (error) {
            console.log(error);

        }
        try {
            AsyncStorage.getItem('UserEmail')
                .then(value => {
                    if (value != null) {
                        setEmail(value);
                    }
                })

        } catch (error) {
            console.log(error);

        }
        try {
            AsyncStorage.getItem('UserPhone')
                .then(value => {
                    if (value != null) {
                        setphone(value);
                    }
                })

        } catch (error) {
            console.log(error);

        }
       
    }
    const UpdateData = async () => {
        if (name.length == 0) {
            Alert.alert("Warning!,Please Fill Your Name")
        }
        else {
            try {
                await AsyncStorage.setItem('UserName', name);
                Alert.alert('Success!', 'UserName has been updated.');

            }
            catch (error) {
                console.log(error);

            }
        }
        if (email.length == 0) {
            Alert.alert("Warning!,Please Fill Your Email")
        }
        else {
            try {
                await AsyncStorage.setItem('UserEmail', email);

                Alert.alert('Success!', 'UserEmail has been updated.');

            }
            catch (error) {
                console.log(error);

            }
        }
        if (phone.length == 0) {
            Alert.alert("Warning!,Please Fill Your Phone")
        }
        else {
            try {
                await AsyncStorage.setItem('UserPhone', phone);
                Alert.alert('Success!', 'UserPhone has been updated.');

            }
            catch (error) {
                console.log(error);

            }
        }

    }


    const RemoveData = async () => {

        try {
            await AsyncStorage.clear();
            Alert.alert('Success!', 'Your Data has been Removed.Please Register Again!');
            navigation.navigate('Register');
        }
        catch (error) {
            console.log(error);

        }
    }


    return (
        <View style={{ flex: 1, backgroundColor: "pink" }}>

            <View style={{ flex: 0.9, marginTop: 20, marginLeft: "10%", marginRight: "10%" }}>
                <View style={{ flex: 1, borderWidth: 1, padding: 20, justifyContent: "center", }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: "#000", paddingBottom: 10, fontWeight: "bold" }}>Your Profile Info</Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: "#000" }}>
                        UserName : {name}
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: "#000" }}>
                        Email :  {email}
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: "#000" }}>
                        Phone Number:  {phone}
                    </Text>
                </View>
                <Text style={{ textAlign: 'center', fontSize: 20, color: "#000", paddingBottom: 20, paddingTop: 30 }}>Setting</Text>
                <TextInput style={{
                    padding: 10,
                    backgroundColor: "#f0ffff",
                    borderColor: "grey",
                    borderRadius: 10,
                    borderWidth: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 10
                }} placeholder="Full Name"
                    value={name}
                    onChangeText={(value) => setname(value)} />

                <TextInput style={{
                    padding: 10,
                    backgroundColor: "#f0ffff",
                    borderColor: "grey",
                    borderRadius: 10,
                    borderWidth: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 10
                }} placeholder="Enter Email"
                    value={email}
                    onChangeText={(value) => setEmail(value)} />
                <TextInput style={{
                    backgroundColor: "#f0ffff",
                    padding: 10,
                    borderColor: "grey",
                    borderRadius: 10,
                    borderWidth: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 10
                }} placeholder="Phone Number" keyboardType="numeric" onChangeText={(value) => setphone(value)} />
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <View style={{ padding: 10 }}>
                        <Button title='Update'
                            onPress={UpdateData}
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Button title='Remove'
                            onPress={RemoveData}
                        />
                    </View>
                </View>


            </View>
        </View>
    );
}

export default Profile;
