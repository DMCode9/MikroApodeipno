const fs = require('fs');
const css = fs.readFileSync('/Users/weril/Desktop/web apps/MikroApodeipno/styles.css', 'utf8');
const match = css.match(/\.auto-scroll-fab\s*{[^}]*}/);
if (match) {
    console.log("FOUND CSS:");
    console.log(match[0]);
} else {
    console.log("NOT FOUND!");
}
