import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import setting from './setting';

const Drawer = createDrawerNavigator();

const drawer = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="setting" component={setting} />
    </Drawer.Navigator>
  );
};

export default drawer;
