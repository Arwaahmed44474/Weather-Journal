const baisUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '0259cac8d5a4d2f11f2cef8ab0398d8b&units=metric'

let zip = document.getElementById('zip');
let feelings = document.getElementById('feelings');
let generate = document.getElementById('generate');

let carryDateUI = document.getElementById('date');
let carryTempUI = document.getElementById('temp');
let carryContentUI = document.getElementById('content');

let todayDate = new Date().toJSON().slice(0,10).replace(/-/g, '/');

generate.addEventListener('click', () => {
   if (zip.value) {
      let url = `${baisUrl}${zip.value},us&appid=${apiKey}`;
      /*
       1- GET Data Web external API  by getAction

       2- if every thing is ok >> 
         .then(resolved return(try return): weatherDate) >> postAction

       3- if the data is posted in a right way >> 
         .then(resolved return: date returned from try of postAction) >> updataUI

       4- if every thing is ok >> .then() >> getAction : to see all data in my console
      */
      getAction(url)
      .then(data => {
         postAction('/dataFromClient', { 
            temperature: data.main.temp, 
            date: todayDate, 
            userResponse: feelings.value
         }).then(recentEntry => updataUI(recentEntry)).then(getAction('/allData'));
      });
   } else {
      window.alert('Please enter your zip code to continue');
   }
});
/**
 * @description get data from the server to here(client)
 * @param {string} url (specify where it will go)
 * @returns {any type(obj,arr)} (data in json which is the request from the server to the respond(get) of the client)
*/
async function getAction (url='') {
   const res = await fetch(url);
   try {
      let dataFromServer = await res.json();
      return dataFromServer;
   } catch (err) {
      console.log('Error: ', err);
   }
}
/**
 * @description : send data from the client to server via a spesifec url
 * @param {string} url  (specify where it will go)
 * @param {object} data (the data that will be sent to the server from here(client))
 * @returns {any type(obj,arr)} (data in json  which is the request from the server to the respond(post) of the client)
*/
async function postAction (url='', data={}) {
   let options = {
      method: 'POST',
      credentials: 'same-origin', 
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
   };
   const res = await fetch(url, options);

   try {
      let data = await res.json();
      // console.log(data);
      return data;
   } catch (err) {
      console.log('Error: ', err);
   }
}
/**
 * @description update our UI acording to the user input
 * @param {object} The Most Recent Entry 
*/
function updataUI(recentEntry = {}) {
   carryDateUI.innerHTML = recentEntry.date;
   carryTempUI.innerHTML = recentEntry.temperature;
   carryContentUI.innerHTML = recentEntry.userResponse;
}
/**
I know that
   - my getAction function has to have 3 parameters, not just one and two different
     functions to get API data and update the UI.
     but I think by this way I save one async function by doing getAction and bass different URLs to it
And now, Could you tell me what is the best practice.
*/

