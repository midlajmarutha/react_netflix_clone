console.log(window.innerWidth)

document.getElementById('toggle-switch').addEventListener('click',(e)=>{
    if(window.innerWidth<=768){
        console.log('hello')
    }
})
