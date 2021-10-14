let x = document.getElementById("x");
let y = document.getElementById("y");
let r = document.getElementById("r");
let tableBody = document.getElementById("tableBody");
let title = document.getElementById("title");




function correctImport(){
    let importCorrect = true
    if((r.value >= 5 || r.value <=2 || isNaN(r.value)) || !r.value){
        r.style.border = "2px solid red";
        importCorrect = false;
    }else {r.style.border = "2px solid green";}

    if((y.value >= 5 || y.value <=-5 || isNaN(y.value)) || !y.value ){
        y.style.border = "2px solid red";
        importCorrect = false;
    }else {y.style.border = "2px solid green"; }

    if((x.value >= 3 || x.value <=-3 || isNaN(x.value))|| !x.value ){
        x.style.border = "2px solid red";
        importCorrect = false;
    }else {x.style.border = "2px solid green"; }
    if (!importCorrect){
        document.getElementById("title").innerHTML="Заполните правильно красные ячейки";

    }else {document.getElementById("title").innerHTML="";}
    return importCorrect;
}

document.querySelector("#data-input").onclick = function(e){
    e.preventDefault();
    let correct = correctImport();
    if (correct ){
        const request = new XMLHttpRequest();
        const url = "printTable.php";
        const params = "&x=" + x.value + "&y=" + y.value + "&r=" + r.value ;
        request.open("POST", url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.addEventListener("readystatechange", () => {
            if(request.readyState === 4 && request.status === 200) {
                tableBody.insertAdjacentHTML('beforeend', request.responseText);
            }
        });
        request.send(params);
    }
}



document.querySelector("#data-cleangs").onclick = function(e){
    e.preventDefault();
    const request = new XMLHttpRequest();
    const url = "cleaning.php";
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.addEventListener("readystatechange", () => {
        if(request.readyState === 4 && request.status === 200) {
            tableBody.innerHTML = `
                    <tr>
                        <th >X</th>
                        <th>Y</th>
                        <th >R</th>
                        <th >Попадание</th>
                        <th >Время выполнения (мкс)</th>
                        <th >Время запроса</th>
                    </tr>
                    `}
    });
    request.send();

}


document.addEventListener('DOMContentLoaded', function(){
    const request = new XMLHttpRequest();
    const url = "write.php";
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.addEventListener("readystatechange", () => {
        if(request.readyState === 4 && request.status === 200) {
            let table = document.getElementById("tableBody");
            table.insertAdjacentHTML('beforeend', request.responseText);
        }
    });
    request.send();
}, false);