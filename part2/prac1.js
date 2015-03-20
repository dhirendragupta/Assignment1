var fs = require('fs');
console.log('Started reading a file');
//read the json file

fs.exists('./'+'source.json', function (exists) 
            {
                if (exists)
                {
                        fs.readFile('source.json', function(error, data) {
                        console.log('Content of file: ' + data);

                        try
                        {
                        //parse the received data into json object
                        var studentObject = JSON.parse(data);
                        console.log('First Record: ', studentObject.students[0]);

                        //sort the jsonArray
                        var sortedObj = studentObject.students.sort(function(a,b) { return  parseInt(b.score) - parseInt(a.score)  } );
                        console.log('sortedObj: '+sortedObj);

                        //heading line for the text file
                        var wholeDataString = 'ID  |  FName  |  LName  |  Score' + '\n';

                        for (var i = 0; i < sortedObj.length; i++) 
                        {
                            //concat each record to a varible
                            wholeDataString = wholeDataString + sortedObj[i].id + ' |  ' + sortedObj[i].fName + '  |  ' + sortedObj[i].lName + '  |  ' + sortedObj[i].score + '\n';

                            console.log('Students' + ': ' + sortedObj[i].id + ' |  ' + sortedObj[i].fName + '  |  ' + sortedObj[i].lName + '  |  ' + sortedObj[i].score + '\n');
                        }

                        console.log('wholeDataString: ' + '\n' + wholeDataString);
                        //writting all the data at once
                        fs.writeFile('Destination.txt', wholeDataString, function(error, data) {
                            console.log('Wrote to the file');
                        });

                    }
                    catch(e)
                    {
                        console.log('Not a valid json file');
                    }

                    });
                    console.log('finished executing');
                    

                }
                else
                {

                     console.log('source.json file does not exist');
                }
        });