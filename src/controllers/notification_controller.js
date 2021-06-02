const Notification = require('../models').Notification;
const ResourceController = require("./resource_controller");
class NotificationController extends ResourceController {

    constructor() {
        super();
        this.setModel(Notification)
    }
}

module.exports = new NotificationController;