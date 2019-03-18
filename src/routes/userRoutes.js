var userRouter = require('express').Router();
var userController = require('../controller/userController');
var adminController = require('../controller/adminController');

var common = require('../common/commonFunction');
userRouter.route('/users')
    .post(userController.createUser)
    .get( userController.verifyToken, userController.getAllUser);

userRouter.route('/users/:userId')
    .get(userController.verifyToken, userController.getUserDetail)
    .put(userController.verifyToken, common.uploadProfilePic , userController.updateUser)
    .delete(userController.verifyToken, userController.deleteUser);

userRouter.route('/admin/:userId')
    .get(adminController.getAdmin)

module.exports = userRouter;
