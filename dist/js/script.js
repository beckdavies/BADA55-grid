
var foo = document.getElementById('js-container');

var myColours = [
    {
        'hexcode': '#BALBOA',
        'word': 'BALBOA',
        'class': 'light' 
    },
    {
        'hexcode': '#COO132',
        'word': 'COOLER',
        'class': 'light'
    },
    {
        'hexcode': '#D00D1E',
        'word': 'DOODLE',
        'class': 'light'
    },
    {
        'hexcode': '#CA22O7',
        'word': 'CARROT',
        'class': 'light' 
    },
    {
        'hexcode': '#B1AB1A',
        'word': 'BLABLA' 
    },
    {
        'hexcode': '#BABB13',
        'word': 'BABBLE' 
    },
    {
        'hexcode': '#BADA55',
        'word': 'BADASS' 
    },
    {
        'hexcode': '#BEFO2E',
        'word': 'BEFORE' 
    },
    {
        'hexcode': '#BAFFI3',
        'word': 'BAFFLE' 
    },
    {
        'hexcode': '#F2EE2E',
        'word': 'FREEZE' 
    },
    {
        'hexcode': '#F00BA2',
        'word': 'FOOBAR' 
    },
    {
        'hexcode': '#C0D',
        'word': 'COD',
        'class': 'light' 
    },
    {
        'hexcode': '#9155ED',
        'word': 'PISSED',
        'class': 'light'
    },
    {
        'hexcode': '#9E99E2',
        'word': 'PEPPER' 
    },
    {
        'hexcode': '#BEADED',
        'word': 'BEADED' 
    },
    {
        'hexcode': '#7AB1E5',
        'word': 'TABLES' 
    },
    {
        'hexcode': '#1DE',
        'word': 'IDE' 
    },
    {
        'hexcode': '#50D0FF',
        'word': 'SODOFF' 
    },
    {
        'hexcode': '#1060FF',
        'word': 'LOGOFF',
        'class': 'light' 
    },
    {
        'hexcode': '#53A',
        'word': 'SEA',
        'class': 'light'
    },
    {
        'hexcode': '#1D1075',
        'word': 'IDIOTS',
        'class': 'light' 
    },
    {
        'hexcode': '#2A9702',
        'word': 'RAPTOR',
        'class': 'light' 
    },
    {
        'hexcode': '#2AD1A1',
        'word': 'RADIAL' 
    },
    {
        'hexcode': '#5EA',
        'word': 'SEA' 
    },
    {
        'hexcode': '#4DD',
        'word': 'ADD' 
    },
    {
        'hexcode': '#2ED',
        'word': 'RED' 
    },
    {
        'hexcode': '#CA7',
        'word': 'CAT' 
    },
    {
        'hexcode': '#C71',
        'word': 'CLI',
        'class': 'light' 
    },
    {
        'hexcode': '#1A1A1A',
        'word': 'LALALA',
        'class': 'light' 
    },

]

for (var i = 0; i < foo.children.length; i++) {
    console.log(foo.children[i].tagName);

}

// get the js-container div
// loop over the array
// for each item in the array
// create a div
// set the data attribute 'data-title' to that value in word
// set the backgorund colour to the value that is in hexcode
// if the object has a class, set the class attribute to the value in the class attribute
// append that div onto js-container