let obj = {
    name: 'Martin',
    pName: 'Aleksiev',
    job: 'DEV',
    title: [{
        isKing: true,
        isQueen: false
    }],
}
let learn = arg =>{
    let output = '';
    Object.entries(arg).forEach(([key,value]) => {
        output += `<ul>
        <li>${key} : ${value}</li>
        </ul>`
        document.getElementById('demo').innerHTML = output;
    });
}
learn(obj);