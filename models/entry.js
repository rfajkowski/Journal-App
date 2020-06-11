const mongoose = require("mongoose");

const EntrySchema = mongoose.Schema({
    journalId: String,
    date: String,
    text: String
});

module.exports = mongoose.model("Entry", EntrySchema);