//1.DOMの読み込みが完了したとき、検索ボタンのクリックハンドラを追加する
//2.検索ボタンのクリックハンドラで、キーワードに部分一致する書籍のみを表示
//3．どれも一致しない場合は、エラーメッセージを出す
window.onload = function() {
    var button=document.getElementById("search");
    button.onclick=func;

   /* var a = f;
    a(); // === f()*/
        
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
