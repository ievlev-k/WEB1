let x = document.getElementById("x");
let y = document.getElementById("y");
let r = document.getElementById("r");
let tableBody = document.getElementById("tableBody");




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
        $("#title").text("Заполните правильно красные ячейки");
    }else {$("#title").text("");}
    return importCorrect;
}
document.querySelector("#input").onclick = function(e){
    e.preventDefault();
    let correct = correctImport();
    if (correct ){
        $.ajax({
                method: "POST",
                async:true,
                url: "printTable.php",
                data: {
                    "x": x.value,
                    "y": y.value,
                    "r": r.value},

                success: function(printTable) {

                    tableBody.insertAdjacentHTML('beforeend', printTable);
                },

            }

        );
    }

};

document.querySelector("#clean").onclick = function(e){
    e.preventDefault();
    $.ajax({
            method: "POST",
            async:true,
            url: "cleaning.php",
            data:{},
            success:function (){
                tableBody.innerHTML = `
                <tr>
                    <th >X</th>
                    <th>Y</th>
                    <th >R</th>
                    <th >Попадание</th>
                    <th >Время выполнения (мкс)</th>
                    <th >Время запроса</th>
                </tr>
                `

            },

    }

        );


};
// document.onreadystatechange = function (){
//     if (document.readyState === 'complete'){
//         $.ajax({
//             url: "write.php",
//             method: "POST",
//             async:true,
//
//
//             success:function (printTable){
//
//                 tableBody.insertAdjacentHTML('beforeend', printTable)
//
//             },
//
//         })
//
//     }
// }

document.addEventListener('DOMContentLoaded', function(){
    $.ajax({
        url: "write.php",
        async: true,
        type: "POST",
        success: function (response){
            let table = document.getElementById("tableBody");
            table.insertAdjacentHTML('beforeend', response);
        }
    })


}, false);






