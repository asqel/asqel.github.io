var url="https://asqool.github.io/j.json"
var t=[]
fetch(url).then(function(res){
  t.push(res.text())

})




function onload(){
  console.log(JSON.parse(t.fulfilled))
  document.write("salut toi");
  document.write(t.fulfilled);
}
