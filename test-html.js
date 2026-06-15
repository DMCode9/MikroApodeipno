const fs = require('fs');
const html = fs.readFileSync('/Users/weril/Desktop/web apps/MikroApodeipno/index.html', 'utf8');

let divDepth = 0;
const lines = html.split('\n');
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const opens = (line.match(/<div[^>]*>/g) || []).length;
    const closes = (line.match(/<\/div>/g) || []).length;
    divDepth += opens - closes;
    if (i > 140 && i < 165) {
        console.log(`Line ${i+1}: Depth ${divDepth} | ${line}`);
    }
}
console.log(`Final depth: ${divDepth}`);
