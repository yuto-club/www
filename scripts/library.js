window.onload = function() {
    var button=document.getElementById("search");
    button.onclick=func;

        
}


function func(){
    let input,table,tr,td,i,txtValue;
    input=document.getElementById("keyword");
    table=document.getElementById("list");
    tr=table.getElementsByTagName("tr");

    let hit = false;

    for(i=2;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[0];
        if(td){
            txtValue=td.textContent || td.innerText;
            if(txtValue.indexOf(input.value) > -1){
                tr[i].style.display="";
                hit = true;
            }else{
                tr[i].style.display="none";
            }
        }
    }

    if(hit) {
        tr[1].style.display = "none";
    }
    else
    {
        tr[1].style.display = "";
    }
}
