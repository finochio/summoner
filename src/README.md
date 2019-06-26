# About Project
This project is an implementation of an application that uses an open-source API to display a list of cards from Magic: The Gathering. 

The application displays the first 20 cards and automatically retrieves additional cards as the user scrolls down the page. The application is viewable on modern desktop and mobile browsers.

## Implementation Approach
I decided to implement this project using technology and tools I have never implemented personally.  The first portion of the project was reading through documentation, tutorials, and watching youtube videos on the topics such as react and react-bootstrap.  I then did a napkin sketch of of the actual requirements and high level design.  The next portion was setting up the host and dependencies which led to implementation and debugging and testing.  Lastly documentation was updated and simplified code comments.  The majority of the time spent was on research, documentation, and commenting.


## Project Dependencies

 - [npm](https://www.npmjs.com/)
 - [Yarn](https://yarnpkg.com/en/)
 - [Node.js](https://nodejs.org/en/)
 - [React](https://reactjs.org/)
 - [React Bootstrap](https://react-bootstrap.github.io/)
 - [React Router](https://reacttraining.com/react-router/)
 - [styled-components](https://www.styled-components.com/)

##  API

Use the following API (not affiliated with _Wizards of the Coast_) to retrieve a filtered list of _Magic: The Gathering_ cards. For this exercise, we want you to display cards of the `creature` type.

-   API Location: [https://api.magicthegathering.io/v1/cards](https://api.magicthegathering.io/v1/cards)
-   API Documentation:
    -   [https://docs.magicthegathering.io/](https://docs.magicthegathering.io/)
    -   [https://docs.magicthegathering.io/#api_v1cards_list](https://docs.magicthegathering.io/#api_v1cards_list)

## Development Environment
This project was developed on an [iPad Pro 12.9 2018](https://www.apple.com/shop/buy-ipad/ipad-pro) since I don’t own a personal computer and needed to work on this at the office during breaks and remote locations.

The following tools were used: 
[Coda for iOS](https://panic.com/coda-ios/) IDE integrated with [Working Copy](https://workingcopy.app/#) synced with [GitHub](https://github.com/) as a code repository.

## Demo Host

My demo host is running on my headless media server running Windows 10 Pro.  This is not the ideal production environment, but I found this suitable with my limited time and quick deployment without setting up anything external.

## Deploying and Running the Application

 1. Provision your host
 2. Install the dependencies above
 3. Clone the project repository
 4. Run ‘npm start’

## Project Dependencies

 - [npm](https://www.npmjs.com/)
 - [Yarn](https://yarnpkg.com/en/)
 - [Node.js](https://nodejs.org/en/)
 - [React](https://reactjs.org/)
 - [React Bootstrap](https://react-bootstrap.github.io/)
 - [React Router](https://reacttraining.com/react-router/)
 - [styled-components](https://www.styled-components.com/)

## Development Environment
This project was developed on an [iPad Pro 12.9 2018](https://www.apple.com/shop/buy-ipad/ipad-pro) since I don’t own a personal computer and needed to work on this at the office during breaks and remote locations.

The following tools were used: 
[Coda for iOS](https://panic.com/coda-ios/) IDE integrated with [Working Copy](https://workingcopy.app/#) synced with [GitHub](https://github.com/) as a code repository.

## Demo Host

My demo host is running on my headless media server running Windows 10 Pro.  This is not the ideal production environment, but I found this suitable with my limited time and quick deployment without setting up anything external.

## Deploying and Running the Application

 1. Provision your host
 2. Install the dependencies above
 3. Clone the project repository
 4. Run ‘npm start’

## Folder PATH listing
Below is a listing of the relevant files other than large folders created with ’npm create-react-app’ and the descriptions of changes from default app creation or dependent packages.

magic-the-gathering-cards:.
|                   
+---public
|       favicon.ico
|       index.html
|       manifest.json
|       
\---src
    |   About.js  ***description of application functionality and bugs***
    |   App.css ***CSS for default app***
    |   App.js ***default application***
    |   App.test.js
    |   Home.js ***landing page for application***  
    |   index.css
    |   index.js
    |   logo.svg
    |   mtg.png
    |   NoMatch.js. ***landing page for invalid url paths***
    |   serviceWorker.js
    |   
    +---assets ***folder to house media and app/site assets***
    |       card-back.jpg
    |       mtg.jpg8, 4 17 28 PM.png
    |       
    \---components ***folder for application components***
            Card.css ***CSS for individual cards***
            Card.js ***code for rendering individual cards***
            Cards.css ***CSS for card listing***
            Cards.js ***code for rendering card listing application***
            Jumbotron.js ***code for React-bootstrap Jumbotron***
            Layout.js 
            NavigationBar.js ***code for app/site navigation bar***
            SearchCards.js. ***code for card search functionality***
            SortCards.js ***code for sorting cards functionality***

## Completed Requirements
- [x]  Display cards that are of type “creature”.
- [x]  Initially, display the first 20 results returned by the API.
- [x] Use the API to sort the results alphabetically by the card’s name.
- [x]   Retrieve additional pages of results as-needed to fill the window, but do not load more than 50 with each request.
- [x]  Do not preload all results.
-  [x] Display the results in a “card” format, where the cards flow from left to right across the width of the screen and then down to the next row creating as many rows as necessary.
-  [x] Each card should display: image, name, artist, set name, and original type. You may also display additional fields.
-  [x] The card’s image should be displayed prominently. How and when the other data is displayed is up to you.
-  [x] Use a responsive design. The cards should reflow as-needed based on the size of the browser window. You may limit the maximum display area but may not use a fixed width.
-  [x] As the user scrolls down the page, additional cards should be loaded and appended. (This method of displaying results is often referred to as “infinite scroll.”)
-  [x] Include a page header. You may also include additional layout elements at your discretion.
-  [x] Display a loading indicator when communicating with the API.

# [TODO]
As with any time boxed project there will be [TODO]s and things that need to be done.
- [ ] Write tests!!!
- [ ] Create operational support documentation playbook(s)
- [ ] Implement APM and other metrics
- [ ] Define work via Kanban board
- [ ] Include functionality to display errors in API interaction
- [ ] Do more UI testing
- [ ] Cleanup code formatting
- [ ] Improve code comments
- [ ] Extract inline code into functions and classes
- [ ] Combine ‘search’ and ‘sorting’ functions into a single class
- [ ] Simplify loading indicator stateful interactions


## Next
Above and beyond functionality 
-  [ ] Filter cards (feel free to exceed the type restriction as long as it defaults to “creature”)
- [ ]  Display number of cards loaded
-  [ ] Group by set (and/or other fields)
-  [ ] Show related cards (e.g., cards of the same type, cards in the same set)
-  [ ] Add cards to a list or collection (e.g., build a deck)


## Bugs
    - [ ] TBD