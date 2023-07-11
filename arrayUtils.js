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
    ans.push("[")
    let recu=function(arr){
        // console.log(ans)
        if(!Array.isArray(arr)) return -1;
        arr.forEach((element,idx)=>{
            if(Array.isArray(element)){
                
                if(element.length>=1){
                    ans.push("[")
                    recu(element);
                    ans.push("]")
                }
                if(idx<arr.length-1)
                ans.push(",")
            }
            else{
                ans.push(element)
                if(idx<arr.length-1)
                ans.push(",")
            }
        })
    }
    recu(array);
    ans.push("]")
    return ans.join("");
}
let print =function(array){
    return (JSON.stringify(array));
}
let edit=function (){
    console.log("edit from remote");

}
export {print,print_recursev,flatten,deep_flatten}
