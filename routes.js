/**
 * Created by jianglei660 on 2017/9/20.
 */
var main = require('./controllers/index');

module.exports = function (App) {

    App.route('/').get(main.home);
};