import devdactic_nativeModules from './shared';
import { AppRegistry } from 'react-native';

// var React = require('react');
// var ReactNative = require('react-native');
//
// // 1
// var {
//   Component
// } = React;
// var {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } = ReactNative;
//
// // 2
// var MyModule = require('NativeModules').MyModule;
//
// class devdactic_nativeModules extends Component {
//   // 3
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0
//     };
//   }
//
//   // 4
//   render() {
//     return (
//       <View style={styles.container}>
//       <Text style={styles.welcome}>
//       {MyModule.greeting}
//       </Text>
//       <TextInput style={styles.input} onChangeText={(text) => this.squareMe(text)}/>
//       <Text style={styles.result}>
//       {this.state.number}
//       </Text>
//       </View>
//     );
//   }
//
//   // 5
//   squareMe(num) {
//     if (num == '') {
//       return;
//     }
//     MyModule.squareMe(parseInt(num, 10), (error, number) => {
//       if (error) {
//         console.error(error);
//       } else {
//         this.setState({number: number});
//       }
//     })
//   }
// };
//
// // 6
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 20,
//   },
//   input: {
//     width: 100,
//     height: 40,
//     borderColor: 'red',
//     borderWidth: 1,
//     alignSelf: 'center'
//   },
//   result: {
//     textAlign: 'center',
//     color: '#333333',
//     fontSize: 30,
//     fontWeight: 'bold',
//     margin: 20,
//   },
// });

AppRegistry.registerComponent('devdactic_nativeModules', () => devdactic_nativeModules);
