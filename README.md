# The Journal App
## Available at https://journal-api-rf.herokuapp.com/

### Author: *Rafal Fajkowski*

## The Journal App
The Diary App is a one-page application that allows the user to create an online diary, that is available to anyone who has the link. 
The user can cycle through different days and add new entries to it.

Upon creation of the diary, the back end of the app generates unique journal ID and saves it to the database. 
The user can access previously created journal by reusing the generated link (bookmarking the journal is handy).
When the app generates journal or user accesses previously created one, the app always takes the user to the current day.

The user can add entries to each day by typing inside the text box. The app saves the text automatically whenever the user leaves the text box area.
Data is persistent, and if the user uses the same link, can access his previous journal and created entries. 

## Technology
The Diary App is a one-page application developed with MERN stack. 
MongoDB is serviced by [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

The app is using hooks instead of classes.
