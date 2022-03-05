console.log('JS file is connected');

function toggleDarkMode(){
    var bodyElement = document.getElementById("main-background"); 
    var darkModeButtonElement = document.getElementById("dark-mode-btn");
    var menuBar = document.getElementById("menu-bar");
    var menuLinks = document.getElementsByClassName("menu-links"); //returns an array
    var otherLinks = document.getElementsByClassName("other-links"); //returns an array
    var allPictures = document.getElementsByClassName("pictures"); //returns an array
    
//going from white background to green background, green text to white text
    if (bodyElement.style.backgroundColor === "white"){
        console.log('we go into the if statement block and switch to dark mode');
        //changing background color
        bodyElement.style.backgroundColor = "rgb(30,53,10)";
        //changing body text color
        bodyElement.style.color = "white";
        //changing menu bar background color and text color
        menuBar.style.backgroundColor = "white";
        menuBar.style.color = "rgb(30,53,10)";
        //changing all links color
        for (i=0;i<menuLinks.length;i++) {
            menuLinks.item(i).classList.remove("light");
            menuLinks.item(i).classList.add("dark");
        }
        for (i=0;i<otherLinks.length;i++) {
            otherLinks.item(i).classList.remove("light");
            otherLinks.item(i).classList.add("dark");
        }
        //changing color of borders around pictures
        for (i=0;i<allPictures.length;i++) {
            allPictures.item(i).style.borderColor = "white";
        }
        //changing button text
        darkModeButtonElement.innerHTML = "Switch to Light Mode";
        //changing button color
        darkModeButtonElement.style.backgroundColor = "white";
        darkModeButtonElement.style.color = "rgb(30,53,10)";
    } 
//going from green background to white background, white text to green text
    else {
        console.log('we go into the else statement block and switch to light mode');
        //changing background color 
        bodyElement.style.backgroundColor = "white"; 
        //changing body text color
        bodyElement.style.color = "rgb(30,53,10)";
        //changing menu bar background color and text color
        menuBar.style.backgroundColor = "rgb(30,53,10)";
        menuBar.style.color = "white";
        //changing links color 
        for (i=0;i<menuLinks.length;i++) {
            menuLinks.item(i).classList.remove("dark");
            menuLinks.item(i).classList.add("light");
        }
        for (i=0;i<otherLinks.length;i++) {
            otherLinks.item(i).classList.remove("dark");
            otherLinks.item(i).classList.add("light");
        }
        //changing color of borders around pictures
        for (i=0;i<allPictures.length;i++) {
            allPictures.item(i).style.borderColor = "rgb(30,53,10)";
        }
        //changing button text 
        darkModeButtonElement.innerHTML = "Switch to Dark Mode";
        //changing button color
        darkModeButtonElement.style.backgroundColor = "rgb(30,53,10)";
        darkModeButtonElement.style.color = "white";

    } 
};

