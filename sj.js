let receptek = [
  {
    nev: "asd",
    leiras: "asd",
    hozzavolok: ["hozzávaló1"],
    kepUrl: "",
  },
  {
    nev: "ratatatta",
    leiras: "asd",
    hozzavolok: ["hozzávaló1","hozzávaló2"],
    kepUrl: "",
  },
  {
    nev: ""+{},
    leiras: ""+{},
    hozzavolok: ["hozzávaló1","hozzávaló3","hozzávaló4"],
    kepUrl: "",
  },
];

window.addEventListener("load",init)
function init(){
    document.body.innerHTML+="<table></table>"
    document.querySelectorAll("table")[0].innerHTML+=`<tr>
        <th>${"név"}</th>
        <th>${"leírás"}</th>
        <th>${"hozzávalók"}</th>
        </tr>`   

    for (let ix = 0; ix < receptek.length; ix++) {
        document.querySelectorAll("table")[0].innerHTML+=`<tr>
        <td>${receptek[ix].nev}</td>
        <td>${receptek[ix].leiras}</td>
        <td>${receptek[ix].hozzavolok}</td>
        </tr>`    
    }
     
}

function valaszt(){
    
}
valaszt()