import Router from 'koa-router';

const router = new Router();

// router.get('/path',async fn)或者router.post('/path',async fn)

//Index page route
router.get('/', require('../containers/index.js').index);
router.post('/getList', require('../containers/index.js').getList);

//404 page route
router.get('/user', require('../containers/user.js').index);
router.get('/get_user_info', require('../containers/user.js').getUserInfo);
//User page route
router.get('/404', require('../containers/404.js').index);
//Login page route
router.get('/login', require('../containers/login.js').index);
router.post('/login', require('../containers/login.js').login);
router.get('/logout', require('../containers/login.js').logout);

//Reg page route
router.get('/reg', require('../containers/reg.js').index);
router.post('/reg_user', require('../containers/reg.js').reg);
router.post('/vaildate_user', require('../containers/reg.js').vaildate_user);
router.post('/vaildate_email', require('../containers/reg.js').vaildate_email);
//set a router
module.exports = router.routes();
 