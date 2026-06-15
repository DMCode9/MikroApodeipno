const fs = require('fs');
const css = fs.readFileSync('/Users/weril/Desktop/web apps/MikroApodeipno/styles.css', 'utf8');
let braces = 0;
let inMediaQuery = false;
let lines = css.split('\n');
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('@media')) inMediaQuery = true;
    braces += (line.match(/\{/g) || []).length;
    braces -= (line.match(/\}/g) || []).length;
    if (braces < 0) console.log(`Negative braces at line ${i+1}`);
}
console.log(`Final braces: ${braces}`);
