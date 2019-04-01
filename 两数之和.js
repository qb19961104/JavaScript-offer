// //给定一个整数数组和一个目标值,找出数组中和为目标值的两个数
// //1.暴力法
// function twosum(nums,target){
//     for(var i=0;i<nums.length;i++){
//         for(var j=i+1;j<nums.length;j++){
//           var temp=target-nums[i]; 
//           if(nums[j]==temp){
//                 return [nums[i],nums[j]];
//           } 
//         }   
//     }

// }
// console.log(twosum([1,2,3,4,5],5));
// //2.两遍哈希表
// function towsum1(nums,target){
//     //用来记录数组nums的长度
//     const length=nums.length;
//     //实例化一个map对象
//     let hash=new Map();
//     let index=0;
//     for(index=0;index<length;index++){
//         //设置hashmap的<key,value>,用来后边比较取值
//         hash.set(nums[index],index);
//     }
//     //遍历数组，求出另一个与其相加满足条件的值，存储在numToFind中
//     let numToFind;
//     for(index=0;index<length;index++){
//         numToFind=target-nums[index];
//         //查询hashmap中对应的值是否有对应的index，而且不能是当前数的下标
//         if(hash.has(numToFind)&&index!==hash.get(numToFind)){
//             return [index,hash.get(numToFind)];
//         }
//     }
// }
// console.log(towsum1([1,2,3,4],5));
//3.一遍哈希表
function twosum2(nums,target){
    const length=nums.length;
    let hash=new Map();
    let index=0;
    for(index=0;index<length;index++){
        let numToFind=target-nums[index];
        //查询hashmap中对应的值是否有对应的index，而且不能是当前下标
        if(hash.has(numToFind)&&index!==hash.get(numToFind)){
            return [index,hash.get[numToFind]];
        }
        //设置hashmap的<key,value>
        hash.set(nums[index],index);
    }
}
console.log(twosum2([1,2,3,4,5],5));