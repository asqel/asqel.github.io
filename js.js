function onload(){
    document.write("<h1>trouvez le cochon vert</h1>")
    for (let index = 0; index < Math.random()*100; index++) {
        b=Math.random()*360
        c=Math.random()*360
    document.write('<img id="lecochon" src="herb.png" alt="lecochon"  style="transform: rotate('+b+'deg);  filter: hue-rotate('+c+'deg);">')
}
    document.write('<h1>voici deux cochons rose en fait </h1>')
    document.write('<img id="lecochon" src="le cochon.jfif" alt="le cochon" " style="transform: rotate(176deg);">')
    document.write('<img id="lecochon" src="lecochoncdessiner.png" alt="lecochon" " style="transform: rotate(-123deg);">')
    for (let index = 0; index < Math.random()*1000; index++) {
        b=Math.random()*360
        c=Math.random()*360
    document.write('<img id="lecochon" src="herb.png" alt="lecochon"  style="transform: rotate('+b+'deg);  filter: hue-rotate('+c+'deg);">')
}
document.write('<img id="lecochon" src="lecochonvraie.webp" alt="lecochon"  style="transform: rotate('+b+'deg);  filter: hue-rotate('+120+'deg);" onclick="pigclick();">')
}
function pigclick(){
    document.location.href = "ministercochon.html"  
}

function getvar(x){
    console.log(window.location.href.split("?pok=")[1])


    if (x=="pv1"){
        return document.getElementById("pv1").innerText;
    }
}
cochons={
    "psycochon":{"type":"psy",
                "attack":{
                    "π":{"name":"π","damage":314,"proba":3.14159265358979,"type":"psy"},
                    "φ":{"name":"φ","damage":16,"proba":16.1803,"type":"psy"},
                    "G":{"name":"G","damage":6.67,"proba":66.7,"type":"psy"},
                    "rubik's cube":{"name":"rubik's cube","damage":20,"proba":100,"type":"normal"}
                }},
    "just a pig":{"type":"normal",
                "attack":{
                    "charge":{"name":"charge","damage":20,"proba":100,"type":"normal"},
                    "dormir":{"name":"dormir","damage":0,"proba":100,"type":"normal"},
                    "bonjour":{"name":"bonjour","damage":1,"proba":50,"type":"normal"},
                    "lance cailloux":{"name":"lance cailloux","damage":30,"proba":27,"type":"roche"}
                }},
    "cochofée":{"type":"fee",
        "attack":{
            "truc magique":{"name":"truc magique","damage":20,"proba":100,"type":"fee"},
            "arnaque":{"name":"arnaque","damage":35,"proba":57,"type":"psy"},
            "wouloulou":{"name":"wouloulou","damage":42,"proba":42,"type":"fee"},
            "charge":{"name":"charge","damage":30,"proba":100,"type":"normal"}
    }},
    "volochon":{"type":"vol",
        "attack":{
            "vol":{"name":"vol","damage":30,"proba":100,"type":"vol"},
            "wazo":{"name":"wazo","damage":40,"proba":72.5,"type":"vol"},
            "picor":{"name":"picor","damage":15,"proba":92.3,"type":"insecte"},
            "je tombe":{"name":"je tombe","damage":50,"proba":100,"type":"normal"}
}},
}

table_type={
    "normal":{
        "normal":1,
        "fee":1,
        "psy":1,
        "vol":1,
        "insecte":1,
        "roche":0.5},
 "fee":{
        "normal":1,
        "fee":1,
        "psy":1,
        "vol":1,
        "insecte":1,
        "roche":1},
     "psy":{
        "normal":1,
        "fee":1,
        "psy":0.5,
        "vol":1,
        "insecte":1,
        "roche":1},
    "vol":{
        "normal":1,
        "fee":1,
        "psy":1,
        "vol":1,
        "insecte":2,
        "roche":0.5},
    "insecte":{
        "normal":1,
        "fee":0.5,
        "psy":2,
        "vol":0.5,
        "insecte":1,
        "roche":1},
    "roche":{
        "normal":1,
        "fee":1,
        "psy":1,
        "vol":2,
        "insecte":2,
        "roche":1},
}


num={"1":"just a pig",
"2":"psycochon",
"3":"cochofée",
"4":"volochon"}
function num_to_name(n){
    if(n in num){

        return num[n]
    }
}
function damage_calc(type_att,type_def){
   if(type_att in table_type && type_def  in table_type){
    return table_type[type_att][type_def]
   } return 1;
}
function combat_load(){
    p=document.location.href.split("co=")[1]
    n=num_to_name(p)
    p=cochons[n]
    document.getElementById("j1im").src="cochons/"+n+".png"
    document.getElementById("j1name").innerText=n
    document.getElementById("j1pv").innerText="160 PV"
    l=Object.keys(p["attack"])
    document.getElementById("attack1").innerText=l[0]+" : "+p["attack"][l[0]]["type"]+" "
    document.getElementById("attack2").innerText=l[1]+" : "+p["attack"][l[1]]["type"]+"    "
    document.getElementById("attack3").innerText=l[2]+" : "+p["attack"][l[2]]["type"]+"     "
    document.getElementById("attack4").innerText=l[3]+" : "+p["attack"][l[3]]["type"]+"    "
    n2=Math.floor(Math.random()*(4-1+1)+1)
    document.getElementById("j2im").src="cochons/"+num_to_name(n2)+".png"
    document.getElementById("j2name").innerText=num_to_name(n2)
    document.getElementById("j2pv").innerText="160 PV"

    

}

function attack(x){
    j1=document.getElementById("j1name").innerText
    j2=document.getElementById("j2name").innerText  
    l=Object.keys(cochons[j1]["attack"])
    att=cochons[j1]["attack"][l[x-1]]
    n=damage_calc(att["type"],cochons[j2]["type"])
    x=document.getElementById("j2pv").innerText
    ne=x.split(" PV")[0]-att["damage"]*n
    if (Math.random()*100<=att["proba"]){
        anime("j1",att["name"])
        document.getElementById("j2pv").innerText=ne+" PV"
    }
    if(document.getElementById("j2pv").innerText.split(" PV")[0]<=0){
        combat_load()
    }
    else{
        n2=Math.floor(Math.random()*(3-0+1)+0)
        n2=Object.keys(cochons[j2]["attack"])[n2]
        n=damage_calc(cochons[j2]["attack"][n2]["type"],cochons[j1]["type"])
        if(Math.random()*100<=cochons[j2]["attack"][n2]["proba"]){
            x=document.getElementById("j1pv").innerText
            ne=x.split(" PV")[0]-att["damage"]*n
            document.getElementById("j1pv").innerText=ne+" PV"
            anime("j2",att["name"])
        }
    if(document.getElementById("j1pv").innerText.split(" PV")[0]<=0){
        combat_load()
    }
    }


}
function anime(x,y){
    
}

