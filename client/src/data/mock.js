import Mock from 'mockjs';

Mock.mock('/login', {
  'success': true,
  'status': 200,
  'message': '登录失败!',
  'data': {}
});

Mock.mock('/vaildate_user', {
  'success': true,
  'status': 200,
  'message': '用户名有重复!',
  'data': {}
});

Mock.mock('/vaildate_email', {
  'success': true,
  'status': 200,
  'message': '邮箱已被占用!',
  'data': {}
});

Mock.mock('/reg_user', {
  'success': true,
  'status': 200,
  'message': '注册失败!',
  'data': {}
});
