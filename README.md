# Progressive-Web-Applications-Challenge-Text-Editor

Module 19 Challenge:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Table of Contents

- [Description](#description)
- [Features](#features)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Deployment](#deployment)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Preview / Screenshot / Walkthrough Video](#preview--screenshot--walkthrough-video)
- [Contact](#contact)
- [References](#references)
- [License](#license)

## Description

This is a Progressive Web Application (PWA) that functions as a text editor. It allows users to create notes or code snippets with or without an internet connection and saves the content locally using IndexedDB. The application is also installable on the desktop.

## Features

- Create and edit text notes
- Save notes automatically using IndexedDB
- Offline functionality
- Installable as a PWA
- Service worker for caching static assets
- Webpack for bundling JavaScript files
- Babel for using next-gen JavaScript

## User Story

AS A developer,
I WANT to create notes or code snippets with or without an internet connection,
SO THAT I can reliably retrieve them for later use.

## Acceptance Criteria

- WHEN I open my application in my editor, THEN I should see a client-server folder structure.
- WHEN I run `npm run start` from the root directory, THEN I find that my application should start up the backend and serve the client.
- WHEN I run the text editor application from my terminal, THEN I find that my JavaScript files have been bundled using webpack.
- WHEN I run my webpack plugins, THEN I find that I have a generated HTML file, service worker, and a manifest file.
- WHEN I use next-gen JavaScript in my application, THEN I find that the text editor still functions in the browser without errors.
- WHEN I open the text editor, THEN I find that IndexedDB has immediately created a database storage.
- WHEN I enter content and subsequently click off of the DOM window, THEN I find that the content in the text editor has been saved with IndexedDB.
- WHEN I reopen the text editor after closing it, THEN I find that the content in the text editor has been retrieved from IndexedDB.
- WHEN I click on the Install button, THEN I download my web application as an icon on my desktop.
- WHEN I load my web application, THEN I should have a registered service worker using Workbox.
- WHEN I register a service worker, THEN I should have my static assets pre-cached upon loading along with subsequent pages and static assets.
- WHEN I deploy to Render, THEN I should have proper build scripts for a webpack application.

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:ajfizzle/Progressive-Web-Applications-Challenge-Text-Editor.git
   cd client directory
   ```
2. Install dependencies:

   ```bash
   npm install
   npm install style-loader css-loader --save-dev
   npm install --save-dev html-webpack-plugin webpack-pwa-manifest workbox-webpack-plugin
   npm install --save-dev style-loader css-loader babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-object-rest-spread @babel/transform-runtime

   ```

3. Start the application:
   ```bash
   npm run dev
   ```

## Deployment

This application will be deployed on Render. You can visit the live application [here](https://texteditor-pwa-8bd1badc9170.herokuapp.com/). (later date)

## Usage

- Open the application in your browser.
- Type your notes or code snippets in the text editor.
- The content is saved automatically when you click off the window or lose focus.
- You can install the application by clicking the Install button.
- Access your notes even when offline.

## Technologies Used

- IndexedDB
- Webpack
- Babel
- Workbox
- idb package
- HTML
- CSS
- JavaScript

## Preview / Screenshot / Walkthrough Video

<video controls src="Progressive-Web-Applications-Challenge-Text-Editor.mp4" title="Title"></video>

## Contact

For more projects and information about the developer, please visit:

- https://ajfizzle.github.io/Progressive-Web-Applications-Challenge-Text-Editor
- https://github.com/ajfizzle/Progressive-Web-Applications-Challenge-Text-Editor
- https://pwatexteditor.netlify.app/

## References:

- UT Austin Bootcamp - UTA-VIRT-FSF-PT-02-2024-U-LOLC/28-Stu-Mini-Project
- [Node-JS/NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Npm-Init](https://docs.npmjs.com/cli/v10/commands/npm-init)
- [idb](https://www.npmjs.com/package/idb)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Workbox](https://developers.google.com/web/tools/workbox)

## License

This project is licensed under the MIT License - see the [MIT](LICENSE) file for details.
