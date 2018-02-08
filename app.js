// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 8000;

// const server = http.createServer((req, res) => {
//     // console.log(req);
//     res.writeHead(200, { 'Content-Type': 'text/html' });    
//     var url = req.url;
    
//     if (url === '/about') {
//         res.write('<h1>about us page<h1>'); //write a response
//         res.end(); //end the response
//     } else if (url === '/contact') {
//         res.write('<h1>contact us page<h1>'); //write a response
//         res.end(); //end the response
//     } else {
//         res.write('<h1>Hello World!<h1>'); //write a response
//         res.end(); //end the response
//     }
//     //res.end("Hi I'm listennig you.");
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });



const EventEmitter = require('events');
// var util = require("util");
// var Person = function(name){
// this.name= name;
// }
class Person extends EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }

    speak(msg){
        this.emit('speak', msg);
    }
}




// util.inherits(Person, events.EventEmitter);

var person1 = new Person("person1");
var person2 = new Person("person2");
var person3 = new Person("person3");
var person4 = new Person("person4");

var people = [person1, person2, person3, person4]

people.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(person.name + 'said: ' + msg);        
    }); 
});
person1.speak("hey dude" );





// class MyStream extends EventEmitter {

//     write(data) {
//         this.emit('data', data);
//     }
// }

// const stream = new MyStream();

// stream.on('data', (data) => {
//     console.log(`Received data: "${data}"`);
// });
// stream.write('With ES6');
