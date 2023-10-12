const convertB = input => {
    const resultArray = [];
    const customerValue = input.customer;
    const contactValue = input.contact;
    const addressValue = input.address;
    for ( let i = 0; i < contactValue.length; i++ ) {
        const obj = {
            name: contactValue[i].name,
            customer: customerValue,
            address: addressValue
        };

        resultArray.push(obj);
    };
    return resultArray;
};

const input = {
    customer: "Xsurface",
    contact: [
        {name: "Max"},
        {name: "Mike"},
        {name: "Adam"}
    ],
    address: "Sukhumvit 62"
};

const result = convertB(input);
console.log(result);