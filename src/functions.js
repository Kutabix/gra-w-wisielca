export const hash = word => {
    let result = ""
    for(let i=0; i<word.length; i++) result += '-';
    return result;
}

export const generateAlphabet = () => {
    const result = [];
    for(let i=97; i<123; i++) result.push(String.fromCharCode(i));
    return result;
}

export const indexesOf = (word, letter) => {
    const indexes = [];
    for(let i=0; i<word.length; i++) {
        if(word.charAt(i) === letter) indexes.push(i);
    }
    return indexes;
}