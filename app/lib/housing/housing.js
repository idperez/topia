"use strict";

exports.getHousingData = (latitude, longitude) => {
    return new Promise((resolve, reject) => {
        const requestObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer topiadev'
            }
        };

        let url = `http://topia-env.ec2n87mrb8.us-west-2.elasticbeanstalk.com/housing?lat=${latitude}&long=${longitude}&radius=20`;

        fetch(url, requestObj)
            .then(res => {
                resolve(res.json());
            }).catch(err => {
            reject(err);
        });
    });
};