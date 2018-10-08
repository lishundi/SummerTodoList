
function check() {
    if(document.getElementById("select").checked === true){
        document.getElementById("on").disabled = "";
    }else{
        document.getElementById("on").disabled = disabled;
    }
}
function add () {

    // if(document.getElementById("select").checked === true){
    //     document.getElementById("on").disabled = "";
    // }else{
    //     document.getElementById("on").disabled = disabled;
    // }
    // alert(document.getElementById("on").disabled);
    var name = document.getElementById('new-todo').value;

    // var select=document.getElementById("select").checked;
    //创建table
    var table = document.createElement("table");
    //设置table的border
    table.setAttribute("border", "3px solid blue");
    //创建tr
    var tr = document.createElement("tr");
    tr.setAttribute("class","get-tr");
    var enter = new Array();
    enter[0] = document.createElement("input");
    enter[0].setAttribute("class", "get-input");

    enter[0].setAttribute("type", "checkbox");
    enter[1] = document.createTextNode(name);
    enter[1].innerHTML = name;

    enter[2] = document.createElement("input");
    enter[2].setAttribute("type", "button");
    enter[2].setAttribute("value", "close");
    for (var i = 0; i < enter.length; i++) {
        //创建td
        var td = document.createElement("td");
        if (i === 0) {
            td.setAttribute("class", "ting");
            td.onclick = function () {
                // console.log("clicked");
                var ting = document.getElementsByClassName("get-input");

                for(var i=0;i<ting.length;i++){
                    if (ting[i].checked === true) {
                        ting[i].parentNode.nextElementSibling.style.textDecoration = "line-through";
                    } else {
                        ting[i].parentNode.nextElementSibling.style.textDecoration= "none";
                    }
                }

            }
        }
        else if (i === 1) {
            td.setAttribute("class", "done");

        } else {
            td.setAttribute("class", "third");
            td.onclick = function () {
                document.getElementById("table1").removeChild(tr);
            }
        }
        //文本追加到td
        td.appendChild(enter[i]);
        //把td添加到tr
        tr.appendChild(td);
    }
    table.appendChild(tr);
    document.getElementById("table1").appendChild(tr);
    document.getElementById("table1").appendChild(table);


    var all = document.getElementById("all");
    var active = document.getElementById("active");
    var completed = document.getElementById("completed");
    var completed1 = document.getElementById("clear-completed");
    var ting = document.getElementsByClassName("get-input");
    // console.log(ting[0]);
    // var gtr = document.getElementsByClassName("get-tr");
    // var gh = ting[i].parentNode.nextElementSibling.style.textDecoration
    active.onclick = function () {
      for(var i = 0;i < ting.length; i ++)
        {
            console.log(ting[0]);
                if (ting[i].checked === true) {
                   var tr1 = ting[i].parentNode.parentNode;
                   tr1.parentNode.removeChild(tr1);
                }

        }
    }
    completed.onclick = function () {
        for(var j = 0;  j< ting.length; j ++){
            if(!ting[j].checked ){
                var tr2 = ting[j].parentNode.parentNode;
                tr2.parentNode.removeChild(tr2);
            }
        }
    }
    completed1.onclick = function () {
        for(var i = 0;i < ting.length; i ++)
        {
            console.log(ting[0]);
            if (ting[i].checked === true) {
                var tr1 = ting[i].parentNode.parentNode;
                tr1.parentNode.removeChild(tr1);
            }

        }
    }
    all.onclick = function () {
        
    }

}
// var all = document.getElementById("all");
// var active = document.getElementById("active");
// var completed = document.getElementById("completed");
// var completed1 = document.getElementById("clear-completed");
// var ting = document.getElementsByClassName("get-input");
// console.log(ting.length);
// var gtr = document.getElementsByClassName("get-tr");
// var gh = ting[i].parentNode.nextElementSibling.style.textDecoration
// active.onclick = function () {
//     for(var i = 0;i < ting.length; i ++)
//     {
//         if (ting[i].checked === true) {
//             var tr1 = ting[i].parentNode.parentNode;
//             tr1.parentNode.removeChild(tr1);
//         }
//
//     }
// }