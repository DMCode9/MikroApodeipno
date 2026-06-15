const fs = require('fs');
const html = fs.readFileSync('/Users/weril/Desktop/web apps/MikroApodeipno/index.html', 'utf8');

// Basic unclosed tag check for div
let divCount = (html.match(/<div\b/gi) || []).length;
let divCloseCount = (html.match(/<\/div>/gi) || []).length;
console.log(`DIVs: Open ${divCount}, Close ${divCloseCount}`);

let buttonCount = (html.match(/<button\b/gi) || []).length;
let buttonCloseCount = (html.match(/<\/button>/gi) || []).length;
console.log(`BUTTONs: Open ${buttonCount}, Close ${buttonCloseCount}`);

let spanCount = (html.match(/<span\b/gi) || []).length;
let spanCloseCount = (html.match(/<\/span>/gi) || []).length;
console.log(`SPANs: Open ${spanCount}, Close ${spanCloseCount}`);

let svgCount = (html.match(/<svg\b/gi) || []).length;
let svgCloseCount = (html.match(/<\/svg>/gi) || []).length;
console.log(`SVGs: Open ${svgCount}, Close ${svgCloseCount}`);
