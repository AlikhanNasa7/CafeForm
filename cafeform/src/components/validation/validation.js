export function isEmpty(value){
    return value.trim()===''
}

export function isNumber(value){
    return !isNaN(value)
}