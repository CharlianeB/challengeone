function encodeText() {
    const input = document.getElementById("inputText").value;
    const encoded = input.split('').map(char => {
        if (/[aeiouAEIOU]/.test(char)) {
            return char + 'p' + char.toLowerCase();
        } else {
            return char;
        }
    }).join('');
    document.getElementById("outputText").value = encoded;
}

function decodeText() {
    const input = document.getElementById("inputText").value;
    const decoded = input.replace(/([aeiouAEIOU])p\1/gi, '$1');
    document.getElementById("outputText").value = decoded;
}
