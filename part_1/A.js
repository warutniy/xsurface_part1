const convertA = input => {
    const objInfo = {};
    for ( let i = 0; i < input.length; i++ ) {
        const nameValue = input[i].name;
        const telValue = input[i].tel;
        const codeValue = input[i].code;
        if ( !objInfo[codeValue] ) {
            const obj = {
                name: nameValue,
                tel: [telValue],
                code: codeValue
            };
            objInfo[codeValue] = obj;
        } else {
            objInfo[codeValue].tel.push(telValue);
        };
    };

    const resultArray = [];
    for ( n in objInfo ) {
        if ( objInfo[n].tel.length > 1 ) {
            resultArray.push(objInfo[n]);
        } else {
            objInfo[n].tel = objInfo[n].tel[0];
            resultArray.push(objInfo[n]);
        };
    };
    return resultArray;
};

const input = [
    { name: "Alex", tel: "0991112222", code: "xsf0001" },
    { name: "Jane", tel: "0812221234", code: "xsf0002" },
    { name: "Alex", tel: "0832214433", code: "xsf0001" },
    { name: "Alex", tel: "0991113122", code: "xsf0003" }
];

const result = convertA(input);
console.log(result);