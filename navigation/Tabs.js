import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIOS } from 'react-native';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
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
        <Tabs.Navigator>
            <Tabs.Screen name="Movies" component={Movies} />
            <Tabs.Screen name="Tv" component={Tv} />
            <Tabs.Screen name="Search" component={Search} />
            <Tabs.Screen name="Favs" component={Favs} />
        </Tabs.Navigator>
    )
}