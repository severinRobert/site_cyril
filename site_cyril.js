/**
 * @author : Séverin Robert
 * @time : 02/03/2021
 */

"use strict";
document.addEventListener('DOMContentLoaded',createTable);

let tabKeys = {};
let fName = true;
let fBonus = true;
let fSpins = true;
let fWager = true;
let fBet = true;
let fCode = true;

function createTable(){
    createThead();
    createTbody();
}
function createThead() {
    let html ="";
    tabKeys = Object.keys(casinos[1]);
    tabKeys.pop();
    tabKeys[1] = "Bonus jusqu\' X€"
    let header = "<tr id='headerTable'>";
    for(let i of tabKeys) {
        header += `<th id="${i}" scope="col" onclick='tableSort("${i}");'>${i}</th>`;
    }
    header += "</tr>";
    document.getElementById("thead").innerHTML = header;
}

function createTbody() {
    let body = "";
    for(let i of casinos) {
        body += `<tr onclick="window.location='${i["Lien du casino"]}'">
                                <td>${i[tabKeys[0]]}</td>
                                <td>${i[tabKeys[1]]}</td>
                                <td>${i[tabKeys[2]]}</td>
                                <td>${i[tabKeys[3]]}</td>
                                <td>${i[tabKeys[4]]}</td>
                                <td>${i[tabKeys[5]]}</td>
                            </tr>`;
    }
    document.getElementById("tbody").innerHTML = body;

    let dictstring = JSON.stringify(casinos);
    console.log(dictstring);
    var fs = require('fs');
    fs.writeFile("thing.json", dictstring, function(err, result) {
        if(err) console.log('error', err);
    });
}

function tableSort(key) {
    switch(key) {
        case tabKeys[0]:
            fName = changeArrow(fName, key);
            sortGeneral(fName, key);
            break
        case tabKeys[1]:
            fBonus = changeArrow(fBonus, key);
            sortGeneral(fBonus, key);
            break
        case tabKeys[2]:
            fSpins = changeArrow(fSpins, key);
            sortGeneral(fSpins, key);
            break
        case tabKeys[3]:
            fWager = changeArrow(fWager, key);
            sortWager(fWager, key);
            break
        case tabKeys[4]:
            fBet = changeArrow(fBet, key);
            sortBet(fBet, key);
            break
        case tabKeys[0]:
            fCode = changeArrow(fCode, key);
            sortGeneral(fCode, key);
            break
        default:
            console.log("key not recognized");
    }
    createTbody();
}

function changeArrow(flag, key) {
    createThead();
    if(flag) {
        document.getElementById(key).innerHTML = `${key}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg>`;
    } else {
        document.getElementById(key).innerHTML = `${key}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>`;
    } 
    flag = !flag;
    return flag
}

function sortGeneral(flag, key){
    casinos.sort(function(a, b) {
        let obj1 = a[key].toUpperCase();
        let obj2 = b[key].toUpperCase();
            
        if(obj1 == "/") {
            return -1;
        }

        if (obj1 < obj2) {
            return (flag ? -1 : 1);
        }
        if (obj1 > obj2) {
            return (flag ? 1 : -1);
        }
        return 0;
    });
}

function sortWager(flag, key) {
    casinos.sort(function(a, b) {
        let nb1 = Number(a[key].substring(1));
        let nb2 = Number(b[key].substring(1));
        if(nb1 == 0 && nb2 == 0) {
                return 0;
        } else if(flag) {
            if(nb1 == 0) {
                return 1;
            } else if(nb2 == 0) {
                return -1;
            }
            return nb1 - nb2;
        } else {
            if(nb1 == 0) {
                return 1;
            } else if(nb2 == 0) {
                return -1;
            }
            return nb2 - nb1;
        }
    });
}

function sortBet(flag, key){
    casinos.sort(function(a, b) {
        if(b == "/") {
            return -1;
        }
        if(flag) {
            return a[key] - b[key];
        } else {
            return b[key] - a[key];
        }
    });
}