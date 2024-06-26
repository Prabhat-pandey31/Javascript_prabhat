const url = " https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#facts");
 const btn = document.querySelector("#btn");

 const getfacts = async()=>{
    console.log("getting data..")
    let response = await fetch(url);
    console.log(response);//json format
    let data = await response.json();
    //console.log(data[0].text);
    factpara.innerHTML = data[0].text;
};
btn.addEventListener("click", getfacts);

// HTTP verbs  => Read
// Response status code => read
// post something on the website .


/*

SOme terms      
  1. AJAX => is asynchronus js and xml.

  2 . JSON => is a js object notation .

  3. json() method => returns a second promise that resolves with the result the parsing the response
  body text as json (input is json, output is object).

  */

