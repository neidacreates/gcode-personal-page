console.log('JS file is connected');

//function for home page button

function toggleDarkMode(){
    var bodyElement = document.getElementById("main-background"); 
    var darkModeButtonElement = document.getElementById("dark-mode-btn");
    var menuBar = document.getElementById("menu-bar");
    var listPicBorders = document.getElementsByClassName("list-pics"); //returns an array
    var menuLinks = document.getElementsByClassName("menu-links"); //returns an array
    var outsideLinks = document.getElementsByClassName("outside-web-links"); //returns an array
    var plantListHeading = document.getElementById("plant-list-heading");
    var homepagePic = document.getElementById("homepage-pic");
    

    if (bodyElement.style.backgroundColor === "white"){
        console.log('we go into the if statement block and switch to dark mode');
        for (i=0;i<menuLinks.length;i++) {
            menuLinks.item(i).classList.remove("light");
        }
        //changing background color 
        bodyElement.style.backgroundColor = "rgb(42, 97, 55)";
        //changing body text color 
        bodyElement.style.color = "white";
        plantListHeading.style.color = "white";
        //changing menu bar background color and text color 
        menuBar.style.backgroundColor = "white";
        menuBar.style.color = "rgb(42, 97, 55)";
        //changing links color 

        for (i=0;i<menuLinks.length;i++) {
            menuLinks.item(i).classList.add("dark");
        }
        for (i=0;i<outsideLinks.length;i++) {
            outsideLinks.item(i).style.color = "white";
        }

        //changing color of borders around pictures 
        for (i=0;i<listPicBorders.length;i++) {
            listPicBorders.item(i).style.borderColor = "white";
        }
        homepagePic.style.borderColor ="white";
        //changing button text 
        darkModeButtonElement.innerHTML = "Switch to Light Mode";
        //changing button color
        darkModeButtonElement.style.backgroundColor = "white";
        darkModeButtonElement.style.color = "rgb(42, 97, 55)";
    } 
    else {
        console.log('we go into the else statement block and switch to light mode');
        //changing background color 
        bodyElement.style.backgroundColor = "white"; 
        //changing body text color 
        bodyElement.style.color = "rgb(42, 97, 55)";
        plantListHeading.style.color = "rgb(42, 97, 55)";
        //changing menu bar background color and text color 
        menuBar.style.backgroundColor = "rgb(42, 97, 55)";
        menuBar.style.color = "white";
        //changing links color 
        for (i=0;i<menuLinks.length;i++) {
            menuLinks.item(i).classList.add("light");
        }
        for (i=0;i<outsideLinks.length;i++) {
            outsideLinks.item(i).style.color = "rgb(42, 97, 55)";
        }
        //changing color of borders around pictures 
        for (i=0;i<listPicBorders.length;i++) {
            listPicBorders.item(i).style.borderColor = "rgb(42, 97, 55)";
        }
        homepagePic.style.borderColor ="rgb(42, 97, 55)";
        //changing button text 
        darkModeButtonElement.innerHTML = "Switch to Dark Mode";
        //changing button color
        darkModeButtonElement.style.backgroundColor = "rgb(42, 97, 55)";
        darkModeButtonElement.style.color = "white";

    }
    
    
};

//function for the about page button

function toggleDarkModeAbout(){
    var bodyElement = document.getElementById("main-background"); 
    var darkModeButtonElement = document.getElementById("dark-mode-btn");
    var menuBar = document.getElementById("menu-bar");
    var menuLinks = document.getElementsByClassName("menu-links"); //returns an array
    var mainPic = document.getElementById("about-picture");
    

    if (bodyElement.style.backgroundColor === "white"){
        console.log('we go into the if statement block and switch to dark mode');
        for (i=0;i<menuLinks.length;i++) {
            menuLinks.item(i).classList.remove("light");
        }
        //changing background color 
        bodyElement.style.backgroundColor = "rgb(42, 97, 55)";
        
        //changing body text color 
        bodyElement.style.color = "white";
        
        //changing menu bar background color and text color 
        menuBar.style.backgroundColor = "white";
        menuBar.style.color = "rgb(42, 97, 55)";
      
        //changing links color
        for (i=0;i<menuLinks.length;i++) {
            menuLinks.item(i).classList.add("dark");
        }
        
        mainPic.style.borderColor ="white";
      
        //changing button text
        darkModeButtonElement.innerHTML = "Switch to Light Mode";
      
        //changing button color
        darkModeButtonElement.style.backgroundColor = "white";
        darkModeButtonElement.style.color = "rgb(42, 97, 55)";
    } 
    else {
        console.log('we go into the else statement block and switch to light mode');
        //changing background color
        bodyElement.style.backgroundColor = "white";
      
        //changing body text color
        bodyElement.style.color = "rgb(42, 97, 55)";
        
        //changing menu bar background color and text color
        menuBar.style.backgroundColor = "rgb(42, 97, 55)";
        menuBar.style.color = "white";
      
        //changing links color
        for (i=0;i<menuLinks.length;i++) {
            menuLinks.item(i).classList.add("light");
        }
        
        //changing color of borders around pictures
        mainPic.style.borderColor ="rgb(42, 97, 55)";
      
        //changing button text
        darkModeButtonElement.innerHTML = "Switch to Dark Mode";
      
        //changing button color
        darkModeButtonElement.style.backgroundColor = "rgb(42, 97, 55)";
        darkModeButtonElement.style.color = "white";

    }
    
    
};



