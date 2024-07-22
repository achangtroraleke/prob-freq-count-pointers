// add whatever parameters you deem necessary
function averagePair(arr, tgt) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right]
        let avg = sum/2.0;


        if(avg === tgt){
            
            return true;
        }else if(sum < (tgt*2)){
            left++;
        }else if(sum > (tgt*2)){
            right--;
        }
    }
    return false
}
