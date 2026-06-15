const fs = require('fs');

function toMonotonic(text) {
    let nfd = text.normalize('NFD');
    nfd = nfd.replace(/[\u0300\u0342]/g, '\u0301');
    nfd = nfd.replace(/[\u0313\u0314\u0343\u0345\u0304\u0306]/g, '');
    nfd = nfd.replace(/\u0301+/g, '\u0301');
    return nfd.normalize('NFC');
}

function expandRepetitions(text) {
    // 1. Κύριε ελέησον
    text = text.replace(/Κύριε ελέησον(?:\s+(?:γ’|ιβ’|μ’|γ'|ιβ'|μ'))?\s*\((3|12|40)\)\.?/gi, (match, p1) => {
        const times = parseInt(p1, 10);
        return Array(times).fill("Κύριε ελέησον.").join(" ");
    });

    // 2. Άγιος ο Θεός
    text = text.replace(/Άγιος ο Θεός, Άγιος Ισχυρός, Άγιος Αθάνατος ελέησον ημάς\.(?:\s+(?:γ’|γ'))?\s*\(3\)\.?/gi, () => {
        return Array(3).fill("Άγιος ο Θεός, Άγιος Ισχυρός, Άγιος Αθάνατος ελέησον ημάς.").join(" ");
    });

    // 3. Αγίων Αγιώτατον Λόγον
    text = text.replace(/Αγίων Αγιώτατον Λόγον(?:\s+\(εκ γ’\)|\s+\(εκ γ'\))?\s*\(3\)/gi, () => {
        return Array(3).fill("Αγίων Αγιώτατον Λόγον.").join(" ");
    });

    // Fallback: Remove any other multipliers
    text = text.replace(/(?:\(εκ γ’\)|\(εκ γ'\)|γ’|γ'|ιβ’|ιβ'|μ’|μ')?\s*\(\d+\)/g, "");

    return text;
}

const tests = [
    'Κύριε ἐλέησον γ’ (3)',
    'Κύριε ἐλέησον ιβ’ (12).',
    'Κύριε ἐλέησον μ’ (40).',
    'Ἅγιος ὁ Θεός, Ἅγιος Ἰσχυρός, Ἅγιος Ἀθάνατος ἐλέησον ἡμᾶς. (3)',
    'Ἁγίων Ἁγιώτατον Λόγον (ἐκ γ’) (3) δεξαμενή',
    'Κύριε ἐλέησον (3)',
];

tests.forEach(t => {
    let mono = toMonotonic(t);
    let expanded = expandRepetitions(mono);
    console.log("Input:", t);
    console.log("Expanded:", expanded);
    console.log("---");
});
