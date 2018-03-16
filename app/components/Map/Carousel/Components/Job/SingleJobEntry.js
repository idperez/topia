import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography';

export default class SingleJobEntry extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { jobtitle, company, snippet } = this.props.job;

        return (
            <View>
                <View style={styles.navForm}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.headerText}>
                            Software Engineer 1
                        </Text>
                        <Text style={styles.headerText}>
                            Yelp
                        </Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Image
                            style={{width: 35, height: 35}}
                            source={{uri: 'https://images.vexels.com/media/users/3/137424/isolated/preview/19b872cc66b8bfc0fb8d947e8728f183-yelp-icon-logo-by-vexels.png'}}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    leftContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20
    },
    saveList: {
        marginTop: 15,
    },
    saveItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        ...sanFranciscoWeights.light,
        marginTop: 5,
        fontSize: 16,
        marginLeft: 10,
        color: '#494763'
    },
    rightSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    navBar: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navForm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 5
    },
    rightIcon: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
    },
    cardButton: {
        backgroundColor: 'white'
    }
});
