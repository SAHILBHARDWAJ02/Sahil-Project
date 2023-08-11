// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open('GET', 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright');
// xhr.setRequestHeader('X-RapidAPI-Key', '09db46dbf3mshecae426c91c3b0fp16cf81jsn3cb5411583f6');
// xhr.setRequestHeader('X-RapidAPI-Host', 'dictionary-by-api-ninjas.p.rapidapi.com');

// xhr.send(data);

// // searchinput
// // searchbtn

const dictionary = (word)=>{
    // const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright';
 const options = {
     method: 'GET',
     headers: {
         'X-RapidAPI-Key': '09db46dbf3mshecae426c91c3b0fp16cf81jsn3cb5411583f6',
         'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
     }
 };
 
 
     fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
     .then(response => response.json())
     .then((response) => {
         console.log(response);
         wordheading.innerHTML = "Meaning of:-" + response.word;
         definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.","<br>3.").replace("4.","<br>4.");
         
         console.log(word, response);
         
     })
     .catch(err => console.error(err));
 }
 
 searchbtn.addEventListener("click", (e)=>{
         e.preventDefault();
         dictionary(searchinput.value)
 })              
 