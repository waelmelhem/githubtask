let deep_flatten =function(array){
    if(!array) return -1;
    let ans=[];
    let recu=function(arr){
        arr.forEach(element=>{
            if(Array.isArray(element))recu(element);
            else{
                ans.push(element)
            }
        })
    }
    recu(array);
    return ans;
}
let flatten =function(array){
    return deep_flatten(array);
}