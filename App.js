import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native"

import Routes from './src/routes';

//context
import CardProvider from './src/context/cardContext';

export default function App() {
  return (
    <NavigationContainer>
      <CardProvider>
        <Routes/>
        <StatusBar backgroundColor='#fafafa' style='dark'/>
      </CardProvider>
    </NavigationContainer>
  );
}
