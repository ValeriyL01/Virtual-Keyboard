
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

let lang = en

function addButton(lang){
        
  lang.forEach(element => {
   let btn = document.createElement('div')
   KEYBOARD.appendChild(btn)
   //shift
   
  let shiftUp = btn.innerHTML = element.key
   document.addEventListener('keydown',(e)=>{
        if(e.key === 'Shift' ){
            shiftUp = btn.innerHTML =element.nameShift
        }
})
document.addEventListener('keyup',(e)=>{
    if(e.key === 'Shift'){
        shiftUp = btn.innerHTML = element.key
    }
})
let isFlag = false
document.addEventListener('mousedown',(e)=>{
    if(e.target === SHIFT[0] || e.target === SHIFT[1]){
        shiftUp = btn.innerHTML =element.nameShift
        isFlag = true
    }
})
document.addEventListener('mouseup',()=>{
    if(isFlag  ){
        shiftUp = btn.innerHTML =element.key
    }
})
//

/*document.addEventListener('keydown',(e)=>{
    if(e.code === 'CapsLock'){
        shiftUp = btn.innerHTML =element.nameShift
    }
})
*/

   btn.classList.add('btn')
   if(element.key === 'Tab'||element.key === 'Backspace' ||element.key === 'Delete'||
   element.key === 'CapsLock'||element.key === 'Enter'||element.code === 'ShiftRight'||element.code === 'ShiftLeft'||element.code === 'ControlRight'||
   element.key === 'Win'||element.code === 'AltLeft'||element.key === ' '||element.code === 'AltRight'||element.key === '◄'||
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
   if (element.code === 'AltLeft'){
    btn.classList.add('alt')
   }
   if (element.code === 'AltRight'){
    btn.classList.add('alt')
   }
  
});
}
addButton(en)

const BTN = document.querySelectorAll('.btn')
const SHIFT = document.querySelectorAll('.Shift')
const CTRL = document.querySelectorAll('.Ctrl')
const ALT = document.querySelectorAll('.alt')
const CAPS = document.querySelector('.CapsLock')
const TAB = document.querySelector('.Tab')
console.log(BTN )
function downButton(){
    
document.addEventListener('keydown',(e)=>{
    BTN.forEach((elem)=>{
        if(e.key === elem.innerHTML && e.key !== 'Shift' && e.key !== 'Alt' && e.key !== 'Ctrl'){
            elem.classList.add('btn-key')
        }
        
         if(e.code === 'ShiftLeft'){
            SHIFT[0].classList.add('btn-key')
          
        }
        if(e.code === 'ShiftRight'){
            SHIFT[1].classList.add('btn-key')
        }
        if(e.code === 'ControlLeft'){
            CTRL[0].classList.add('btn-key')
        }
        if(e.code === 'ControlRight'){
            CTRL[1].classList.add('btn-key')
        }
        if(e.code === 'AltLeft'){
            ALT[0].classList.add('btn-key')
        }
        if(e.code === 'AltRight'){
            ALT[1].classList.add('btn-key')
        }
    })
})
}
downButton()

function upButton(){
    document.addEventListener('keyup',(e)=>{
        BTN.forEach((elem)=>{
            if(elem.classList.contains('btn-key') ){
                elem.classList.remove('btn-key')
            }
         
        })
    })
    }
    upButton()

    
    const textarea = document.querySelector('.textarea')

    console.log(BTN.innerHTML)
    KEYBOARD.addEventListener('click',(e)=>{
       
       textarea.innerHTML += e.target.innerHTML
    
       textarea.focus()
       
       
    })




