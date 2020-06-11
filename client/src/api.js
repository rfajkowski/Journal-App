import axios from "axios";

const api = {};
// Creates new journal in db and redirects
api.createJournal = (href) => {
    axios.post('/api')
        .then(response => window.location.href = window.location.href+ `id/${response.data}`);
};

// Send new entry to the database
api.sendEntryToDb = (props) => {
    axios.put(`/api/${props.journalId}/`,
        {
            dateSet: props.currentDate,
            text: props.text
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response)
};

// Get journal from database
api.getJournal = async () => {
    return await axios.get(`/api${window.location.pathname.substr(3)}` );
};

export default api;