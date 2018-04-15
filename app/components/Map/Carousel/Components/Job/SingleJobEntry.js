import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography';

export default class SingleJobEntry extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { jobtitle, company } = this.props.job;

        return (
            <View>
                <View style={styles.navForm}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.companyText}>
                            {company}
                        </Text>
                    </View>
                </View>
                <View style={styles.navForm}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.jobText}>
                            {jobtitle}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    leftContainer: {
        flexDirection: 'row'
    },
    headerText: {
        ...sanFranciscoWeights.light,
        marginTop: 5,
        fontSize: 16,
        marginLeft: 10,
        color: '#494763'
    },
    navBar: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    jobText: {
        ...sanFranciscoWeights.light,
        fontSize: 18,
        color: '#494763'
    },
    companyText: {
        ...sanFranciscoWeights.heavy,
        fontSize: 14,
        color: '#f12e94'
    }
});
