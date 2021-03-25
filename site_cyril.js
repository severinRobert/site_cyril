/**
 * @author : Séverin Robert
 * @time : 02/03/2021
 */

"use strict";
document.addEventListener('DOMContentLoaded',createTable);
let casinos = [
        {
            "Nom du casino": "Banzai Slots",
            "Bonus jusqu' X€": "100% jusqu'à 250€",
            "Free spins offert": "/",
            "Wager": "/",
            "Bet maximum": "5.00 ",
            "Code bonus": "/",
            "Lien du casino": "https://track.casinorevenues.com/_BhTQDVOVie0WqcfzuvZcQGNd7ZgqdRLk/1/ "
        },
        {
            "Nom du casino": "Azur casino",
            "Bonus jusqu' X€": "100% jusqu'à 500€",
            "Free spins offert": "20",
            "Wager": "X40",
            "Bet maximum": "10.00 ",
            "Code bonus": "/",
            "Lien du casino": "https://track.casinorevenues.com/_BhTQDVOVie3UOsjNOfgKeWNd7ZgqdRLk/1/ "
        },
        {
            "Nom du casino": "Winoui",
            "Bonus jusqu' X€": "100% jusqu'à 500€",
            "Free spins offert": "/",
            "Wager": "X30 ",
            "Bet maximum": "5.00 ",
            "Code bonus": "/",
            "Lien du casino": "https://record.rainmakercasino.net/_IftnDdVFDHJHH6eEtUVc2GNd7ZgqdRLk/1/ "
        },
        {
            "Nom du casino": "Lucky Luke",
            "Bonus jusqu' X€": "120% jusqu'a 120€",
            "Free spins offert": "Ou 200 (X50)",
            "Wager": "X35 ",
            "Bet maximum": "5.00 ",
            "Code bonus": "/",
            "Lien du casino": "https://record.gngaffiliates.com/_pRktRPGNEhW3_O3IiMN7EWNd7ZgqdRLk/1/ "
        },
        {
            "Nom du casino": "Casino360",
            "Bonus jusqu' X€": "100% jusqu'à 360€",
            "Free spins offert": "/",
            "Wager": "X30 ",
            "Bet maximum": "5.00 ",
            "Code bonus": "/",
            "Lien du casino": "http://wlcasino360.adsrv.eacdn.com/C.ashx?btag=a_10540b_1009c_&affid=2047&siteid=10540&adid=1009&c= "
        },
        {
            "Nom du casino": "Prince Ali",
            "Bonus jusqu' X€": "100% jusqu'à 1000€",
            "Free spins offert": "/",
            "Wager": "/",
            "Bet maximum": "/",
            "Code bonus": "7€ avec le code Princeali-7",
            "Lien du casino": "https://record.mysharepartners.com/_pV8kjcv9RlkXM_11c336cWNd7ZgqdRLk/1/ "
        },
        {
            "Nom du casino": "Magical spin",
            "Bonus jusqu' X€": "100% jusqu'à 1000€",
            "Free spins offert": "50",
            "Wager": "/",
            "Bet maximum": "/",
            "Code bonus": "7€ avec le code MAGIC7FE",
            "Lien du casino": "https://record.mysharepartners.com/_pV8kjcv9RllRZS2G957ZqGNd7ZgqdRLk/1/ "
        },
        {
            "Nom du casino": "Stake",
            "Bonus jusqu' X€": "/",
            "Free spins offert": "/",
            "Wager": "/",
            "Bet maximum": "/",
            "Code bonus": "/",
            "Lien du casino": "https://stake.com/?c=fbb546ea7c  "
        },
        {
            "Nom du casino": "Vegas plus",
            "Bonus jusqu' X€": "100%jusqu'à 250€",
            "Free spins offert": "10 pendant 5 jours",
            "Wager": "X120",
            "Bet maximum": "10.00 ",
            "Code bonus": "/",
            "Lien du casino": "https://ultrapartners.com/redirect/id/33661/b/3/l/48/tp/h/s//tm/0 "
        },
        {
            "Nom du casino": "Machance",
            "Bonus jusqu' X€": "100% jusqu'à 250€ ou 300% jusqu'à 60€",
            "Free spins offert": "20",
            "Wager": "X90",
            "Bet maximum": "Dépend de la somme déposée",
            "Code bonus": "/",
            "Lien du casino": "https://ultrapartners.com/redirect/id/33661/b/2/l/41/tp/mch/s//tm/0 "
        },
        {
            "Nom du casino": "Unique casino",
            "Bonus jusqu' X€": "100% jusqu'à 200€",
            "Free spins offert": "20",
            "Wager": "X30 ",
            "Bet maximum": "/",
            "Code bonus": "/",
            "Lien du casino": "https://ultrapartners.com/redirect/id/33661/b/1/l/48/tp/h/s//tm/0 "
        },
        {
            "Nom du casino": "Alfcasino",
            "Bonus jusqu' X€": "100% jusqu'à 500€",
            "Free spins offert": "20 pendant 10 jours",
            "Wager": "X35 ",
            "Bet maximum": "5.00 ",
            "Code bonus": "/",
            "Lien du casino": "https://media.alfcasino.com/redirect.aspx?pid=1705744&bid=2979 "
        },
        {
            "Nom du casino": "Yoyocasino",
            "Bonus jusqu' X€": "100% jusqu'à 500€",
            "Free spins offert": "50 directement et 50 24h après",
            "Wager": "X35 ",
            "Bet maximum": "5.00 ",
            "Code bonus": "/",
            "Lien du casino": "https://media.yoyocasino.com/redirect.aspx?pid=1705744&bid=2368 "
        },
        {
            "Nom du casino": "Malinacasino",
            "Bonus jusqu' X€": "100% jusqu'à 500€",
            "Free spins offert": "20 pendant 10 jours",
            "Wager": "X35 ",
            "Bet maximum": "5.00 ",
            "Code bonus": "/",
            "Lien du casino": "https://media.malinacasino.com/redirect.aspx?pid=1705744&bid=1752 "
        },
        {
            "Nom du casino": "Burancasino",
            "Bonus jusqu' X€": "100% jusqu'à 500€",
            "Free spins offert": "20 pendant 10 jours",
            "Wager": "X35 ",
            "Bet maximum": "5.00 ",
            "Code bonus": "/",
            "Lien du casino": "https://media.burancasino.com/redirect.aspx?pid=1705744&bid=2134 "
        },
        {
            "Nom du casino": "CasinoSuperlines",
            "Bonus jusqu' X€": "100% jusqu'à 600€",
            "Free spins offert": "50",
            "Wager": "X45",
            "Bet maximum": "30% du dépôt",
            "Code bonus": "/",
            "Lien du casino": "https://go.rocksolidaffiliates1.com/visit/?bta=38343&nci=8088 "
        },
        {
            "Nom du casino": "Orient express",
            "Bonus jusqu' X€": "100% jusqu'à 750€",
            "Free spins offert": "50",
            "Wager": "X45",
            "Bet maximum": "30% du dépôt",
            "Code bonus": "/",
            "Lien du casino": "https://go.rocksolidaffiliates1.com/visit/?bta=38343&nci=8035 "
        },
        {
            "Nom du casino": "Sticky Wilds",
            "Bonus jusqu' X€": "100% jusqu'à 100€",
            "Free spins offert": "50",
            "Wager": "X30 ",
            "Bet maximum": "5.00 ",
            "Code bonus": "/",
            "Lien du casino": "https://aff-ads.stickywilds.com/text/befa1721000360000003000003000003000001000001 "
        },
        {
            "Nom du casino": "Loki Casino",
            "Bonus jusqu' X€": "100% jusqu'à 300€",
            "Free spins offert": "20 pendant 5 jours",
            "Wager": "X40",
            "Bet maximum": 1,
            "Code bonus": "LOKI100",
            "Lien du casino": "https://atraff.com/?serial=10979&creative_id=775&anid="
        },
        {
            "Nom du casino": "Golden Star",
            "Bonus jusqu' X€": "100% jusqu'à 300€",
            "Free spins offert": "20 pendant 5 jours",
            "Wager": "X40",
            "Bet maximum": 1,
            "Code bonus": "GS100",
            "Lien du casino": "https://atraff.com/?serial=10979&creative_id=777&anid="
        },
        {
            "Nom du casino": "Guns Bet",
            "Bonus jusqu' X€": "100% jusqu'à 300€",
            "Free spins offert": "20 pendant 5 jours",
            "Wager": "X40",
            "Bet maximum": 1,
            "Code bonus": "BONUS100",
            "Lien du casino": "https://atraff.com/?serial=10979&creative_id=771&anid="
        },
        {
            "Nom du casino": "EU Slots",
            "Bonus jusqu' X€": "100% jusqu'à 300€",
            "Free spins offert": "20 pendant 5 jours",
            "Wager": "X40",
            "Bet maximum": 5,
            "Code bonus": "EU100",
            "Lien du casino": "https://atraff.com/?serial=10979&creative_id=774&anid="
        },
        {
            "Nom du casino": "Webbyslot",
            "Bonus jusqu' X€": "100% jusqu'à 300€",
            "Free spins offert": "20 pendant 5 jours",
            "Wager": "X40",
            "Bet maximum": 1,
            "Code bonus": "/",
            "Lien du casino": "https://atraff.com/?serial=10979&creative_id=776&anid="
        },
        {
            "Nom du casino": "Crazy fox",
            "Bonus jusqu' X€": "/",
            "Free spins offert": "/",
            "Wager": "/",
            "Bet maximum": "/",
            "Code bonus": "/",
            "Lien du casino": "https://atraff.com/?serial=10979&creative_id=948&anid="
        },
        {
            "Nom du casino": "Roku",
            "Bonus jusqu' X€": "100% jusqu'à 100€",
            "Free spins offert": "/",
            "Wager": "X40",
            "Bet maximum": 1,
            "Code bonus": "/",
            "Lien du casino": "https://atraff.com/?serial=10979&creative_id=1172&anid="
        },
        {
            "Nom du casino": "Savarona",
            "Bonus jusqu' X€": "100% jusqu'à 300€",
            "Free spins offert": "20 pendant 5 jours",
            "Wager": "X40",
            "Bet maximum": 1,
            "Code bonus": "/",
            "Lien du casino": "https://atraff.com/?serial=10979&creative_id=1194&anid="
        },
        {
            "Nom du casino": "Playamo",
            "Bonus jusqu' X€": "100% jusqu'à 100€",
            "Free spins offert": "20 pendant 5 jours",
            "Wager": "X50",
            "Bet maximum": 5,
            "Code bonus": "FIRSTDEP",
            "Lien du casino": "https://media.playamopartners.com/redirect.aspx?pid=96927&bid=1483"
        },
        {
            "Nom du casino": "Bob Casino",
            "Bonus jusqu' X€": "100% jusqu'à 100€",
            "Free spins offert": "25 pendant 4 jours",
            "Wager": "X40",
            "Bet maximum": 5,
            "Code bonus": "BEHAPPY",
            "Lien du casino": "https://media.playamopartners.com/redirect.aspx?pid=96927&bid=1545"
        },
        {
            "Nom du casino": "Betchan",
            "Bonus jusqu' X€": "100% jusqu'à 100€",
            "Free spins offert": "30",
            "Wager": "X40",
            "Bet maximum": 5,
            "Code bonus": "BERLIN",
            "Lien du casino": "https://media.playamopartners.com/redirect.aspx?pid=96927&bid=1849"
        },
        {
            "Nom du casino": "Spinia",
            "Bonus jusqu' X€": "100% jusqu'à 100€",
            "Free spins offert": "25",
            "Wager": "X40",
            "Bet maximum": 5,
            "Code bonus": "PINACOLADA",
            "Lien du casino": "https://media.playamopartners.com/redirect.aspx?pid=96927&bid=1931&lpid=45"
        },
        {
            "Nom du casino": "CasinoChan",
            "Bonus jusqu' X€": "100% jusqu'à 100€",
            "Free spins offert": "30",
            "Wager": "X40",
            "Bet maximum": 5,
            "Code bonus": "BERLIN",
            "Lien du casino": "https://media.playamopartners.com/redirect.aspx?pid=96927&bid=1938&lpid=106"
        },
        {
            "Nom du casino": "Betamo",
            "Bonus jusqu' X€": "100% jusqu'à 150€",
            "Free spins offert": "20 pendant 5 jours",
            "Wager": "X40",
            "Bet maximum": 5,
            "Code bonus": "START",
            "Lien du casino": "https://media.playamopartners.com/redirect.aspx?pid=96927&bid=1943"
        },
        {
            "Nom du casino": "20Bet",
            "Bonus jusqu' X€": "100% jusqu'à 120€",
            "Free spins offert": "30 pendant 4 jours",
            "Wager": "X40",
            "Bet maximum": 5,
            "Code bonus": "/",
            "Lien du casino": "https://promo.20bet.partners/redirect.aspx?pid=96927&bid=2013"
        },
        {
            "Nom du casino": "Woocasino",
            "Bonus jusqu' X€": "100% jusqu'à 100€",
            "Free spins offert": "25 pendant 6 jours",
            "Wager": "X40",
            "Bet maximum": 5,
            "Code bonus": "WOO",
            "Lien du casino": "https://media.playamopartners.com/redirect.aspx?pid=96927&bid=1964&lpid=180"
        },
        {
            "Nom du casino": "Cookiecasino",
            "Bonus jusqu' X€": "100% jusqu'à 100€",
            "Free spins offert": "30 pendant 4 jours",
            "Wager": "X40",
            "Bet maximum": 5,
            "Code bonus": "CAKE",
            "Lien du casino": "https://media.playamopartners.com/redirect.aspx?pid=96927&bid=1965&lpid=181"
        },
        {
            "Nom du casino": "Avalon78",
            "Bonus jusqu' X€": "100% jusqu'à 100€",
            "Free spins offert": "20 pendant 5 jours",
            "Wager": "X40",
            "Bet maximum": 5,
            "Code bonus": "AVALON100",
            "Lien du casino": "https://media.playamopartners.com/redirect.aspx?pid=96927&bid=2005&lpid=425"
        },
        {
            "Nom du casino": "Betsedge",
            "Bonus jusqu' X€": "100% jusqu'à 100€",
            "Free spins offert": "100",
            "Wager": "X50",
            "Bet maximum": 5,
            "Code bonus": "/",
            "Lien du casino": "https://media.betsedgepartners.com/redirect.aspx?pid=3581&bid=1516"
        },
        {
            "Nom du casino": "Whamoo",
            "Bonus jusqu' X€": "Bonus variable",
            "Free spins offert": "Free spins variable",
            "Wager": "X30 ",
            "Bet maximum": 5,
            "Code bonus": "/",
            "Lien du casino": "https://go.whamoo.com/afs/come.php?cid=11129&ctgid=1007&atype=1&brandid=11"
        },
        {
            "Nom du casino": "Casoo",
            "Bonus jusqu' X€": "100% jusqu'à 300€",
            "Free spins offert": "100",
            "Wager": "X25 ",
            "Bet maximum": 2,
            "Code bonus": "/",
            "Lien du casino": "https://click.casoo.partners/afs/come.php?id=95&cid=5123&atype=1&ctgid=100"
        },
        {
            "Nom du casino": "Tsar",
            "Bonus jusqu' X€": "100% jusqu'à 300€",
            "Free spins offert": "100",
            "Wager": "X25 ",
            "Bet maximum": 2,
            "Code bonus": "/",
            "Lien du casino": "https://click.tsars.partners/afs/come.php?id=541&cid=5123&atype=1&ctgid=100"
        }
    ];
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