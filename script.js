function add(){
    var a=0,b=0;
    a=f.c.value;
    b=a.charAt( a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
        f.c.value=a.substring(0,a.length-1);
        f.c.value+='+';
    }
    else{
        f.c.value+='+';
    }
}
function sub(){
    var a=0,b=0;
    a=f.c.value;
    b=a.charAt( a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
        f.c.value=a.substring(0,a.length-1);
        f.c.value+='-';
    }
    else{
        f.c.value+='-';
    }
}
function div(){
    var a=0,b=0;
    a=f.c.value;
    b=a.charAt( a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
        f.c.value=a.substring(0,a.length-1);
        f.c.value+='/';
    }
    else{
        f.c.value+='/';
    }
}
function mul(){
    var a=0,b=0;
    a=f.c.value;
    b=a.charAt( a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
        f.c.value=a.substring(0,a.length-1);
        f.c.value+='*';
    }
    else{
        f.c.value+='*';
    }
}