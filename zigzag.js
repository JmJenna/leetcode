function zigzagConvert(s, numRows){
    // if string don't zigzag, return original string
    if(numRows === 1 || s.length < numRows) return s;

    let arr = [];
    let converted = "";
    let count = 0;
    let reverse = false;

    for(let i=0; i<numRows; i++) arr[i] = [];
    for(let i=0; i<s.length; i++){
        arr[count].push(s[i]);
        reverse ? count -- : count ++;
        if(count === numRows -1 || count === 0) reverse = !reverse;
    }

    return arr.reduce((converted, cur) => converted + cur.join(''), '');
    }
