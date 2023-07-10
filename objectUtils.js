export let getObjKeys=function(object){
    let ans=[];
    for (i in object){
        ans.push(i)
    }
    return ans
}
export let deep_get=function (object,path="",defualt=null){
    let path_array=path.split('.');
    let current_object=object;
    for(let i =0;i<path_array.length;i++){
        if(typeof current_object==="" ){
            return defualt;
        }
        let node=path_array[i];
        if(current_object.hasOwnProperty(node)){
            current_object=current_object[node];
        }else{
            return defualt;
        }

    }
    return current_object;
}
