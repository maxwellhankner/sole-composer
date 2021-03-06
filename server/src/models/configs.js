const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const configSchema = new Schema({
  modelName: String,
  configData: Schema.Types.Mixed,
});

const Config = mongoose.model('Config', configSchema);

module.exports = Config;
