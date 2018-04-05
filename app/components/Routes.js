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

import Feed from './Feed/Feed';
import UserSearch from './Feed/UserSearch';

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
                    <Scene key="tabbar" tabs={true} activeTintColor="#89A7A7">
                        <Scene key="search" hideNavBar={true}>
                            <Scene
                                key="home"
                                component={Home}
                                iconName="home"
                                icon={TabIcon}
                            />
                            <Scene
                                key="search"
                                iconName="home"
                                component={Search}
                                icon={TabIcon}
                            />
                            <Scene
                                key="matches"
                                iconName="home"
                                component={Matches}
                                icon={TabIcon}
                            />
                            <Scene
                                key="jobView"
                                iconName="home"
                                component={JobView}
                                icon={TabIcon}
                            />
                        </Scene>
                        <Scene key="Feed" title="Feed" hideNavBar={true}>
                            <Scene
                                key="feed"
                                component={Feed}
                                iconName="recent-actors"
                                icon={TabIcon}
                            />
                            <Scene
                                key="userSearch"
                                iconName="recent-actors"
                                component={UserSearch}
                                icon={TabIcon}
                            />
                        </Scene>
                        <Scene key="Saves" title="Saves" hideNavBar={true}>
                            <Scene
                                key="save"
                                component={Saves}
                                iconName="favorite"
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
                        key="landing"
                        component={Landing}
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
                    <Scene
                        hideNavBar={true}
                        key="topiaMap"
                        component={TopiaMap}
                    />
                </Scene>
            </Router>
        );
    }
}