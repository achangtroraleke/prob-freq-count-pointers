// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const messageFreq = {};
    const letterFreq = {};

    for(let el of message){
        messageFreq[el] = (messageFreq[el] + 1 || 1);
    }
    for(let el of letters){
        letterFreq[el] = (letterFreq[el] + 1 || 1);
    }
    for(let letter of message){
        if(!letterFreq[letter])return false
        if(messageFreq[letter] > letterFreq[letter])return false
    }
    return true
}
