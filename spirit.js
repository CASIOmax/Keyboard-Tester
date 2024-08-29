const body = document.querySelector('body');
console.log(body)

body.addEventListener('click',function(){
    console.log("Body Clickeed")
    document.body.style.backgroundColor="green";
})