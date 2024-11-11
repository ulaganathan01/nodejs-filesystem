const fs = require("fs"); // imported a file system package

function createFile(){ //created a function which will craete a new text file in the current folder and shows the current date and time
    const date = new Date();
    fs.writeFile("date-time.txt", date.toString(), function(err){
        if (err) console.log(err);
    })
}

async function getFile(){
    fs.readFile("date-time.txt", "utf-8", function(err, data){
        if(err) console.log(err);
        if(data) {
            console.log(data.toString());
            return data;
        }
    })
}

module.exports = {
    createFile, 
    getFile
} // exprted the function called createFile