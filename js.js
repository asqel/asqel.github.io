var x=4;
function exec_bf(){
  text=document.getElementById("bf_id").value
  console.log(text);
  let p=0;
  coms=["+","-","<",">","[","]",","];
  cells={0:0};
  c=0;
  while(p<text.lenght){
    if (coms.contains(text[p])) {
      if(text[p]=="+"){
        if (!Object.keys(cells).includes(num.toString(c))){
          cells[c]=0;
        }
        cells[c]+=1;
        p+=1;

      }
      if(text[p]=="-"){
        if (!Object.keys(cells).includes(num.toString(c))){
          cells[c]=0;
        }
        cells[c]-=1;
        p+=1;

      }
      if(text[p]==">"){
        c+=1;
        p+=1;
      }
      if(text[p]=="<"){
        c-=1;
        p+=1

      }
      if(text[p]=="."){
        if (!Object.keys(cells).includes(num.toString(c))){
          cells[c]=0;
        }
        document.getElementById("output").value+=String.fromCharCode(cells[c]);
        p+=1;
      }
      if(text[p]==']'){
        if (cells[c]==0){
          b=p;
          count=0;
          while(b>0){
            if(text[b]=="]"){count+=1;b-=1}
            else if(text[b]=="[" && count>0){count-=1;b-=1;}
            else if(text[b]=="["&&  count==0){break}
            else{b-=1;}

          }
          p=b

        }
      }
      else{
        p+=1;
      }
    }
    else{p+=1}
  }

}
