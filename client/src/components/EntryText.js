// EntryText.js
import React from "react";
import api from "../api";

const EntryText = (props) => {
    // Inserts or updates entry in the database
    async function updateDataBase () {
        await api.sendEntryToDb(props)
    }

    return (
        <div>
            <form>
                <label
                    itemID="label"
                    htmlFor="text">State your goals for the day:
                </label>
                <textarea
                    name="text"
                    value={props.text}
                    onChange={(event) => props.handleChange(event)}
                    onBlur={updateDataBase}
                    aria-label={"Post entry"}
                    aria-required="true"
                    resi
                />
            </form>
        </div>

    )
};

export default EntryText;