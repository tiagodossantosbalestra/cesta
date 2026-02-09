import { Text, SafeAreaView, SafeAreaViewBase } from 'react-native';
import Sobrenome from './src/telas/Sobrenome';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Tiago</Text>
      <Sobrenome sobrenome="dos" />
      <Sobrenome sobrenome="Santos" />
      <Sobrenome sobrenome="Balestra" />
    </SafeAreaView>  
    
  );
}

