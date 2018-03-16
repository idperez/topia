import React, { Component } from 'react';

import {
    View
} from 'react-native';

import {
    Scene,
    Router,
} from 'react-native-router-flux';

import {
    Icon
} from 'react-native-elements';

import Landing from './Initial/Landing';
import CreateAccount from './Initial/CreateAccount';
import Password from './Initial/Password';
import Login from './Initial/Login';
import Intro from './Initial/Intro';

import Home from './Home/Home';
import Search from './Home/Search';
import Matches from './Home/Matches';
import TopiaMap from './Map/TopiaMap';
import JobView from './Jobs/JobView';

import Preferences from './Preferences/Preferences';
import Other from './Other/Other';
import Saves from './Saves/Saves';

class TabIcon extends Component {
    render() {
        let color = this.props.selected ? '#8D3B72' : '#C6AADB';

        return (
            <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
                <Icon style={{color: color}} name={this.props.iconName || "home"} size={25}/>
            </View>
        );
    }
}

export default class Routes extends Component {

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="tabbar" tabs={true}>
                        <Scene key="Search" hideNavBar={true}>
                            <Scene
                                key="exp"
                                component={Home}
                                iconName="home"
                                icon={TabIcon}
                            />
                            <Scene
                                key="search"
                                iconName="home"
                                component={Search}
                            />
                            <Scene
                                key="matches"
                                iconName="home"
                                component={Matches}
                            />
                            <Scene
                                key="jobView"
                                iconName="home"
                                component={JobView}
                            />
                        </Scene>
                        <Scene key="Saves" title="Saves" hideNavBar={true}>
                            <Scene
                                key="save"
                                component={Saves}
                                iconName="save"
                                icon={TabIcon}
                            />
                        </Scene>
                        <Scene key="Preferences" title="Preferences" hideNavBar={true}>
                            <Scene
                                key="pref"
                                component={Preferences}
                                icon={TabIcon}
                                iconName="account-circle"
                            />
                        </Scene>
                        <Scene key="Other" hideNavBar={true}>
                            <Scene
                                key="other"
                                component={Other}
                                icon={TabIcon}
                                iconName="list"
                            />
                        </Scene>
                    </Scene>
                    <Scene
                        hideNavBar={true}
                        key="topiaMap"
                        component={TopiaMap}
                    />
                    <Scene
                        hideNavBar={true}
                        key="createAccount"
                        component={CreateAccount}
                    />
                    <Scene
                        hideNavBar={true}
                        key="landing"
                        component={Landing}
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
            </Router>
        );
    }
}