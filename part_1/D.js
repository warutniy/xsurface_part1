const convertC = input => {
    const obj = {};
    for ( let i = 0; i < input.length; i++ ) {
        const nameValue = input[i].name;
        const ageValue = input[i].age;
        if ( parseInt(ageValue, 10) <= 30 && parseInt(ageValue, 10) % 3 === 0 ) {
            obj[ageValue] = nameValue;
        };
    };

    const resultArray = [];
    for ( n in obj ) {
        resultArray.push(obj[n]);
    };

    return resultArray;
};

const input = [
    { name: "A", age: "30" },
    { name: "B", age: "9" },
    { name: "C", age: "20" },
    { name: "D", age: "18" },
    { name: "E", age: "11" },
    { name: "F", age: "60" },
    { name: "G", age: "27" },
    { name: "H", age: "90" },
    { name: "I", age: "21" },
    { name: "J", age: "12" }
];

const nameInput = input.map((item) => item.name);
const result = convertC(input);

const list = document.querySelector('#reading-list ul');

const addList = value => {
    const li = document.createElement('li');
    const firstSpan = document.createElement('span');
    const lastSpan = document.createElement('span');

    firstSpan.innerHTML = `This is <ins>${value}</ins>, `;

    if ( result.includes(value) ) {
        firstSpan.style.color = '#38761D';
        lastSpan.innerHTML = 'It correctly outputs from question C.';
    } else {
        firstSpan.style.color = 'red';
    };

    firstSpan.className = 'first-span';
    lastSpan.className = 'last-span';

    li.appendChild(firstSpan);
    li.appendChild(lastSpan);
    list.appendChild(li);
};

nameInput.map((value) => addList(value));