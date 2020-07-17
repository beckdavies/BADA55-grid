
var foo = document.getElementById('js-container');

var myColours = [
    {
        'hexcode': '#BA1B0A',
        'word': 'BALBOA',
        'class': 'light' 
    },
    {
        'hexcode': '#C00132',
        'word': 'COOLER',
        'class': 'light'
    },
    {
        'hexcode': '#D00D1E',
        'word': 'DOODLE',
        'class': 'light'
    },
    {
        'hexcode': '#CA2207',
        'word': 'CARROT',
        'class': 'light' 
    },
    {
        'hexcode': '#B1AB1A',
        'word': 'BLABLA',
        'class': 'dark' 
    },
    {
        'hexcode': '#BABB13',
        'word': 'BABBLE',
        'class': 'dark'
    },
    {
        'hexcode': '#BADA55',
        'word': 'BADASS',
        'class': 'dark'
    },
    {
        'hexcode': '#BEF02E',
        'word': 'BEFORE',
        'class': 'dark'
    },
    {
        'hexcode': '#BAFF13',
        'word': 'BAFFLE',
        'class': 'dark'
    },
    {
        'hexcode': '#F2EE2E',
        'word': 'FREEZE',
        'class': 'dark'
    },
    {
        'hexcode': '#F00BA2',
        'word': 'FOOBAR',
        'class': 'dark'
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
        'word': 'PEPPER',
        'class': 'dark'
    },
    {
        'hexcode': '#BEADED',
        'word': 'BEADED',
        'class': 'dark'
    },
    {
        'hexcode': '#7AB1E5',
        'word': 'TABLES',
        'class': 'dark'
    },
    {
        'hexcode': '#1DE',
        'word': 'IDE',
        'class': 'dark'
    },
    {
        'hexcode': '#50D0FF',
        'word': 'SODOFF',
        'class': 'dark'
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
        'word': 'RADIAL',
        'class': 'dark'
    },
    {
        'hexcode': '#5EA',
        'word': 'SEA',
        'class': 'dark'
    },
    {
        'hexcode': '#4DD',
        'word': 'ADD',
        'class': 'dark'
    },
    {
        'hexcode': '#2ED',
        'word': 'RED',
        'class': 'dark'
    },
    {
        'hexcode': '#CA7',
        'word': 'CAT',
        'class': 'dark'
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

var container = document.querySelector('#js-container');
var wordToggle = document.querySelector(`[data-jshook="toggle"]`);

for (i = 0; i < myColours.length; i++) {
    var newDiv = document.createElement("div");
    var newSpan = document.createElement("span");
    newDiv.setAttribute('data-title', myColours[i].word);
    newDiv.style.backgroundColor = myColours[i].hexcode;
    newDiv.classList.add(myColours[i].class);
    newSpan.innerHTML = myColours[i].hexcode;
    newDiv.appendChild(newSpan);
    container.appendChild(newDiv);
}

wordToggle.onclick = function(){
    wordToggle.innerHTML == 'peep' ? wordToggle.innerHTML = 'stopping peeping' : wordToggle.innerHTML = 'peep';
    var theDivs = document.querySelectorAll('#js-container > div');
    for (i = 0; i < theDivs.length; i++) {
        theDivs[i].classList.toggle('hovered');
    }
 }
