function simpleClone(obj){
    var result = {};
    for(var i in obj){
        result[i] = obj[i]
    }
    return result
}

