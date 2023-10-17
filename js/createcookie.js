// create cookies function
export function createCookies(key, value){
    document.cookie = `${key}=${value}`
    console.log(key,value)
    // console.log(document.cookie)
}


