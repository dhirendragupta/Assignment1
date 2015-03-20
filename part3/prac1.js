var fs = require("fs");
var js2xmlparser = require("js2xmlparser");
console.log("Started reading a file");

fs.exists('./'+'source.json', function (exists) 
            {
                if (exists)
                {
                    //read the json file
                    fs.readFile("source.json", function(error, data) {
                        console.log("Content of file: " + data);
                      //parse the received data into json object

                      try
                      {
                        var studentObject = JSON.parse(data);
                      
                        //converting the object into xml
                      var xmlData = js2xmlparser("students", studentObject);
                      
                        console.log("xmlData: "+xmlData);

                        //writting xml date to a xml file
                        fs.writeFile("destination.xml", xmlData, function(error, data) {
                            console.log("Wrote to the file");
                        });

                        console.log("finished executing");

                    }
                    catch(e)
                    {
                      console.log("Not a valid json source");
                    }

                  });
                  

                }
                else
                {
                  console.log('source.json file does not exist');
                }
        });
