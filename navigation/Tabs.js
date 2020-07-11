import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Movies from '../screens/Movies';
import TV from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';

const Tabs = createBottomTabNavigator();
const getHeaderName = (route) => route?.state?.routeNames[route.state.index] || "Movies";;
export default (props) => {
    const navigation = props.navigation;
    const route = props.route;
    //useEffect(() => {
    useLayoutEffect(() => {// layoutEffect는 user Effect랑 다른점이 레이아웃 변경이 다 끝난후에 작동함
        const name = getHeaderName(route);
        navigation.setOptions({
            title: name,
        })
    }, [route]);

    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    if (route.name === "Movies") {
                        iconName += "film";
                    } else if (route.name === "TV") {
                        iconName += "tv";
                    } else if (route.name === "Search") {
                        iconName += "search";
                    } else if (route.name === "Discovery") {
                        iconName += "heart";
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            color={focused ? "white" : "grey"}
                            size={26}
                        />
                    );
                }
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black",

                }
            }}>
            <Tabs.Screen name="Movies" component={Movies} />
            <Tabs.Screen name="TV" component={TV} />
            <Tabs.Screen name="Search" component={Search} />
            <Tabs.Screen name="Discovery" component={Favs} />
        </Tabs.Navigator>
    )
}