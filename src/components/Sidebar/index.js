import React from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

function toggleLesson(module,lesson) {
    return {
        type:'TOGGLE_LESSON',
        module,
        lesson,
    };
}

const Sidebar = ({modules, dispatch }) => (
        <SafeAreaView>
            {modules.map(module =>(
                <View key={module.id}>
                    <Text>
                        {module.title}
                    </Text>   
                    { module.lessons.map(lesson =>(
                        <View key={lesson.id}>
                            <TouchableOpacity onPress={()=> dispatch(toggleLesson(module,lesson))}>
                                <Text>
                                    {lesson.title}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            ))}
        </SafeAreaView>
);

export default connect(state => ({ modules: state.course.modules }))(Sidebar);
