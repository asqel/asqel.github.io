var url="https://asqool.github.io/j.json"
var t=[]
fetch(url).then(function(res){
  t.push(res.text)
})




function onload(){
  console.log(t)
  document.write("salut toi");
  document.write(t);
}
