// Assignment 12

var fs = require('fs');
var http = require('http');
var a=10, b=5;


// 1) Write a program to create a module and develop a calculator.

console.log("Addition : "+calculator(a,b,"add"));
console.log("Subtraction : "+calculator(a,b,"subtract"));
console.log("Multiplication : "+calculator(a,b,"multiply"));
console.log("Division : "+calculator(a,b,"divide"));

function calculator(num1, num2, oper)
{
    if(oper == "add") {
        return (num1 + num2);
    }
    if(oper == "subtract") {
        return (num1 - num2);
    }
    if(oper == "multiply") {
        return (num1 * num2);
    }
    if(oper == "divide") {
        return (num1 / num2);
    }
}


// 2) Write a program read data from a file.

readFile('fileToRead.txt');

function readFile(filePath) {
    var options = {encoding: 'utf-8', flag: 'r'};
    fs.readFile(filePath, options, function (err, data) {
        if(err)
        {
            console.error(err);
        }
        else
        {
            console.log("File content : " + data);
        }
    });
}


// 3) Write a program to read data from a file and write data into another file.

readAndWriteFile('fileToRead.txt', 'fileToWrite.txt');

function readAndWriteFile(fileToRead, fileToWrite) {
    var options = {encoding: 'utf-8', flag: 'r'};
    fs.readFile(fileToRead, options, function (err, data) {
        if(err)
        {
            console.error(err);
        }
        else
        {
            options = {encoding:'utf-8', flag:'w'};
            fs.writeFile(fileToWrite, data, options, function (err) {
                if(err)
                {
                    console.error(err);
                }else
                {
                    console.log('File content saved. ');
                }
            });
        }
    });
}


// 4) Write a program to read data from a html file and display on the browser.

http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8082);


// 5) Write a program to read a JSON data and display on the browser.

http.createServer(function (req, res) {
    //Open a file on the server and return its content:
    fs.readFile('demofile2.json', function(err, data) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        return res.end();
    });
}).listen(8083);
