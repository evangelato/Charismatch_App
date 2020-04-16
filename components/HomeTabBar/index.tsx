import React from 'react';
import { BottomNavigation, BottomNavigationTab, Divider, BottomNavigationTabElement } from '@ui-kitten/components';
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '../SafeArea';

const HomeTabBar = ({ descriptors, state, navigation }: any): SafeAreaLayoutElement => {
  const onSelect = (index: number): void => {
    const selectedTabRoute: string = state.routeNames[index];
    navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route: any): BottomNavigationTabElement => {
    const { options } = descriptors[route.key];
    return <BottomNavigationTab key={route.key} title={options.title} icon={options.tabBarIcon} />;
  };

  return (
    <SafeAreaLayout insets={SaveAreaInset.BOTTOM}>
      <Divider />
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
        {state.routes.map(createNavigationTabForRoute)}
      </BottomNavigation>
    </SafeAreaLayout>
  );
};

export default HomeTabBar;
