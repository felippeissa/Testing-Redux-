import React,{ Component} from 'react';
import Video from './components/Video';
import Sidebar from './components/Sidebar';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Video/>
        <Sidebar/>
      </View>
    </Provider>
  );
  }
}
export default App;