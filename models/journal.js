const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
    entries: [
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: "Entry"
        }
    ]

});

module.exports = mongoose.model("Journal", JournalSchema);