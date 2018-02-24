var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventSchema = new Schema({
    eventId: Number,
    eventFrom: Date,
    eventTo: Date,
    activityType: {
        activityId: Number,
        activityDescription: String,
        createdOn: {
            type: Date,
            default: Date.now
        }
    },
    isActive: Boolean,
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Event', eventSchema);