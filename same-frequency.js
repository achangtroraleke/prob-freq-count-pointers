// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let num1String = String(num1)
    let num2String = String(num2)
    const num1Freq = {};
    const num2Freq = {};
    if(num1String.length !== num2String.length) return false
    for(let num of num1String){
        num1Freq[num] = (num1Freq[num] + 1 || 1)
    }
    for(let num of num2String){
        num2Freq[num] = (num2Freq[num] + 1 || 1)
    }
    for(let num of num1String){
        if(num1Freq[num] !== num2Freq[num])return false
    }
    return true;
}
