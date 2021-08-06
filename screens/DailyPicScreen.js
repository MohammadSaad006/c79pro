import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, Alert, Platform, StatusBar, SafeAreaView, Linking, ScrollView } from 'react-native';

import axios from 'axios';

export default class DailyPicScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apod: []
        };
    }

    componentDidMount() {
        this.getAPOD()
    }

    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=V3r78uzAq84BGvegvyXkof0GtcdcVZ2MvflQe3HB")
.then(response => {
this.setState({ apod: response.data })
})
.catch(error => {
 Alert.alert(error.message)
 })
    }

    render() {
      
            return (
                <View style={styles.container}>
<SafeAreaView style={styles.droidSafeArea} />
<ImageBackground source={require('../assets 1/stars.gif')} style={styles.backgroundImage}>
<View style={{ flex: 0.15, justifyContent: "center", textAlign: "center" }}>
<Text style={styles.routeText}>Daily Pic</Text>
    </View>
 <TouchableOpacity
onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}>
 <View style={styles.iconContainer}>
<Image source={require("../assets 1/play-video.png")} style={{ width: 50, height: 50 ,marginTop:20}}></Image>
 </View>
</TouchableOpacity >
 <View style={{ padding: 20 }}>
<Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                            </View>
                       
                    </ImageBackground>
                </View>
            )
        }
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#ec63ff",
    },
    explanationText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        marginTop: 10
       
    },

    iconContainer: {
        justifyContent: "center",
        alignItems: "center",

    }
});

