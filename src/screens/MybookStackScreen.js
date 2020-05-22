import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, Button, Linking ,TouchableOpacity} from 'react-native';
// import GEM from '../json/albums.json'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator ,DrawerActions} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import Albumlist from '../components/Albumlist';
import HomeStackScreen from '../screens/HomeStackScreen'
const Stack = createStackNavigator();
function StackScreen ({navigation}){
    return(
<Stack.Navigator>
    <Stack.Screen name="My Book" component={Albumlist} 
   options={{
    headerLeft: () =>  <TouchableOpacity onPress={() =>navigation.openDrawer()}>
    <Image style={styles.headdd} source= {require('../img/btn_漢堡.png')}/>
    </TouchableOpacity>,
     headerRight: () =>  <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/")}>
     <Image style={styles.headd} source= {require('../img/btn_search.png')}/>
     </TouchableOpacity>,
    title:"My Book",
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#00b49f' },
    
  }}
    />
  </Stack.Navigator>
    )
}




const Tab = createBottomTabNavigator();
const MybookStackScreen = ({navigation}) => {
  return (
    
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({focused})=>{
        let iconName;

        if(route.name === 'Home'){
          iconName = focused
          ? require("../img/icon_bottomnav_home_seleced.png")
          : require("../img/icon_bottomnav_home.png");
        }
        else if(route.name === 'My Book'){
          iconName = focused
          ? require("../img/icon_bottomnav_mybook_selected.png")
          : require("../img/icon_drawer_mybook_pressed.png");
        }
        else if(route.name === 'Favorites'){
          iconName = focused
          ? require("../img/icon_bottomnav_favorites_seleced.png")
          : require("../img/icon_bottomnav_favorites.png");
        }
        return <Image source={iconName} style={{width:40,height:40}} />;
      },
    })}
    tabBarOptions={{
      activeBackgroundColor:'#fff',
      inactiveTintColor:'#818181',
      activeTintColor:'#00b49f',
      style:{height:60},
      labelStyle:{
          bottom:5
      }
    }}
    

    >
    <Tab.Screen name="Home" component={HomeStackScreen}/>
    <Tab.Screen name="My Book" component={StackScreen}/>
    <Tab.Screen name="Favorites" component={MybookStackScreen}/>
  </Tab.Navigator>

    
    
    
  );
};


const styles = StyleSheet.create({
   headdd:{
       width:50,
       height:50,
       left:4
   },
   headd:{
    width:50,
    height:50,
    right:4
}
});

export default MybookStackScreen;