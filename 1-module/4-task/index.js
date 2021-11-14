function checkSpam(str) {
    let newCase = str.toLowerCase();
    if(newCase.includes('1xbet') || newCase.includes('xxx')){
        return true;
    }
    else {
        return false;
    }
}
