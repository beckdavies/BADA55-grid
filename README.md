## About

http://beckdavi.es/bada55-grid/

Combining the magic of grid layout with my favourite hexcodisms. This development environment uses browser-sync to automatically launch the browser as soon as changes in any html, css or js file is detected.

The directory is launched in a new tab Firefox Developer Edition on port 7777. Firefox Developer Edition (at the time of writing) has the best dev tools for debugging grid layout.

To change the browser or the port, look in the scripts section in packages.json and change the values for the browser and the port that you'll find in there.

## Installation

After cloning the repo, run this command from inside the repo:

    npm install

Wait for the node packages to install, then run:

    npm start

The directory listing will open in a new tab in the browser. Click on the file that you want to view (index.html). Henceforth, edit the files in the directory and browser-sync will reload index.html on save.

## Documentation

* [Browser sync docs](https://browsersync.io/docs)
* [Bada55](http://bada55.io/)
* [CSS Tricks - A complete guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)


