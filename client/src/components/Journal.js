// Journal.js
import React, {useEffect, useState} from "react";
import EntryText from "./EntryText";
import ArrowButton from "./ArrowButton";
import api from "../api";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Heading from "./Heading";

const Journal = () =>{
    const [date, setDate] = useState(new Date());
    // format of date used in the app
    const dateString = `${date.getUTCDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    const [currentEntry, setCurrentEntry] = useState({
        text: ""
    });
    const [journal, setJournal] = useState({
        _id: null,
    });
    //Date Format
    const createDataString = date => `${date.getUTCDate()}-${date.getMonth()+1}-${date.getFullYear()}`;

    //On journal init
    useEffect(() => {
        api.getJournal().then(x =>{
            setJournal(x.data);
            setCurrentEntry(getEntry(x.data, createDataString(date)));
        } );

    },[date]);

    // Gets entry of specified date
     const getEntry = (journal, visibleDate) => {
        const entry = journal.entries.filter(entry => entry.date === visibleDate);
        if(entry.length !== 0){
            return (entry[0]);
        }
        else{
            return {date: visibleDate, journalId: journal._id, text: ""};
        }
    };

    // Updates entry's text
    const updateEntry = (event) => {
         const {name, value} = event.target;
         setCurrentEntry( prevEntry => {
             const newEntry = {...prevEntry, [name]: value};
             updateJournalEntries(newEntry);
             return newEntry
         });
    };

    // Update entries array in the journal
    const updateJournalEntries = (newEntry) => {
        const entryExists = journal.entries.some(entry => entry._id === newEntry._id);
        entryExists ? journal.entries.find(entry => entry._id === newEntry._id).text = newEntry.text : journal.entries.push(newEntry);
    };

    // Navigation between days
    const getPreviousDay = () => {
        let newDate = new Date(date.setDate(date.getDate() - 1));
        setDate(newDate);
        setCurrentEntry(getEntry(journal, createDataString(newDate)));
    };

    // Gets next day
    const getNextDay = () => {
        let newDate = new Date(date.setDate(date.getDate() + 1));
        setDate(newDate);
        setCurrentEntry(getEntry(journal, createDataString(newDate)));
    };

    // Comes back to today's date
    const goToTodayDate = () => {
         let newDate = new Date();
         setDate(newDate);
         setCurrentEntry(getEntry(journal, createDataString(newDate)))
    };

    return (
        (journal._id === null) ? <Heading headingText="The journal is loading - if it take longer then 1 min, then url doesn't exists" /> :
        <section className={"journal"}>
            <Heading headingText={dateString}/>
            <EntryText
                text={currentEntry.text}
                handleChange={updateEntry}
                journalId={journal._id}
                currentDate={dateString}
            />
            <div id="buttons">
                <ArrowButton
                    onGetDay={getPreviousDay}
                    arrow={<KeyboardArrowLeftIcon style={{fontSize: 50}}/>}
                />
                {createDataString(date) !== createDataString(new Date()) && <button id="homeButton" onClick={goToTodayDate}>Home</button>}
                <ArrowButton
                    onGetDay={getNextDay}
                    arrow={<KeyboardArrowRightIcon style={{fontSize: 50}}/>}
                />
            </div>
        </section>
    )
};

export default Journal;