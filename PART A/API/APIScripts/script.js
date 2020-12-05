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
    const table = document.getElementById("RickAndMortyCharacters");
    table.style.marginTop = "100px";

    for (let i = 0; i < data.results.length; i++) {
        //#region elements
        //Row for the table
        const character = document.createElement("tr");
        //Column that contains the character image
        const characterImage = document.createElement("th");
        const characterPicture = document.createElement("img");

        //Column that contains the character information
        const characterText = document.createElement("th");
        const characterInfo = document.createElement("ul");
        const characterInfoName = document.createElement("li");
        const characterInfoStatus = document.createElement("li");
        const characterInfoSpecies = document.createElement("li");
        const characterInfoOrigin = document.createElement("li");
        const characterInfoLocation = document.createElement("li");
        //#endregion elements

        //Adds the character image
        characterPicture.setAttribute("src", data.results[i].image);

        //Adds the character name
        characterInfoName.innerHTML = "Name: " + data.results[i].name;

        //Adds the character status
        characterInfoStatus.innerHTML = "Status: " + data.results[i].status;

        //Adds the character species
        characterInfoSpecies.innerHTML = "Species: " + data.results[i].species;

        //Adds the character origin
        characterInfoOrigin.innerHTML = "Origin: " + data.results[i].origin.name;

        //Adds the character origin
        characterInfoLocation.innerHTML = "Current location: " + data.results[i].location.name;

        //Appends children to parent element characterInfo
        characterInfo.appendChild(characterInfoName);
        characterInfo.appendChild(characterInfoStatus);
        characterInfo.appendChild(characterInfoSpecies);
        characterInfo.appendChild(characterInfoOrigin);
        characterInfo.appendChild(characterInfoLocation);

        characterInfo.style.listStyleType = "none";
        characterInfo.style.margin = "0";
        characterInfo.style.padding = "0";

        //Appends characterPicture to characterImage
        characterImage.appendChild(characterPicture);

        characterImage.style.width = "300px";
        characterImage.style.height = "300px";

        //Appends characterInfo to characterText
        characterText.appendChild(characterInfo);

        characterText.style.padding = "0px";
        characterText.style.position = "relative";
        characterText.style.top = "-280px";
        characterText.style.fontSize = "30px";

        //Appends characterText and characterImage to character
        character.appendChild(characterImage);
        character.appendChild(characterText);

        //Appends character to table
        table.appendChild(character);
    }


    //Loops through the data until the next page is null
    if (data.info.next != null) {
        sendApiRequest(data.info.next);
    }
}

//Anything under this comment should be used for the first part