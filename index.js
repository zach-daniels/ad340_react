import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('ad340_react_app', () => App);
