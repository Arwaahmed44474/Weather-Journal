# Weather Journal Project Using HTML, CSS, JS
Front End Web Development Professional Track with Udacity 

## Project discription 
The project consists of one page, on that page we take input from the user and update the UI dynamically according to the user input. 

## How do I did this?
1. I use the API to get data about the weather from OpenWeatherMap.com. 
   by using asynchronous function **(getAction)**
2. Then, I took the user feeling as input and save it as a variable.
3. After that, I sent these data to the server by async function **(postAction)** to update my endpoint data.     
4. Finally, the data was ready to be assigned to the UI elements and appear on the page
5. But I had done as I am thinking an extra step, which is another getAction to see the whole data in the server console that enters my endpoint.

## app.js File 
Functions     
* **getAction** get data from the server to here(client), by the URL passed to it.  
* **PostAction** send data from the client to server via a specific URL  
* **updataUI**  update our UI according to the user input 

## server.js File
* setup the server
* get route 
* post route


Presented by Arwa Ahmed Nor Elden  
I hope that is close enough.  
