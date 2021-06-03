const express = require('express');
var router = express.Router();

const NotificationController = require('../controllers/notification_controller');


//show
router.get("/", NotificationController.bindMethod("index"));
//Store
router.post('/ticket=:ticket&referenceCode=TST0001&status=:code', NotificationController.bindMethod('store'));
//Update
router.patch('/:id', NotificationController.bindMethod('update'));
//Delete
router.delete('/:id', NotificationController.bindMethod('remove'));


module.exports = router;