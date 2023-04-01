'use strict';

const helpers = require('../helpers');
const user = require('../../user');
const db = require('../../database');
const fetch = require("node-fetch");
const nconf = require('nconf');

const Career = module.exports;

Career.register = async (req, res) => {
    const userData = req.body;
    try {
        const userCareerData = {
            student_id: userData.student_id,
            major: userData.major,
            age: userData.age,
            gender: userData.gender,
            gpa: userData.gpa,
            extra_curricular: userData.extra_curricular,
            num_programming_languages: userData.num_programming_languages,
            num_past_internships: userData.num_past_internships,
        };

        const pred = nconf.get('prediction');
        const uri = `${pred.host}:${pred.port}`
        const APIEndpoint = `http://${uri}/${pred.endpoint}`
        const response = await fetch(APIEndpoint, {
            method: "POST",
            body: JSON.stringify(userCareerData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res_json = await response.json();
        userCareerData.prediction = res_json['good_employee'];

        await user.setCareerData(req.uid, userCareerData);
        db.sortedSetAdd('users:career', req.uid, req.uid);
        res.json({});
    } catch (err) {
        console.log(err);
        helpers.noScriptErrors(req, res, err.message, 400);
    }
};
