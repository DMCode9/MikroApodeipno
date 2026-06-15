const fs = require('fs');

const userText = fs.readFileSync('user_text.txt', 'utf8');
const originalMd = fs.readFileSync('chairetismoi.md', 'utf8');

// The stanzas end with either "Χαῖρε, Νύμφη Ἀνύμφευτε." or "Αλληλούϊα" (and its variants).
// Let's manually split the user text using a regex that captures the endings.
const cards = [];
let currentCardLines = [];

const lines = userText.split('\n');
for (let line of lines) {
    if (!line.trim()) continue; // skip empty lines
    currentCardLines.push(line.trim());
    
    // Check if the line is the end of a stanza
    const l = line.trim().replace(/[.,;:]/g, '');
    if (l === 'Χαῖρε Νύμφη Ἀνύμφευτε' || 
        l === 'Χαῖρε, Νύμφη Ἀνύμφευτε' ||
        l === 'Αλληλουϊα' || 
        l === 'Αλληλούϊα' || 
        l === 'Ἅλληλουϊα' || 
        l === 'Ἅλληλοϊα') {
        
        cards.push(currentCardLines.join('\n'));
        currentCardLines = [];
    }
}
if (currentCardLines.length > 0) {
    // maybe the last one doesn't have a clean ending
    cards.push(currentCardLines.join('\n'));
}

console.log(`Found ${cards.length} cards in user text.`);

// Now we parse the markdown file.
// We look for "## Κάρτα X" and "### Μετάφραση".
let mdLines = originalMd.split('\n');
let newMdLines = [];
let currentCardIndex = 0;
let inOriginalText = false;

for (let i = 0; i < mdLines.length; i++) {
    const line = mdLines[i];
    
    if (line.startsWith('## Κάρτα ')) {
        newMdLines.push(line);
        newMdLines.push('');
        newMdLines.push(cards[currentCardIndex]);
        newMdLines.push('');
        currentCardIndex++;
        inOriginalText = true;
    } else if (line.startsWith('### Μετάφραση')) {
        inOriginalText = false;
        newMdLines.push(line);
    } else {
        if (!inOriginalText) {
            newMdLines.push(line);
        }
    }
}

fs.writeFileSync('chairetismoi.md', newMdLines.join('\n'));
console.log('chairetismoi.md has been updated!');
