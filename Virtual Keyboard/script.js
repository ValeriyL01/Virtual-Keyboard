
import en from './enkeyboard.js';
import ru from './rukeyboard.js';
const CONTAINER = document.createElement('div')
const TEXTAREA = document.createElement('textarea')
const KEYBOARD = document.createElement('div')
const TEXT = document.createElement('p')
document.body.appendChild(CONTAINER)
CONTAINER.classList.add('container')
CONTAINER.appendChild(TEXTAREA)
TEXTAREA.classList.add('textarea')
TEXTAREA.setAttribute('autofocus', 'true')
TEXTAREA.setAttribute('placeholder', 'Введите текст...')
CONTAINER.appendChild(KEYBOARD)
KEYBOARD.classList.add('keyboard')
CONTAINER.appendChild(TEXT)
TEXT.classList.add('text')
TEXT.textContent = 'Клавиатура сделана для операционной системы Windows'
let lang = 'ru'

function addButton(lang){
en.forEach(element => {
   let btn = document.createElement('div')
   KEYBOARD.appendChild(btn)
   btn.innerHTML = element.key
   btn.classList.add('btn')
   if(element.key === 'Tab'||element.key === 'Backspace' ||element.key === 'Delete'||
   element.key === 'CapsLock'||element.key === 'Enter'||element.code === 'ShiftRight'||element.code === 'ShiftLeft'||element.code === 'ControlRight'||
   element.key === 'Win'||element.key === 'Alt'||element.key === ' '||element.key === 'Alt'||element.key === '◄'||
   element.key === '▼'||element.key === '►'||element.key === '▲' ||element.code === 'ControlLeft'){
    btn.classList.add('btn2')
   } 
   if (element.key === 'CapsLock'){
    btn.classList.add('CapsLock')
   }
   if (element.key === 'Enter'){
    btn.classList.add('Enter')
   }
    if (element.code === 'ShiftRight'){
    btn.classList.add('Shift')
   }
   if (element.code === 'ShiftLeft'){
    btn.classList.add('Shift')
   }
    if (element.code === 'ControlRight'){
    btn.classList.add('Ctrl')
   }
   if (element.code === 'ControlLeft'){
    btn.classList.add('Ctrl')
   }
    if (element.key === 'Tab'){
    btn.classList.add('Tab')
   }
    if (element.key === 'Delete'){
    btn.classList.add('Delete')
   }
   if (element.key === 'Backspace'){
    btn.classList.add('Backspace')
   }
   if (element.key === ' '){
    btn.classList.add('space')
   }
  
});
}
addButton(lang)

const BTN = document.querySelectorAll('.btn')
console.log(BTN )
function pressButton(){
document.addEventListener('keydown',(e)=>{
    BTN.forEach((elem)=>{
        if(e.key === elem.innerHTML){
            elem.classList.add('btn-key')
        }
       
    })
})
}
pressButton()

function onpressButton(){
    document.addEventListener('keyup',(e)=>{
        BTN.forEach((elem)=>{
            if(elem.classList.contains('btn-key')){
                elem.classList.remove('btn-key')
            }
        })
    })
    }
    onpressButton()


 


   