async function sendApiRequest(URL) {
    let results = await fetch(URL);
    console.log(results);
    let data = await results.json();
    return data;
}

async function AWayOut(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function AmongUs(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function AnimalCrossing(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function BeatSaber(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function BorderLands(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function CrashBandicoot(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function CrusaderKings(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function DeathStranding(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function Detroit(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function FallGuys(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function Genshin(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);
    //Styles the image
    image.style.width = "50%";
    image.style.height = "auto"


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function LuigisMansion(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function SpiderMan(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function MDungeons(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function Pokemon(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function Remothered(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function Spelunky2(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function MarioMaker2(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function TheLastOfUs2(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

async function LegendOfZelda(URL) {
    //Removes the element with id buttons
    document.getElementById("buttons").remove();

    //Sends an api request
    let data = await sendApiRequest(URL);

    //Cretes an element of h1 called title
    let title = document.createElement("h1");
    //Adds the games title
    title.innerHTML = data.title;

    //Creates an element of p called genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre: ";
    for (let i = 0; i < data.genre.length; i++) {
        //Adds the games genres
        genre.innerHTML += data.genre[i] + " ";
    }

    //Creates an element of p called dev
    let dev = document.createElement("p");
    dev.innerHTML = "Developer: "
    for (let i = 0; i < data.developer.length; i++) {
        //Adds the games developers
        dev.innerHTML += data.developer[i] + " ";
    }

    //Creates an element of p called publisher
    let publisher = document.createElement("p");
    publisher.innerHTML = "Publisher: "
    for (let i = 0; i < data.publisher.length; i++) {
        //Adds the games publishers
        publisher.innerHTML += data.publisher[i] + " ";
    }

    //Creates an element of p called engine
    let engine = document.createElement("p");
    //Adds the games engine
    engine.innerHTML = "Engine: " + data.engine;

    //Creates an element of p called platform
    let platform = document.createElement("p");
    platform.innerHTML = "Platform: "
    for (let i = 0; i < data.platform.length; i++) {
        //Adds the games platforms
        platform.innerHTML += data.platform[i] + " ";
    }

    //Creates an element of p called releaseDate
    let releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release Date: ";
    for (let i = 0; i < data.releaseDate.length; i++) {
        //Adds the game release date 
        releaseDate.innerHTML += data.releaseDate[i] + " ";
    }

    //Creates an element of p called image
    let image = document.createElement("img");
    //Adds the game's image
    image.setAttribute("src", data.url);


    //Sends all the elements to the appendChildren() function
    appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate)
}

//This function appends all the child elements to, and creates, the parent element
function appendChildren(title, image, genre, dev, publisher, engine, platform, releaseDate) {
    let body = document.getElementById("body");
    body.appendChild(title);
    body.appendChild(image);
    body.appendChild(genre);
    body.appendChild(dev);
    body.appendChild(publisher);
    body.appendChild(engine);
    body.appendChild(platform);
    body.appendChild(releaseDate);
}