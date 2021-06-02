const express = require('express');
var router = express.Router();

const NotificationController = require('./notification_controller');


//show
router.get("/", NotificationController.bindMethod("index"));
//Store
router.post('/', NotificationController.bindMethod('store'));
//Update
router.patch('/:id', NotificationController.bindMethod('update'));
//Delete
router.delete('/:id', NotificationController.bindMethod('remove'));
