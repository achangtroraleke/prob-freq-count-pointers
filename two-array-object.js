// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    const arr1Freq = {}
    for(let i = 0; i < arr1.length; i ++){
        arr1Freq[arr1[i]] = (arr2[i] || null)
    }
  
    return arr1Freq;
}
