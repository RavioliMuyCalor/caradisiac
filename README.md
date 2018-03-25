# CARADISIAC

> Drive comfortably


## How To Launch

-Run "node server" to start the server

-Go to my-app and run "npm start" to run the app

-Click on the buttons to Search for Audi models or populate the index with Audi models.


## Warning

GetModels doesn't seem to work anymore, I get a timeout error whenever I use it. The code actually indexes Audi and Renault models but since I couldn't use GetModels for Renault they're not indexed. Maybe it'll work for you.

The results are stored in a json file in my-app/src/models.json. I tried to display the result of the search on the web app without storing them in a file but I couldn't make it work for some reason. (The variable I used to setState wouldn't be updated for some reason, maybe because of asynchronicity problems) I decided to do it like Top-Chef and read the json file to easily display on the web app.


