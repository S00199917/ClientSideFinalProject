(function () {
    //This is run when the webpage loads
    sendApiRequest("https://rickandmortyapi.com/api/character");
}());

async function sendApiRequest(URL) {
    //Fetches the data from the url
    let response = await fetch(URL);
    //Prints the response into the console
    console.log(response);
    //Takes the data from the .json file
    let data = await response.json();
    //Prints the response into the console
    console.log(data);
    //Sends the data to the Characters() function
    Characters(data);
}

function Characters(data) {
    const container = document.getElementById("RickAndMortyCharacters");
    container.style.marginTop = "100px";
    const container2 = document.createElement("div");

    for (let index = 0; index < data.results.length; index++) {
        const characterImage = document.createElement("img");
        const characterInfo = document.createElement("ul");
        const characterInfoName = document.createElement("li");
        const characterInfoStatus = document.createElement("li");
        const characterInfoSpecies = document.createElement("li");
        const characterInfoOrigin = document.createElement("li");
        const characterInfoLocation = document.createElement("li");
        const lineBreak = document.createElement("br");

        //Prints the image
        characterImage.setAttribute("src", data.results[index].image);
        characterImage.style.minWidth = "16.25em"
        characterImage.style.display = "block";
        characterImage.style.clipPath = "circle(50% at 50% 50%)";

        //Prints the name of the character
        characterInfoName.innerHTML = "<b>" + "Name: " + "</b>" + data.results[index].name;

        //Prints the status of the character
        characterInfoStatus.innerHTML = "<b>" + "Status: " + "</b>" + data.results[index].status;

        //prints the species of the character
        characterInfoSpecies.innerHTML = "<b>" + "Species: " + "</b>" + data.results[index].species;

        //Prints the origin of the character
        characterInfoOrigin.innerHTML = "<b>" + "Origin: " + "</b>" + data.results[index].origin.name;

        //Prints the current location of the character
        characterInfoLocation.innerHTML = "<b>" + "Current location: " + "</b>" + data.results[index].location.name;

        //appends child elements to parent element characterInfo
        characterInfo.appendChild(characterInfoName);
        characterInfo.appendChild(characterInfoStatus);
        characterInfo.appendChild(characterInfoSpecies);
        characterInfo.appendChild(characterInfoOrigin);
        characterInfo.appendChild(characterInfoLocation);

        //appends child elements to parent element container2
        container2.appendChild(characterImage);
        container2.appendChild(characterInfo);
        container2.appendChild(lineBreak);

        //appends child element container2 to parent element container
        container.appendChild(container2)
    }
    //Loops through the data until the next page is null
    if (data.info.next != null) {
        sendApiRequest(data.info.next);
    }
}


