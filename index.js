fetch('https://corona.lmao.ninja/v2/countries/')
    .then(responsive => responsive.json())
    .then(data => renderDT(data, content));

let content = document.getElementById('content');
let tableX = document.createElement('tr');
tableX.style.height = '50px';
content.appendChild(tableX);

let th1 = document.createElement('th');
th1.innerHTML = 'Quốc gia';
let th2 = document.createElement('th');
th2.innerHTML = 'Số ca nhiễm';
let th3 = document.createElement('th');
th3.innerHTML = 'Số ca nhiễm hôm nay	';
let th4 = document.createElement('th');
th4.innerHTML = 'Số ca chết	';
let th5 = document.createElement('th');
th5.innerHTML = 'Số ca chết hôm nay	';
let th6 = document.createElement('th');
th6.innerHTML = 'Số ca hồi phục	';
let th7 = document.createElement('th');
th7.innerHTML = 'Đang điều trị';
tableX.appendChild(th1);
tableX.appendChild(th2);
tableX.appendChild(th3);
tableX.appendChild(th4);
tableX.appendChild(th5);
tableX.appendChild(th6);
tableX.appendChild(th7);

let renderDT = function(data, table) {
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        let th_1 = document.createElement('td');
        th_1.innerText = data[i].country;
        th_1.style.backgroundColor = '#5dcac3a6';

        let img = document.createElement('img');
        img.src = data[i].countryInfo.flag;
        img.style.width = '40px';
        img.style.float = 'right';
        th_1.appendChild(img)
        tr.appendChild(th_1);

        let th_2 = document.createElement('td');
        th_2.innerText = data[i].cases;
        th_2.style.color = '#ff9d00';
        tr.appendChild(th_2);

        let th_3 = document.createElement('td');
        th_3.innerText = data[i].todayCases;
        tr.appendChild(th_3);

        let th_4 = document.createElement('td');
        th_4.innerText = data[i].deaths;
        th_4.style.color = '#f64e63';
        tr.appendChild(th_4);

        let th_5 = document.createElement('td');
        th_5.innerText = data[i].todayDeaths;
        tr.appendChild(th_5);

        let th_6 = document.createElement('td');
        th_6.innerText = data[i].recovered;
        th_6.style.color = '#65dd9b';
        tr.appendChild(th_6);

        let th_7 = document.createElement('td');
        th_7.innerText = data[i].active;
        tr.appendChild(th_7);
    }
}

let searchDT = function(data) {
    let table = document.getElementById('tb1')
    let input = document.getElementById('myinput');
    let btn = document.getElementsByTagName('button');
    btn[0].onclick = function() {
        for (let i = 0; i < data.length; i++) {
            if (input.value == data[i].country || input.value == data[i].countryInfo._id) {
                let tr = document.createElement('tr');
                table.appendChild(tr);

                let th_1 = document.createElement('td');
                th_1.innerText = data[i].country;
                th_1.style.backgroundColor = '#5dcac3a6';

                let img = document.createElement('img');
                img.src = data[i].countryInfo.flag;
                img.style.width = '40px';
                img.style.float = 'right';
                th_1.appendChild(img)
                tr.appendChild(th_1);

                let th_2 = document.createElement('td');
                th_2.innerText = data[i].cases;
                th_2.style.color = '#ff9d00';
                tr.appendChild(th_2);

                let th_3 = document.createElement('td');
                th_3.innerText = data[i].todayCases;
                tr.appendChild(th_3);

                let th_4 = document.createElement('td');
                th_4.innerText = data[i].deaths;
                th_4.style.color = '#f64e63';
                tr.appendChild(th_4);

                let th_5 = document.createElement('td');
                th_5.innerText = data[i].todayDeaths;
                tr.appendChild(th_5);

                let th_6 = document.createElement('td');
                th_6.innerText = data[i].recovered;
                th_6.style.color = '#65dd9b';
                tr.appendChild(th_6);

                let th_7 = document.createElement('td');
                th_7.innerText = data[i].active;
                tr.appendChild(th_7);
            }
        }
        input.value = "";
    }
}


fetch('https://corona.lmao.ninja/v2/countries/')
    .then(responsive => responsive.json())
    .then(data => searchDT(data));