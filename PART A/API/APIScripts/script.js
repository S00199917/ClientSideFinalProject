(function () {
    //This runs when the webpage loads

    sendApiRequest("https://rickandmortyapi.com/api/character");
    sendBreakingBad('https://www.breakingbadapi.com/api/characters');
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

//*This function is used for the rick and morty api
function Characters(data) {
    let table = document.getElementById("RickAndMortyCharacters");
    table.style.marginTop = "100px";

    for (let i = 0; i < data.results.length; i++) {
        //#region elements
        //Row for the table
        let character = document.createElement("tr");
        //Column that contains the character image
        let characterImage = document.createElement("th");
        let characterPicture = document.createElement("img");

        //Column that contains the character information
        let characterText = document.createElement("th");
        let characterInfo = document.createElement("ul");
        let characterInfoName = document.createElement("li");
        let characterInfoStatus = document.createElement("li");
        let characterInfoSpecies = document.createElement("li");
        let characterInfoOrigin = document.createElement("li");
        let characterInfoLocation = document.createElement("li");
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


//This function recives the data for the breaking bad api
async function sendBreakingBad(URL) {
    //Fetches the data from the url
    let response = await fetch(URL);
    //Prints the response into the console
    console.log(response);
    //Takes the data from the .json file
    let data = await response.json();
    //Prints the response into the console
    console.log(data);
    //Sends the data to the BreakingBad() function
    BreakingBad(data);
}

//This function prints the data for the breaking bad api
async function BreakingBad(data) {
    //Gets the element with an id of "body"
    let body = document.getElementById("body");
    for (let i = 0; i < data.length; i++) {
        //Creates an element of type div
        let card = document.createElement('div');
        //Creates an element of type img
        let image = document.createElement('img');
        //Creates an element of type div
        let cardBody = document.createElement('div');
        //Creates an element of type h5
        let title = document.createElement('h5');
        //Creates an element of type ul
        let list = document.createElement('ul');
        //Creates an element of type li
        let listDOB = document.createElement('li');
        //Creates an element of type li
        let listNickname = document.createElement('li');
        //Creates an element of type li
        let listStatus = document.createElement('li');

        //Sets the card elements atributes
        card.setAttribute('class', "card");
        //Styles the card element
        card.style.width = "18rem";

        //Sets the image elements attributes
        image.setAttribute('class', 'card-img-top');
        image.setAttribute('src', data[i].img);
        //Styles the image element
        image.style.height = "300px";
        image.style.width = "286px";

        //Sets the cardBody elements attributes
        cardBody.setAttribute('class', "card-body");
        //Styles the cardBody element
        cardBody.style.display = "block";
        cardBody.style.height = "140px"

        //Sets the title elements attributes
        title.setAttribute('class', 'card-title');
        //Styles the title element
        title.innerHTML = data[i].name;

        //adds the date of birth of the character to listDOB
        listDOB.innerHTML = "DOB: " + data[i].birthday;

        //adds the nickname of the character to listNickname
        listNickname.innerHTML = "Nickname: " + data[i].nickname;

        //adds the status of the character to listStatus
        listStatus.innerHTML = "Status: " + data[i].status;

        //Appends the child elements to the parent elements
        list.appendChild(listDOB);
        list.appendChild(listNickname);
        list.appendChild(listStatus);
        cardBody.appendChild(title);
        cardBody.appendChild(list);
        card.appendChild(image);
        card.appendChild(cardBody);
        card.style.display = "block";
        card.style.marginBottom = "50px";
        body.appendChild(card);
    }
}

//This function is called when the redesign button is pressed
function Redesign() {
    //this changes the source image of the element with id rmImg 
    document.getElementById("rmImg").setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/3/32/Rick_and_Morty_opening_credits.jpeg");
    //this changes the text in the element with id rmHeading
    document.getElementById("rmHeading").innerHTML = "Rick and Morty";
    //this changes the text in the element with id rmPara
    document.getElementById("rmPara").innerHTML = "Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime Adult Swim programming block. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.";

    //This changes the source image of the element with id bbImg
    document.getElementById("bbImg").setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png");
    //This changes the text in the element with id bbHeading
    document.getElementById("bbHeading").innerHTML = "Breaking Bad";
    //This changes the text in the element with id bbPara
    document.getElementById("bbPara").innerHTML = "Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan. The show aired on AMC from January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62 episodes. It was set and filmed in Albuquerque, New Mexico, and tells the story of Walter White (Bryan Cranston), an underpaid and dispirited high school chemistry teacher who is struggling with a recent diagnosis of stage-three lung cancer. White turns to a life of crime, partnering with his former student Jesse Pinkman (Aaron Paul), by producing and distributing crystallized methamphetamine to secure his family's financial future before he dies, while navigating the dangers of the criminal underworld. The title is a Southern colloquialism meaning \"to turn to a life of crime\".[8] Gilligan characterized the series as showing Walter's transformation from a soft-spoken Mr. Chips into Scarface.";

    //Removes the element with id footer
    document.getElementById("footer").remove();
    //Removes the element with id four
    document.getElementById("four").remove();
    //Removes the element with id three
    document.getElementById("three").remove();


    //creates a variable containing an element with id PartAAdding
    let parent = document.getElementById("PartAAdding");

    //Creates an element of type p
    let myPara1 = document.createElement("p");
    //Adds text to the myPara1 element
    myPara1.innerHTML += "The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington.[3] The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters travelling to other planets and dimensions through portals and Rick's flying car.Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary conventions such as school, marriage, love, and family. He frequently goes on adventures with his 14-year-old grandson, Morty, a kind-hearted but easily distressed boy, whose naïve but grounded moral compass plays counterpoint to Rick's Machiavellian ego. Morty's 17-year-old sister, Summer, is a more conventional teenager who worries about improving her status among her peers and sometimes follows Rick and Morty on their adventures. The kids' mother, Beth, is a generally level-headed person and assertive force in the household, though self-conscious about her professional role as a horse surgeon. She is dissatisfied with her marriage to Jerry, a simple-minded and insecure person, who disapproves of Rick's influence over his family. Different versions of the characters inhabit other dimensions throughout the multiverse and their personal characteristics can vary from one reality to another. The show's original Rick identifies himself as \"Rick Sanchez of Earth Dimension C-137\", in reference to his original universe, but this does not necessarily apply to every other member of the Smith household. For instance, in the first-season episode \"Rick Potion #9\", after turning the entire world population into monsters, Rick and Morty move to a different dimension, leaving Summer, Beth and Jerry behind.";

    //Appends the child element to the parent element
    parent.appendChild(myPara1);

    //Creates an element of type img
    let img1 = document.createElement("img")
    //Sets the elements image source
    img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/b/b0/Rick_and_Morty_characters.jpg");

    //Appends the child element to the parent element
    parent.appendChild(img1);

    //Creates an element of type p
    let myPara2 = document.createElement("p")
    //Adds text to the element myPara2
    myPara2.innerHTML += "Rick and Morty was created by Justin Roiland and Dan Harmon. The duo first met at Channel 101, a non-profit monthly short film festival in Los Angeles co-founded by Harmon.[24] At Channel 101, participants submit a short film in the format of a pilot, and a live audience decides which pilots continue as a series. Roiland, then a producer on reality programming, began submitting content to the festival a year after its launch, in 2004. His pilots typically consisted of shock value—\"sick and twisted\" elements that received a confused reaction from the audience.[24] Nevertheless, Harmon took a liking to his humor and the two began collaborating. In 2006, Roiland was fired from working on a television series he regarded as intensely creatively stifling, and funneled his creative energies into creating a webisode for Channel 101. The result was The Real Animated Adventures of Doc and Mharti, an animated short starring parodies of Doc Brown and Marty McFly, characters from the Back to the Future film trilogy.[25] In the short, which Harmon would dub \"a bastardization, a pornographic vandalization\", Doc Smith urges Mharti that the solution to all of his problems is to give him oral sex.[26] The audience reacted to it wildly, and Roiland began creating more shorts involving the characters, which soon evolved beyond his original intentions and their obvious origin within the film from which it was culled.[26][27] Harmon would later create and produce Community, an NBC sitcom, while Roiland would work primarily in voice acting for Disney's Fish Hooks and Cartoon Network's Adventure Time.";

    //appends the child element to the parent element
    parent.appendChild(myPara2);

    //creates an element of type img
    let img2 = document.createElement("img")
    //sets the elements image source
    img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/b9/Dan_Harmon_by_Gage_Skidmore_2.jpg");
    //styles the element
    img2.style.height = "505.9px";

    //appends the child element to the parent element
    parent.appendChild(img2);

    //Creates an element of type img
    let img3 = document.createElement("img")
    //sets the elements image source
    img3.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Roiland%2C_XOXO_2015_%28cropped%29.jpg");
    //Styles the element
    img3.style.width = "400px";

    //appends the child element to the parent element
    parent.appendChild(img3);

    //creates an element of type p
    let myPara3 = document.createElement("p");
    //adds text to the element
    myPara3.innerHTML = "Bryan Cranston as Walter White – a chemistry teacher who, shortly after his 50th birthday, is diagnosed with Stage III lung cancer and turns to making meth to secure his family's finances. As his shady business progresses, Walter gains a notorious reputation under the name of \"Heisenberg\". Cranston stated that, though he enjoyed doing comedy, he decided he... should really focus on doing something else. But I think any good drama worth its weight always has a sprinkling of comedy in it, because you can ease the tension to an audience when it's necessary, and then build it back up again. Walt White has no clue he's occasionally funny, but as an actor, I recognize when there are comedic moments and opportunities. Anna Gunn as Skyler White – Walter's wife who was pregnant with their second child before his diagnosis and who becomes increasingly suspicious of her husband after he begins behaving in unfamiliar ways. Gunn sees Skyler as \"grounded, tough, smart and driven\". Gunn sees Skyler's stalled writing career as her biggest dream, saying, \"I think she really deep down yearns to be an artist and to be creative and productive\". Aaron Paul as Jesse Pinkman – Walter's cooking partner and former student. Paul sees Jesse as a funny kid. \"He\'s just this lost soul – I don\'t think he\'s a bad kid, he just got mixed in the wrong crowd.\" Paul elaborated on the character\'s background, saying, \"He doesn\'t come from an abusive, alcoholic background. But maybe he just didn't relate to his father, maybe his father was too strict and too proper for Jesse.\" Paul compared the character\'s relationship with Walt to The Odd Couple. Dean Norris as Hank Schrader – Marie's husband, Walter and Skyler's brother-in-law and a DEA agent. At the beginning of the series, Hank was intended to be the \"comic relief\". Norris, who has played several policemen before in film and television, stated. Having played so many cops, I've talked with a lot of technical advisers, so I've been able to pick up a lot. Coincidentally, one of my best friends growing up is a cop in Chicago, and one of my other best friends out in LA is a sheriff. So I get to see all the components of that culture. Betsy Brandt as Marie Schrader – Skyler's sister and Hank's kleptomaniac wife. Brandt described Marie as \"an unpleasant bitch\", but also stated there was more to her than that. \"I think we're seeing more of it now that she would be there for her family. But it's all about her\". RJ Mitte as Walter White, Jr. – Walter and Skyler's son, who has cerebral palsy. He begins lashing out after Walter's cancer announcement. Like Walter Jr., Mitte has cerebral palsy, although his is a milder form. Mitte stated he had to regress from his therapy to portray the character, staying up late into the night to slur his speech and learning to walk on crutches so his walking would not look fake. Bob Odenkirk as Saul Goodman (recurring season 2, main cast season 3–5) – a crooked strip mall lawyer who represents Walt and Jesse. Odenkirk drew inspiration for Goodman from film producer Robert Evans. I thought about Robert Evans because I've listened to The Kid Stays in the Picture on CD. He's constantly switching up his cadence and his delivery. He emphasizes interesting words. He has loads of attitude in almost every line that he says. So when I rehearse the scenes alone I do my impersonation of Robert Evans to find those moments and turns. Then I go out and I do Saul. Giancarlo Esposito as Gustavo \"Gus\" Fring (recurring season 2, main cast season 3–4) – a Chilean high-level drug distributor who has a cover as an owner of the fast-food chain Los Pollos Hermanos. Esposito stated that for the third season, he incorporated his yoga training in his performance. Gus is the coolest cucumber that ever walked the Earth. I think about Eddie Olmos way back in Miami Vice. He was like dead – he was hardly breathing. I thought, how is this guy just standing in this fire and doing nothing? Gus has totally allowed me that level of flexibility and relaxation – not because he has ultimate power and he knows he can take someone's life. He's just confident. Jonathan Banks as Mike Ehrmantraut (guest star season 2, main cast season 3–5: part 1) – works for Gus as an all-purpose cleaner and hitman, and also works for Saul as a private investigator. The character of Mike has been compared to Harvey Keitel's Winston Wolf character in Pulp Fiction, which Banks says he is not trying to emulate: \"I immediately tried to put it out of my mind, quite honestly. His cleaner ain't my cleaner. But throughout this world, you would suspect there had been a great many cleaners, whether government-run or individual contractors.\" Laura Fraser as Lydia Rodarte-Quayle (recurring season 5: part 1, main cast season 5: part 2) – a high-ranking employee of Madrigal Electromotive and a former associate of Gus Fring. She reluctantly begins supplying Walt and Jesse with methylamine and helps Walt expand his operation overseas. Jesse Plemons as Todd Alquist (recurring season 5: part 1, main cast season 5: part 2) – an employee of Vamonos Pest Control who becomes an associate of Walt and Jesse."

    //append the child element to the parent element
    parent.appendChild(myPara3);

    //creates an element of type img
    let img4 = document.createElement("img");
    //sets the image source
    img4.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/8/89/PaleyFest_2010_-_Breaking_Bad.jpg")
    //styles the element
    img4.style.width = "500px";

    //appends the child element to the parent element
    parent.appendChild(img4);

    //creates an element of type p
    let myPara4 = document.createElement("p");
    //adds text to the element
    myPara4.innerHTML = "A motif within the second season is the image of a damaged teddy bear and its missing eye. The teddy bear first appears at the end of the music video \"Fallacies\" for Jesse's band \"TwaüghtHammër\", which was released as a webisode in February 2009 leading to the second season.[88] The teddy bear can also be spotted on the mural on Jane's bedroom wall during the final episode of the second season, further connecting the crash to Jane. It is seen in flashforwards during four episodes, the titles of which, when put together in order, form the sentence \"Seven Thirty-Seven down over ABQ\". The flashforwards are shot in black and white, with the sole exception of the pink teddy bear, which is an homage to the film Schindler's List, where the color red is used to distinguish the coat of a very young girl. At the end of the season, Walter indirectly helps cause the midair collision of two airplanes; the pink teddy bear is then revealed to have fallen out of one of the planes and into the Whites' swimming pool. Vince Gilligan called the plane accident an attempt to visualize \"all the terrible grief that Walt has wrought upon his loved ones\" and \"the judgment of God\". In the first episode of the third season, Walt finds the teddy bear's missing eye in the pool skimmer. Television critic Myles McNutt has called it \"a symbol of the damage [Walter] feels responsible for\", and The A.V. Club commented that \"the pink teddy bear continues to accuse.\" Fans and critics have compared the appearance of the teddy bear's face to an image of Gus Fring's face in the fourth-season finale. The teddy bear prop was auctioned off, among other memorabilia, on September 29, 2013, the air date of the show finale."

    //appeends the child element to the parent element
    parent.appendChild(myPara4);

    //creates an element of type img
    let img5 = document.createElement("img");
    //sets the image source 
    img5.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/b/bc/Pink_Teddy_Bear_from_%27Breaking_Bad%27.jpg")

    //appends the child element to the parent element
    parent.appendChild(img5);

    //creates and element of type img
    let img6 = document.createElement("img");
    //sets the element source image
    img6.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/b5/The_cast_and_crew_of_Breaking_Bad_at_the_68th_Annual_Peabody_Awards.jpg");
    //style the element
    img6.style.height = "400px"

    //appends the child element to the parent element
    parent.appendChild(img6);
}