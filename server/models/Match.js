const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const matchSchema = new Schema({
  user1: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  user2: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  chatId: {
    type: Schema.Types.ObjectId,
    ref: 'Chat',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Match = model('Match', matchSchema);

module.exports = Match;
