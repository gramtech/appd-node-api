require('dotenv').config();

var config = {};


config.url = ".saas.appdynamics.com";
config.port = 443;

config.account = process.env.APPD_ACCOUNT_NAME;
config.key = process.env.APPD_ACCOUNT_KEY;
config.user = process.env.APPD_USER;
config.pass = process.env.APPD_PASS;

config.ep = {};
config.ep.ma = "/controller/sim/v2/user/machines";


var env = process.env.ENVIRONMENT || 'dev';

module.exports = config;

