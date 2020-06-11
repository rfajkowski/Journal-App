const   express = require("express"),
        router = express.Router();
        Journal = require("./models/journal"),
        Entry = require("./models/entry");

//Create Journal
router.post("/api", (req, res) => {
    let newJournal = {entries: []};
    Journal.create(newJournal, (err, newJournal) => {
        if(err){}
        else {
            res.send(newJournal._id);
        }
    })
});

//Get Journal
router.get("/api/:id", (req, res) => {
    Journal.findById(req.params.id).populate("entries").exec((err, foundJournal) => {
        if(err || !foundJournal){
            return null;
        } else {
            return res.json(foundJournal);
        }
    })
});

//Create or update entry inside the journal
router.put("/api/:id", (req, res) => {
    Journal.findById(req.params.id, (err, journal) => {
        if(err){
            return res.json({success: false, error: err});
        } else {
            Entry.find({date: req.body.dateSet, journalId: req.params.id})
                .then(result => {
                    //create new entry if not found
                    if(result.length === 0) {
                        Entry.create(
                            {
                                journalId: req.params.id,
                                date: req.body.dateSet,
                                text: req.body.text})
                            .then(entry => {
                                journal.entries.push(entry);
                                journal.save();
                            });
                    } else {
                        Entry.updateOne({_id: result[0]._id}, {text: req.body.text})
                            .then(x => x);
                    }
                })
        }
    })
});

module.exports = router;