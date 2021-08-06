import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet,StatusBar,SafeAreaView,Platform ,ImageBackground} from 'react-native';
export default class HomeScreen extends React.Component{
    render(){
        return(
          <View style={styles.container}>
          <SafeAreaView style={styles.safearea}/>
          <ImageBackground  source={require("../assets 1/bg_updates.jpg")} style={styles.bg}>
          <View style={styles.titleBar}>
            <Text style={styles.tytle}>Steller App</Text>
             </View>
            <TouchableOpacity style={styles.routecard} 
            onPress={()=>
            this.props.navigation.navigate("DailyPicScreen")}>
            <Text style={styles.routeText}>daily pictures</Text>

            <Image source={require("../assets 1/daily_pictures.png")} style={styles.icon}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routecard} 
            onPress={()=>
            this.props.navigation.navigate("StarMapScreen")}>
            <Text style={styles.routeText}>Star Map</Text>
            <Image source={require("../assets 1/star_map.png")} style={styles.icon}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routecard}
            onPress={()=>
            this.props.navigation.navigate("SpacecraftScreen")}>
            <Text style={styles.routeText}>Space Craft</Text>
            <Image source={require("../assets 1/rocket_icon.png")} style={styles.icon}></Image>
            </TouchableOpacity>
          </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  tytle:{
  color:"white",
  fontSize:40,
  fontWeight:"bold"
  
  },
  safearea:{
    marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
  },
  titleBar:{
     flex: 0.15,
    justifyContent:"center",
    alignItems: 'center',
  },
  routecard:{
    flex:0.25,
    marginLeft:30,
    marginRight:30,
    marginTop:50,
    borderRadius:20,
    borderWidth:2,
    width:250,
    backgroundColor:"white"
    
  },
  routeText:{
    fontSize:20,
    fontWeight:"bold",
    color:"black",
    marginTop:30,
    paddingLeft:20,
    height:10
  },
  bg:{
    flex:1,
    resizeMode:"cover"
  },
  icon:{
    position:"absolute",
    height:100,
    width:90,
    resizeMode:"contain",
    right:10,
    top:-30
  },
  know:{
    paddingLeft:30,
    color:"red",
    fontSize:15
  },
  digit:{
    position:"absolute",
    color:"rgba(183,183,183,0.5))",
    fontSize:150,
    right:20,
    bottom:-15,
    zIndex:-1
  }
});