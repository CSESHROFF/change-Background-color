const color=document.querySelector('.color')
const color1=document.querySelector('.color1')
const color2=document.querySelector('.color2')
const change=document.querySelector('body')

color.addEventListener('click',()=>{
    change.style.backgroundColor="blue"
})
color1.addEventListener('click',()=>{
    change.style.backgroundColor="pink"
})
color2.addEventListener('click',()=>{
    change.style.backgroundColor="yellow"
})
