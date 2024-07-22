// add whatever parameters you deem necessary
function countPairs(arr, tgt) {
    let pair = 0;
    let mySet = new Set(arr)
    for(let num of arr){
        let n = tgt - num;
        mySet.delete(num)
        if (mySet.has(n)){
            pair++
        }

    }
    console.log(pair)
    return pair
}
