import Router from 'koa-router';

const router = new Router();

// router.get('/path',async fn)或者router.post('/path',async fn)
// Index page route
router.get('/', require('../containers/index.js').index);
router.post('/getList', require('../containers/index.js').getList);

// notFound page route
router.get('/user', require('../containers/user.js').index);
// router.get('/getUserInfo', require('../containers/user.js').getUserInfo);
// User page route
router.get('/notFound', require('../containers/notFound.js').index);

// Login page route
router.get('/login', require('../containers/login.js').index);
router.post('/login', require('../containers/login.js').login);
router.get('/logout', require('../containers/login.js').logout);

// Reg page route
router.get('/reg', require('../containers/reg.js').index);
router.post('/regUser', require('../containers/reg.js').reg);
router.post('/vaildateUser', require('../containers/reg.js').vaildateUser);
router.post('/vaildateEmail', require('../containers/reg.js').vaildateEmail);




//set a router
module.exports = router.routes();
 