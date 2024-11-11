const express = require("express");
const fs = require("fs");
const {createFile, getFile} = require("./fileSystem.js"); //imported a custom moddule called createFile
const app = express();

createFile(); // And called the module called createFile which will create a new file and shows current date and time

app.get("/", async function(req, res){ //Api to get all the text files in the folder
   fs.readFile("date-time.txt", "utf-8", (err, data) => {
    if(data){
        console.log(data);
        return res.status(200).json({
            message: "The current date and time is fetched successfully!",
            currentDate: data
        })
    }
   })
   
})

app.listen(8080, function(){ // Server is connected to the port 8080 as localhost
    console.log("The server is connected successfully!")
})



