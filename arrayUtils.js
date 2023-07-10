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
let print_recursev=function(array){
    let ans=[];
    let recu=function(arr){
        if(!Array.isArray(arr)) return -1;
        ans.push("[")
        arr.forEach((element,idx)=>{
            if(Array.isArray(element)){
                ans.push("[")
                if(element.length){
                    recu(element);
                }
                ans.push("]")
                if(idx<array.length-1)
                ans.push(",")
            }
            else{
                ans.push(element)
                if(idx<array.length-1)
                ans.push(",")
            }
        })
        ans.push("]")
    }
    recu(array);
    return ans.join("");
}

let print =function(array){
    console.log(JSON.stringify(array));
}