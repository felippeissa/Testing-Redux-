import React from 'react';

import { View , Text , TouchableOpacity , Button , Linking} from 'react-native';

import { connect } from 'react-redux';

const Video = ({activeModule, activeLesson }) => (
  <View>
    <Text>
      Modulo: { activeModule.title } 
    </Text>
    <Text>
      Aula: { activeLesson.title }
    </Text>
    <TouchableOpacity onPress={ ()=> Linking.openURL('https://gestorbullaweb.com.br/auth/login') }>
      <Text>
        Click aqui para ir para Aula
      </Text>
    </TouchableOpacity>
 
  </View>
);

export default connect(state =>({ 
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
