let sidebar = document.getElementById("side-bar");
let rightcontent = document.getElementById("right-content");
let dashBtn = document.getElementById("dash-btn");
let def = document.getElementById("def");
let def1 = document.getElementById("def1");
let def2 = document.getElementById("def2");
let def3 = document.getElementById("def3");
let expand=0;


dashBtn.addEventListener("click",function(){
    if(expand==0){
        sidebar.style.width="15%";
        rightcontent.style.width="85%";
        expand=1;
        def.style.display="block";
        def1.style.display="block";
        def2.style.display="block";
        def3.style.display="block";
    }
    else{
        sidebar.style.width="5%";
        rightcontent.style.width="95%";
        expand=0;
        def.style.display="none";
        def1.style.display="none";
        def2.style.display="none";
        def3.style.display="none";
    }


});

