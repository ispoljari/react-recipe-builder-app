# The Recipe Builder App
## LINK TO THE APP:
[https://limitless-cove-25974.herokuapp.com/](https://limitless-cove-25974.herokuapp.com/)

## SUMMARY
This app is intended for anyone that needs cooking inspiration. If you have some ingredients available in the fridge and don't know what to do with them, this app is right for you. 

## DEMO VIDEO
![Demo video](demo.gif)

## APP FUNCTIONALITY:

* the user can take a picture of the available ingredients (one or multiple ingredients per picture)
* then the user waits for the app to detect the ingredients from the image 
* if some ingredients have been detected, the app will search for related recipes 
* finally, the results are displayed in the form of a image, heading and necessary ingredients
* the user can also manually enter ingredients and initiate a search (necessry if the app doesn't detect any ingredients on the image, if the detected ingredients are wrong, the list is incomplete or the user simply wants to add more stuff to the list)
* it is possible to update the list of ingredients by taking another picture (the first one has to be removed by pressing x in the top right corner)

## BUILT WITH:

**THIRD-PARTY API's**: 

1) https://clarifai.com/ : Used to facilitate the image recogintion algorithm.
2) http://www.recipepuppy.com/about/api/ : Used for retrieving recipes based on the ingredients.

**TESTING**: ENZYME (a few component unit tests)

**CLIENT SIDE**: HTML5, CSS3, REACT (ES6 JS)

**AUTOMATION**: CREATE-REACT-APP

## DESIGN PARADIGMS

* mobile-first
* RWD
* a11y (Special attention has been given to screen reader accessibility during the design)
* cross-browser compatibility

### This project was bootstrapped with Create React App.
