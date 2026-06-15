const fs = require('fs');

function toMonotonic(text) {
    let nfd = text.normalize('NFD');
    // Grave and circumflex -> acute
    nfd = nfd.replace(/[\u0300\u0342]/g, '\u0301');
    // Remove breathings (0313, 0314), koronis (0343), iota subscript (0345), macron (0304), breve (0306)
    nfd = nfd.replace(/[\u0313\u0314\u0343\u0345\u0304\u0306]/g, '');
    // Clean up multiple acutes if any got doubled
    nfd = nfd.replace(/\u0301+/g, '\u0301');
    return nfd.normalize('NFC');
}

const sample = "Τῇ ὑπερμάχῳ στρατηγῷ τὰ νικητήρια, ὡς λυτρωθεῖσα τῶν δεινῶν εὐχαριστήρια, ἀναγράφω σοι ἡ Πόλις σου Θεοτόκε. Ὢ Πανύμνητε Μῆτερ.";
console.log("Original: ", sample);
console.log("Monotonic: ", toMonotonic(sample));
