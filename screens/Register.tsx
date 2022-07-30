import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { Text, View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { JumpingTransition } from 'react-native-reanimated';
function FormList({ navigation }: any) {
    const [email, setEmail] = useState("")
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [nameError, setnameError] = useState("")
    const [phoneError, setphoneError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmpasswordError, setconfirmPasswordError] = useState("")
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const remove = () => {
        setEmail(""),
            setname(""),
            setphone(""),
            setPassword(""),
            setconfirmpassword("")

    }



    const handle = async (props: any) => {


        var nameValid = false;
        if (name.length == 0) {
            setnameError("Enter Full Name");


        }
        else {

            try {
                await AsyncStorage.setItem('UserName', name);

            }
            catch (error) {
                console.log(error);
            }

            setnameError("")
            nameValid = true
        }

        var emailValid = false;
        if (email.length == 0) {
            setEmailError("Email is required");


        }
        else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters");

        }
        else if (email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces');

        }
        else if (!emailPattern.test(email) && email.length > 0) {
            setEmailError("Enter a valid email!")

        }
        else {
            try {
                await AsyncStorage.setItem('UserEmail', email);
                //navigation.dispatch(
                //  CommonActions.reset({
                //    index: 0,
                //    routes: [{ name: 'Profile' }]
                //  })
                //)
            }
            catch (error) {
                console.log(error);
            }
            setEmailError("")
            emailValid = true
        }
        var phoneValid = false;
        if (phone.length == 0) {
            setphoneError("Enter a phone number.");
        }
        else if (phone.length > 11) {
            setphoneError("Phone Number should be maximum 10 digit number");

        }
        else {
            try {
                await AsyncStorage.setItem('UserPhone', phone);
                //navigation.dispatch(
                //  CommonActions.reset({
                //    index: 0,
                //    routes: [{ name: 'Profile' }]
                //  })
                //)
            }
            catch (error) {
                console.log(error);
            }
            setphoneError("")
            phoneValid = true
        }


        var passwordValid = false;
        if (password.length == 0) {
            setPasswordError("Password is required");
        }
        else if (password.length < 6) {
            setPasswordError("Password should be minimum 6 characters");
        }
        else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        }
        else {
            setPasswordError("")
            passwordValid = true
        }
        console.log(confirmpassword)
        console.log(password)
        var confirmpasswordValid = false;
        if (confirmpassword.length == 0) {
            setconfirmPasswordError("Enter Password Confirmation.");
        }


        else if (confirmpassword !== password) {

            setconfirmPasswordError("Password and Confrim password should be the same!")
        }

        else {

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Profile' }]
                })
            )
            setconfirmPasswordError("")
            confirmpasswordValid = true
        }
    }


    //   navigation.dispatch(
    //                  CommonActions.reset({
    //                    index: 0,
    //                    routes: [{ name: 'Profile' }]
    //                  })
    //                )


    return (
        <ScrollView style={styles.form}>
            <View style={styles.container}>
                <Text style={{ textAlign: "center", fontSize: 30, color: "#000", fontWeight: "bold", paddingBottom: 20 }}>Registration Form</Text>
                <View>
                    <View style={styles.textinput}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput style={styles.input} placeholder="Full Name" onChangeText={text => setname(text)} value={name} />
                    </View>

                    {nameError.length > 0 &&
                        <Text style={{ color: "red" }}>{nameError}</Text>
                    }
                    <View style={styles.textinput}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput style={styles.input} placeholder="Enter Email" onChangeText={text => setEmail(text)} value={email} />
                    </View>

                    {emailError.length > 0 &&
                        <Text style={{ color: "red" }}>{emailError}</Text>
                    }
                    <View style={styles.textinput}>
                        <Text style={styles.label}>Phone(enter only 10 digit number)</Text>
                        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="numeric" onChangeText={text => setphone(text)} value={phone} />
                    </View>
                    {phoneError.length > 0 &&

                        <Text style={{ color: "red" }}>{phoneError}</Text>
                    }
                    <View style={styles.textinput}>
                        <Text style={styles.label}>Passoword</Text>
                        <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry={true} onChangeText={text => setPassword(text)} value={password} />
                    </View>
                    {passwordError.length > 0 &&

                        <Text style={{ color: "red" }}>{passwordError}</Text>
                    }
                    <View style={styles.textinput}>
                        <Text style={styles.label}>Confirm Passoword</Text>
                        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} onChangeText={text => setconfirmpassword(text)} value={confirmpassword} />
                    </View>
                    {confirmpasswordError.length > 0 &&

                        <Text style={{ color: "red" }}>{confirmpasswordError}</Text>
                    }
                    {/*<View style={styles.button}><Button onPress={handleSubmit} title='Register' /></View>*/}
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity style={styles.button} onPress={handle}>
                            <Text style={{ textAlign: "center", fontWeight: "bold", color: "#fff" }}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={remove}>
                            <Text style={{ textAlign: "center", fontWeight: "bold", color: "#fff" }}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}
export default FormList
const styles = StyleSheet.create({
    form: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingTop: 60,

    },
    input: {
        padding: 10,
        backgroundColor: "#f0ffff",
        borderColor: "grey",
        borderRadius: 10,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10

    },
    textinput: {
        marginTop: 10,
        marginBottom: 10,
    },
    button: {

        margin: 20,
        padding: 10,
        backgroundColor: "#0000ff",
        borderRadius: 10,
    },
    label: {
        fontSize: 15,
        marginLeft: 20,
        fontWeight: "bold"
    }
});

