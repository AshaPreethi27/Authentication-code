import React from "react";
import {View,Text,ScrollView,StyleSheet,TextInput, StatusBar,Pressable,Image} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";


function Registration({navigation}){

        onLogin=()=>{
            navigation.navigate("home");
        }

        return(
        <ScrollView style={styles.bg}>
            <StatusBar hidden={true} />
            <Text style={styles.head}>Registration</Text>
            <Text style={styles.para}>Please register down below</Text>
            <View style={{marginTop:10}}>
            <View style={styles.inputContainer}>
                <FontAwesome5 name="user"  size={20} style={{padding:8,}} color={"#000000"}/>
                <TextInput placeholder="Full Name" style={styles.inputBox} />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline"  size={20} style={{padding:8,}} color={"#000000"}/>
                <TextInput placeholder="Email" style={styles.inputBox} />
            </View>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="lock"  size={20} style={{padding:8,}} color={"#000000"}/>
                <TextInput placeholder="Password" style={styles.inputBox} secureTextEntry />
                <Feather name="eye"  size={20} style={{padding:8,}} color={"#000000"}/>
            </View>
            </View>
            <Pressable style={styles.btn}>
                <Text style={styles.btnTxt} >Register</Text>
            </Pressable>
            <View style={{flexDirection: 'row', alignItems: 'center',marginTop:10,}}>
             <View style={{flex: 1, height: 2, backgroundColor: '#dcdcdc',marginLeft:10,}} />
                <View >
            <Text style={{width: 150, textAlign: 'center',color:"#6c6c6c",fontWeight:"500",}}>Or continue with</Text>
                </View>
            <View style={{flex: 1, height: 2, backgroundColor: '#dcdcdc',marginRight:10,}} />
            </View>
            <View style={{marginTop:13}}>
            <Pressable style={styles.mediaBtn}>
                <FontAwesome5 name="facebook-f"  size={24}  color={"#39569c"} style={{padding:5,}}/>
                <Text style={styles.fbTxt} >Facebook</Text>
            </Pressable>
            <Pressable style={styles.mediaBtn}>
                <Image source={{uri:"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"}} style={styles.img}/>
                <Text style={styles.googleTxt} >Google</Text>
            </Pressable>
            </View>
            <Text style={{color:"#626262",fontSize:13,textAlign:"center",fontWeight:"500",marginTop:10,}}>By registration up you accept the 
            </Text>
            <Text style={{ color:"#4657a4",fontSize:13,fontWeight:"600",textAlign:"center",marginTop:5,marginBottom:20,}}>Terms of Service 
            <Text style={{color:"#626262"}}> and </Text> Privacy Policy</Text>
            <View style={{flexDirection:"row",marginTop:20 , marginBottom:10,justifyContent:"center"}}>
                <Text style={styles.paraBottom}>Already have an account?</Text>
                <Pressable onPress={onLogin}>
                    <Text style={{ color:"#39569c",fontSize:14,fontWeight:"800",textAlign:"center",}} >Login</Text>
                </Pressable>
            </View>
        </ScrollView>
        )
}

export default Registration;

const styles=StyleSheet.create({
    bg:{
        backgroundColor:"white",
        flex:1,
        padding:10,
        borderRadius:10,
        borderWidth:0,
    },
    head:{
        color:"#212121",
        fontSize:21,
        marginTop:30,
        padding:10,
        textAlign:"center",
        fontWeight:"700",
    },
    paraBottom:{
        color:"#686868",
        textAlign:"center",
        fontSize:16,
        fontWeight:"500",
    },
    para:{
        color:"#acacac",
        textAlign:"center",
        fontSize:16,
        fontWeight:"500",
    },
    inputContainer:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#f8fafb",
        justifyContent:"center",
        borderRadius:7,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        height:50,
        padding:5,
    },
    inputBox:{
        flex:1,
        backgroundColor:"#f8fafb",
        borderRadius:10, 
        fontSize:15,
        color:"#000000",
        fontWeight:"bold",

    },
    forgotpwdTxt:{
        flex:1,
        alignSelf:"flex-end",
        color:"#4f5fa8",
        fontSize:16,
        marginTop:10,
        marginRight:10,
        fontFamily:"sans-serif-medium",
        fontWeight:"700",
    },
    btn:{
        height:45,
        flex:1,
        alignSelf:"stretch",
        borderRadius:7,
        borderWidth:0,
        marginTop:20,
        marginLeft:10,
        padding:10,
        marginRight:10,
        marginBottom:10,
        backgroundColor:"#273b94",
    },
    btnTxt:{
        color:"#dee1ee",
        fontSize:15,
        textAlign:"center",
     
    },
    mediaBtn:{
        height:50,
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignSelf:"stretch",
        borderRadius:8,
        borderWidth:0,
        padding:5,
        margin:10,
        backgroundColor:"#f4f7fa",
    },
    fbTxt:{
        color:"#5e6daf",
        fontSize:16,
        fontWeight:"600",
        textAlign:"center",
        padding:10,
    },
    googleTxt:{
        color:"#4c4c4c",
        fontSize:16,
        textAlign:"center",
        padding:8,
        fontWeight:"600",
    
    },
    img:{
        height:35,
        width:30,
        padding:10,
        marginRight:3,
        
    }
   
})