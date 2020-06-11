//LangingPage.js
import React from 'react';
import Heading from './Heading';
import api from "../api";

const LandingPage = () => {
    return (
        <div className="journal">
            <header>
                <Heading headingText={"Create a Daily Journal"}/>
                <p>Note: Your journal will be viewable and editable to anyone who has the link!</p>
            </header>
            <main>
                <button onClick={api.createJournal}>Create new journal!</button>
            </main>
        </div>
    )
};

export default LandingPage;