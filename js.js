var x=4;
function exec_bf(){
  text=document.getElementById("bf_id").contentEditable;
  console.log(text);
  let p=0;
  coms=["+","-","<",">","[","]",","];
  cells={0:0};
  c=0;
  while(p<text.lenght){
    if (coms.contains(text[p])) {
      if(text[p]=="+"){
        if (!cells.keys().contains(c)){
          cells[c]=0;
        }
        cells[c]+=1;
      }
      if(text[p]=="-"){
        if (!cells.keys().contains(c)){
          cells[c]=0;
        }
        cells[c]-=1;
      }
      if(text[p]==">"){
        c+=1;
      }
      if(text[p]=="<"){
        c-=1;
      }
      if(text[p]==']'){
        if (cells[c]==0){
          
        }
      }
    }
  }

}
