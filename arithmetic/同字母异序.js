function getSame(str1, str2) {
    return !str1.split('').sort().join('').replace(str2.split('').sort().join(''), '')
}

console.log(getSame('jfks', 'jfks'))