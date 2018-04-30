/* eslint-disable no-console */

const dotenv = require('dotenv').config()
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
    .goto('http://reseau-ges.lms.crossknowledge.com/interfaces/login.php')
    .wait('.buttonSubmit')
    .type('#fldUserName', process.env.MYGES_PSEUDO)
    .type('#fldPassword', process.env.MYGES_PWD)
    .click('.buttonSubmit')
    /*
    .goto('https://www.myges.fr/#/')
    .click('.btn-lg.btn-blue')
    .type('#username', process.env.MYGES_PSEUDO)
    .type('#password', process.env.MYGES_PWD)
    .click('.input_submit')
    .goto('https://partenaires.reseau-ges.fr/crossknowledge')
    */
    .end()
    .then(function(result) {
        console.log(result)
    })
    .catch(function(error) {
        console.error(error)
    });

