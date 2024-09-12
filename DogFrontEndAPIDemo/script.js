// user clicks button
// consume API
// send back random image to html

let img = document.getElementsByTagName("img");
img[0].setAttribute("src", "https://images.dog.ceo/breeds/boxer/n02108089_1560.jpg")
img[0].style.height = "300px";
img[0].style.width = "300px";

// accessing button element and all its methods/properties
let button = document.getElementsByTagName("button");

// assigning a listener looking for click
button[0].addEventListener("click", ()=> {
    //consume API
        // 1: what is the endpoint 
            // https://dog.ceo/api/breeds/image/random
        // 2: JSON or XML
            // JSON
        // 3: How much data
            //1 object 
        // 4: What does the data look like
            //2 items, message with potential image and success

        // HTTP Request
        // 1: Utilize the endpoint with correct method (verb)
        const baseURL = "https://dog.ceo/api/breeds"
        let route = "image/random"
        let endpoint = `${baseURL}/${route}`
        fetch(endpoint)
        .then((response) => {
            console.log(response);
            // 2: Get a response: if OK, parse the data, else error
            if(response.ok)return response.json(); // sent down to next then
            else throw Error ("Irish broke it!");
        })
        .then((data) => {
            // 3: Do something with the parsed data
            img[0].setAttribute("src", data.message)          
            console.log("Data: ", data);
        })
        .catch(error => {
            // 4: Handle the erros
            console.log(error);
        })

})