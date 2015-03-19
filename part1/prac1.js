var fs = require("fs");
console.log("Started reading a file");
//read the json file
fs.readFile("source.json", function(error, data) {
    console.log("Content of file: " + data);
	//parse the received data into json object
    var studentObject = JSON.parse(data);
    console.log("First Record: ", studentObject.students[0]);

	//heading line for the text file
    var wholeDataString = "ID  |  FName  |  LName  |  Score" + "\n";

    for (var i = 0; i < studentObject.students.length; i++) 
    {
        //concat each record to a varible
      	wholeDataString = wholeDataString + studentObject.students[i].id + " |  " + studentObject.students[i].fName + "  |  " + studentObject.students[i].lName + "  |  " + studentObject.students[i].score + "\n";

        console.log("Students" + ": " + studentObject.students[i].id + " |  " + studentObject.students[i].fName + "  |  " + studentObject.students[i].lName + "  |  " + studentObject.students[i].score + "\n");
    }

    console.log("wholeDataString: " + "\n" + wholeDataString);
	//writting all the data at once
    fs.writeFile("Destination.txt", wholeDataString, function(error, data) {
        console.log("Wrote to the file");
    });

});
console.log("finished executing");
