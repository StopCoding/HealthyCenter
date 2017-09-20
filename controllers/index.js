/**
 * Created by jianglei660 on 2017/9/20.
 */


exports.home = function (Req, Res) {

    Res.render('pages/index', {title: 'Title'}, function (err, html) {
        if (err) {
            Res.send('error');
            return;
        }
        Res.send(html);
    });

};