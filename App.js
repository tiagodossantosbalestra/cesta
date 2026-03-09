import {View} from 'react-native';
import Cesta from './src/telas/Cesta';
import { SafeAreaView } from 'react-native-web';
import{
        useFonts,
        montserrat_400Regular
        montserrat_700Bold
      } from '@expo-google-fonts/montserrat';

      
export default function App() {
  return (
    <SafeAreaView>
   
      <Cesta />
    </SafeAreaView>  
    
  );
}

