"use strict";

let url = 'http://topia-env.ec2n87mrb8.us-west-2.elasticbeanstalk.com';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer topiadev'
};

exports.getCityMatch = () => {
    return new Promise((resolve, reject) => {

        const profileURL = url + "/users/profile?cityarray=true";

        let requestObj = {
            method: 'GET',
            headers: headers
        };

        fetch(profileURL, requestObj)
            .then(res => {
                resolve(res.json());
            }).catch(err => {
            reject(err);
        });
    });
};

exports.getProfile = () => {
    return new Promise((resolve, reject) => {

        const profileURL = url + "/users/profile";

        let requestObj = {
            method: 'GET',
            headers: headers
        };

        fetch(profileURL, requestObj)
            .then(res => {
                resolve(res.json());
            }).catch(err => {
            reject(err);
        });
    });
};

exports.setProfile = (title, beds, baths) => {
    return new Promise((resolve, reject) => {

        const preferencesURL = url + "/users/profile";

        let params =  {
            "prefs": {
                "prefs_jobs_titles": [
                    title
                ],
                "prefs_house_beds": beds,
                "prefs_house_baths": baths
            },
            "type": "multiple"
        };

        let requestObj = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params)
        };

        fetch(preferencesURL, requestObj)
            .then(res => {
                resolve(res.json());
            }).catch(err => {
            reject(err);
        });
    });
};