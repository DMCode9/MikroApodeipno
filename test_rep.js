const fs = require('fs');

function toMonotonic(text) {
    let nfd = text.normalize('NFD');
    nfd = nfd.replace(/[\u0300\u0342]/g, '\u0301');
    nfd = nfd.replace(/[\u0313\u0314\u0343\u0345\u0304\u0306]/g, '');
    nfd = nfd.replace(/\u0301+/g, '\u0301');
    return nfd.normalize('NFC');
}

console.log(toMonotonic('Κύριε ἐλέησον γ’ (3)'));
console.log(toMonotonic('Κύριε ἐλέησον ιβ’ (12).'));
console.log(toMonotonic('Κύριε ἐλέησον μ’ (40).'));
console.log(toMonotonic('Ἅγιος ὁ Θεός, Ἅγιος Ἰσχυρός, Ἅγιος Ἀθάνατος ἐλέησον ἡμᾶς. (3)'));
console.log(toMonotonic('Ἁγίων Ἁγιώτατον Λόγον (ἐκ γ’) (3) δεξαμενή'));
