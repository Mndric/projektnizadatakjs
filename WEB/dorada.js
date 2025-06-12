
let name = localStorage.getItem('name');
let mail = localStorage.getItem('mail');
let placanje = localStorage.getItem('placanje');
let checked = JSON.parse(localStorage.getItem('checked'));
let radio = localStorage.getItem('radio');

console.log(`Name: ${name} - Mail: ${mail} - Placanje: ${placanje}`);
console.log("Checked:", checked);
console.log(`Radio: ${radio}`);

let par = document.getElementById('p_data');
let nametxt = document.createTextNode(`Name: ${name}`);
let mailtxt = document.createTextNode(`Mail: ${mail}`);
let placanjetxt = document.createTextNode(`Plaćanje: ${placanje}`);
let radiotxt = document.createTextNode(`Tip časopisa: ${radio}`);

par.appendChild(nametxt);
par.appendChild(document.createElement('br'));
par.appendChild(mailtxt);
par.appendChild(document.createElement('br'));
par.appendChild(placanjetxt);
par.appendChild(document.createElement('br'));
par.appendChild(radiotxt);
par.appendChild(document.createElement('br'));
console.log(`checked.length: ${checked.length}`);
if (Array.isArray(checked) && checked.length > 0) {
    let naslov = document.createTextNode("Odabrane vrste časopisa:");
    par.appendChild(naslov);
    par.appendChild(document.createElement('br'));

    let ul = document.createElement('ul');
    for (let value of checked) {
        let li = document.createElement('li');
        li.textContent = value;
        ul.appendChild(li);
    }
    par.appendChild(ul);
} else {
    let txt = document.createTextNode("Niste odabrali nijednu vrstu časopisa.");
    par.appendChild(txt);
}

function changeCSS() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'white' ? '#f4f4f4' : 'white';
    document.body.style.fontFamily = document.body.style.fontFamily === 'Courier New' ? '"Times New Roman"' : 'Courier New';
    document.body.style.fontSize = document.body.style.fontSize === '18px' ? '16px' : '18px';
}
