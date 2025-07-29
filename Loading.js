import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

var styles = StyleSheet.create({

    message: {
         paddingTop: 20,
         textAlign: 'center',
         fontSize: 25,
         fontWeight: 'bold',
             },
});

const Loading = () => {
  return (
    <View>
    <Text style={styles.message}> Loading Pictures...
    </Text>
    </View>


  );
};

export default Loading;