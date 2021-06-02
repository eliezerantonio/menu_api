const Notification = require('../models').Notification;

class NotificationController extends ResourceController {

    constructor() {
        super();
        this.setModel(Notification)
    }
}

module.exports = new NotificationController;