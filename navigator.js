import { StackNavigator } from 'react-navigation';
import Home from './components/home';
import MainSection from './components/mainSection';

const Navigator = StackNavigator({

    // home: {
    //     screen: Home,

    // },
    main: {
        screen: MainSection,
    },

});

export default Navigator;