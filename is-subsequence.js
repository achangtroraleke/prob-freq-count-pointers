// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0
    while(i < str2.length){
        if(str1[j] === str2[i]){
            j++;
        }
        i++;
    }
    if(j===str1.length)return true;
    else{
        return false
    }
}