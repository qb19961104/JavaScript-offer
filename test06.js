function BubbleSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var Temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1]= Temp;
            }
        } 
    }
    return arr;
}
var arr=[8,4,6,9,15,47,10,48];
console.log(BubbleSort(arr));
