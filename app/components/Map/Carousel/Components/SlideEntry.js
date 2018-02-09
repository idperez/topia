import React, { Component } from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';

import styles from './../Styles/EntryStyles';

import MultipleJobEntry from './Job/MultipleJobEntry';
import SingleJobEntry from './Job/SingleJobEntry';

export default class SliderEntry extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showContent: true
        };
    }

    showJobCardContent() {
        if(this.props.data.jobs.length > 1) {

        } else {

        }
    }

    render () {

        const { jobs } = this.props.data;

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => this.showJobCardContent()}
            >
                <View style={styles.textContainer}>
                    {jobs.length > 1 ?
                        <MultipleJobEntry
                            jobs={jobs}
                        />
                        :
                        <SingleJobEntry job={jobs[0]} />
                    }
                </View>
            </TouchableOpacity>
        );
    }
}