
let search=document.getElementById("searchh")
let find=document.getElementById("find")
let btn=document.getElementById('btn')
search.onclick=function(){
    console.log(find.value);
search.setAttribute('href',`/home?name=${find.value}`)

}
