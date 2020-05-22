import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity } from 'react-native';
import GEM from '../json/album.json';

const Albumlist = ({navigation}) => {
  console.log(navigation)
  return (
    
    <ScrollView style={styles.container} >
    <View style={styles.Gem} name="side_open">
    <View style={styles.Gem1}>
    <View style={styles.ph}>
    <Image style={styles.Gemph} source = {{uri:GEM[0].img1}}
    />
    </View>
    <View style={styles.Gem2}>
    <Text style={styles.text1}>{GEM[0].text1}</Text>
    <Text style={styles.text2}>{GEM[0].text2}</Text>
    <Text style={styles.text3}>{GEM[0].text3}</Text>
    <View style={styles.lineg}></View>
    <View style={styles.line}></View>
    <Text style={styles.text4}>{GEM[0].text4}</Text>
    </View>
    </View>
  </View>

  <View style={styles.Gemm}>
    <View style={styles.Gem1}>
    <View style={styles.ph}>
    <Image style={styles.Gemph} source = {{uri:GEM[1].img1}}
    />
    </View>
    <View style={styles.Gem2}>
    <Text style={styles.text1}>{GEM[1].text1}</Text>
    <Text style={styles.text2}>{GEM[1].text2}</Text>
    <Text style={styles.text33}>{GEM[1].text3}</Text>
    <View style={styles.line2}></View>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Detail")}>
    <Image style={styles.Gemph1} source= {require('../img/btn_start.png')}
    />
    </TouchableOpacity>
    </View>
    </View>
  </View>
  
  <View style={styles.Gemm}>
    <View style={styles.Gem1}>
    <View style={styles.ph}>
    <Image style={styles.Gemph} source = {{uri:GEM[2].img1}}
    />
    </View>
    <View style={styles.Gem2}>
    <Text style={styles.text1}>{GEM[2].text1}</Text>
    <Text style={styles.text2}>{GEM[2].text2}</Text>
    <Text style={styles.text33}>{GEM[2].text3}</Text>
    <View style={styles.line2}></View>
    <Image style={styles.Gemph1} source= {require('../img/btn_start.png')}
    />
    </View>
    </View>
   
  </View>
  
  </ScrollView>
 
  );
};


const styles = StyleSheet.create({
  container:
  {
    backgroundColor:'#d1d1d1'
  },
    Gem:
    {
      height:180,
      backgroundColor:'#f8f8f8'
    },
    Gemm:
    {
      marginTop:2,
      height:180,
      backgroundColor:'#f8f8f8'
    },
    Gem1:
    {
      paddingLeft:15,
      flexDirection:"row",
      
    },
    text1:
    {
      fontSize:18,
      color:'#2e2e2e',
      paddingLeft:10,
      fontWeight:'bold',
      marginLeft:13
    },
    text2:
    {
      fontSize:14,
      color:'#717171',
      paddingLeft:10,
      fontWeight:'bold',
      marginLeft:15,
      paddingTop:13
    },
    text3:
    {
      fontSize:12,
      color:'#b1b1b1',
      paddingLeft:10,
      fontWeight:'bold',
      marginLeft:15,
      width:210,
      paddingTop:13
    },
    text33:
    {
      fontSize:12,
      color:'#b1b1b1',
      paddingLeft:10,
      fontWeight:'bold',
      marginLeft:15,
      width:230,
      paddingTop:13,
    },
    text4:
    {
      fontSize:12,
      color:'#b1b1b1',
      paddingLeft:10,
      fontWeight:'bold',
      marginLeft:15,
      paddingTop:13
    },
    Gem2:
    {
      flexDirection:"column",
      marginTop:28
    },
    gem1:
    {
      paddingTop:20,
      alignItems:"center",
      shadowColor:"#fff",
      shadowOffset:{width:0,height:0},
      shadowOpacity:1,
    },
    Gemph:
    {
      margin:3,
      height:150,
      width:103,
      
    },
    ph:
    {
      marginTop:12,
      borderColor: "#d1d1d1",
      backgroundColor: "#f8f8f8",
      width:109,
      height:156,
      shadowColor:"#d1d1d1",
      shadowOffset:{width:0,height:0},
      shadowOpacity:1,
    },
    Gemph1:
    {
      marginLeft:25,
      height:26,
      width:87,
      marginTop:10
    },
    line:
    {
      width:102,
      backgroundColor:'#70b4a1',
      height:3,
      marginTop:106.5,
      marginLeft:24,
      borderRadius:999,
      position:"absolute"
    },
    lineg:
    {
      width:204,
      backgroundColor:'#c3c3c3',
      height:3,
      marginTop:13,
      marginLeft:24,
      borderRadius:999,
      
    },
    line2:
    {
      width:204,
      backgroundColor:'#c3c3c3',
      height:3,
      marginTop:13,
      marginLeft:24,
      borderRadius:999,
      
    },
    bottomm:
    {
      position:"absolute",
      flexDirection:"row",
      bottom:-60
      
      
    },
    bottom:
    {
      height:76,
      width:124,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
      borderTopColor:"#d1d1d1",
      borderTopWidth:2
    },
    bottom2:
    {
      height:76,
      width:126,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
      borderTopColor:"#d1d1d1",
      borderTopWidth:2
    },
    bottom3:
    {
      height:76,
      width:125,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
      borderTopColor:"#d1d1d1",
      borderTopWidth:2
    },
    bGemph1:
    {
        width:40,
        height:40,
        
    },
    w1:
    {
        fontSize:14,
        color:'#717171',
        fontWeight:'bold',
    },
    w2:
    {
        fontSize:14,
        color:'#00b49f',
        fontWeight:'bold',
    },
    
    
});

export default Albumlist;