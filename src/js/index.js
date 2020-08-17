import '../scss/main.scss';

// uncomment the lines below to enable PWA
import { registerSW } from './pwa.js';
registerSW();

/* place your code below */

const counter = document.querySelector('.hydrapp__counter--js');
const addButton = document.querySelector('.hydraap__add-button--js');
const removeButton = document.querySelector('.hydrapap__remove-button--js');

const minimumGlassNumber = 0;
let currentGlassCounter = 0;

const key = new Date().toISOString().slice(0, 10);
const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
    currentGlassCounter = localStorageValue;
} else {
    localStorage.setItem(key, 0);
}

counter.innerHTML = currentGlassCounter;

addButton.addEventListener('click', e => {
    currentGlassCounter++;
    counter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
})

removeButton.addEventListener('click', e => {
    if (currentGlassCounter > minimumGlassNumber) {
        currentGlassCounter--;
    }
    counter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
})