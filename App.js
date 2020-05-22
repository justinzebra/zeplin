import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedbac, TouchableOpacity,Linking } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator ,DrawerActions} from '@react-navigation/stack';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { navigationRef } from './RootNavigation';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Albumlist from './src/components/Albumlist';
import HomeStackScreen from './src/screens/HomeStackScreen';
import MybookStackScreen from './src/screens/MybookStackScreen';
import albumData from "./src/json/album.json";





const Stack = createStackNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
   
 <View style={styles.bb}>
<View style={styles.bb1}>
<Image style={styles.bph} source = {{uri:albumData[0].bph}}/>
<Text style={styles.bw1}>GamexHCl</Text>
<Text style={styles.bw1}>gdlab2017@gmail.com</Text>
<Image style={styles.bd} source= {require('./src/img/btn_down_arrow.png')}/>
</View>

 </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
  
<NavigationContainer  ref={navigationRef}>
 <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
drawerContentOptions={{
  activeTintColor:'#fff',
  inactiveTintColor:'#5c5c5c',
  activeBackgroundColor:'#00b49f',
  itemStyle: { height: 60 ,width: 320,
    marginLeft:0 ,marginBottom:0,
    borderRadius:0,bottom:0
   },
  labelStyle: { 
    marginTop :5,
    marginLeft:20}
}}
initialRouteName = 'My Book'
 >
<Drawer.Screen name="Home" component={HomeStackScreen}
options = {{
  drawerIcon : ({focused})=>(
    focused
    ? <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/icon_drawer_home_pressed.png?raw=true" }} style={styles.bh}  />
    : <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_drawer_home.png?raw=true"}} style={styles.bh}  /> 
  )
}}
/>
<Drawer.Screen name="My Book" component={MybookStackScreen}
options = {{
  drawerIcon : ({focused})=>(
    focused
    ? <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/icon_drawer_mybook_pressed.png?raw=true" }} style={styles.bh}  />
    : <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_drawer_mybook.png?raw=true"}} style={styles.bh}  /> 
  )
}}
/>
<Drawer.Screen name="Favorite" component={MybookStackScreen}
options = {{
  drawerIcon : ({focused})=>(
  
    <Image
    style={styles.bh}
    source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_drawer_favorites.png?raw=true"}}
  />
  )
}}
/>
<Drawer.Screen name="Setting" component={MybookStackScreen}
options = {{
  drawerIcon : ({focused})=>(
    <Image
    style={styles.bh}
    source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_drawer_setting.png?raw=true"}}
  />
  )
}}
/>
<Drawer.Screen name="About us" component={MybookStackScreen}
options = {{
  drawerIcon : ({focused})=>(
    <Image
    style={styles.bh}
    source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/icon_drawer_aboutus.png?raw=true"}}
  />
  )
}}
/>
 </Drawer.Navigator>
</NavigationContainer>


  );
}

const styles = StyleSheet.create({
  
  container:
  {
    borderColor: '#000',
    backgroundColor: "#000",
    color:'#000',
  },
  
  headdd:
  {
    width:50,
    height:50,
    left:4
  },
  headd:
  {
    width:50,
    height:50,
    right:4
  },
    bb:
    {
      backgroundColor:"#ebebeb",
      width:304,
      height:163,
     bottom:5
      
    },
    bb1:
    {
      backgroundColor:"#00b49f",
      width:320,
      height:170,
    },
    bph:
    {
      width:70,
      height:70,
      margin:10,
      marginLeft:15,
      marginTop:35
    },
    bw1:
    {
      fontSize:16,
      color:'#fff',
      fontWeight:'bold',
      paddingLeft:22
    },
   
    bh:
    {
      height:30,
      width:30,
     marginLeft:20,
     marginTop:5
    },
   
    bd:
    {
      position:"absolute",
      width:30,
      height:30,
      marginLeft:230,
      marginTop:130
    }

});
export default App;

  