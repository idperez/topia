import React, { Component } from 'react';

import {
    Scene,
    Router,
} from 'react-native-router-flux';

import Landing from './Initial/Landing';
import CreateAccount from './Initial/CreateAccount';
import Password from './Initial/Password';
import Login from './Initial/Login';
import Intro from './Initial/Intro';

import Home from './Home/Home';
import Search from './Home/Search';
import TopiaMap from './Map/TopiaMap';
import JobView from './Jobs/JobView';

export default class Routes extends Component {

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="initial">
                        <Scene
                            hideNavBar={true}
                            key="map"
                            component={Home}
                        />
                        <Scene
                            hideNavBar={true}
                            key="search"
                            component={Search}
                        />
                        <Scene
                            hideNavBar={true}
                            key="jobView"
                            component={JobView}
                        />
                        <Scene
                            hideNavBar={true}
                            key="createAccount"
                            component={CreateAccount}
                        />
                        <Scene
                            hideNavBar={true}
                            key="password"
                            component={Password}
                        />
                        <Scene
                            hideNavBar={true}
                            key="login"
                            component={Login}
                        />
                        <Scene
                            hideNavBar={true}
                            key="intro"
                            component={Intro}
                        />
                    </Scene>
                </Scene>
            </Router>
        );
    }
}