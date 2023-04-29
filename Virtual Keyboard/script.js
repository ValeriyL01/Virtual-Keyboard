
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
TEXTAREA.focus()

function addButton(){
   en.forEach(element => {
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
   if (element.code === 'MetaLeft'){
    btn.classList.add('win')
   }
   if (element.code === 'ArrowUp'){
    btn.classList.add('ArrowUp')
   }
   if (element.code === 'ArrowLeft'){
    btn.classList.add('ArrowLeft')
   }
   if (element.code === 'ArrowDown'){
    btn.classList.add('ArrowDown')
   }
   if (element.code === 'ArrowRight'){
    btn.classList.add('ArrowRight')
   }
});
}
addButton()

const BTN = document.querySelectorAll('.btn')
const SHIFT = document.querySelectorAll('.Shift')
const CTRL = document.querySelectorAll('.Ctrl')
const ALT = document.querySelectorAll('.alt')
const CAPS = document.querySelector('.CapsLock')
const TAB = document.querySelector('.Tab')
const WIN = document.querySelector('.win')
const ArrowUp = document.querySelector('.ArrowUp')
const ArrowLeft = document.querySelector('.ArrowLeft')
const ArrowDown = document.querySelector('.ArrowDown')
const ArrowRight = document.querySelector('.ArrowRight')
console.log(BTN )
function downButton(){
    
document.addEventListener('keydown',(e)=>{
    BTN.forEach((elem)=>{
       
        if(e.key === elem.innerHTML && e.key !== 'Shift' &&
         e.key !== 'Alt' && e.key !== 'Ctrl'){
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
            e.preventDefault()
        }
        if(e.code === 'AltRight'){
            ALT[1].classList.add('btn-key')
            e.preventDefault()
        }
        if(e.code === 'Tab'){
            TAB.classList.add('btn-key')
                e.preventDefault()     
        }
        if(e.code === 'MetaLeft'){
            WIN.classList.add('btn-key')
                e.preventDefault()
            
        }
         if(e.key === 'CapsLock'){
            Caps()
        }
        if(e.code === 'ArrowUp'){
            e.preventDefault()
            ArrowUp.innerHTML = '&#9650'
            ArrowUp.classList.add('btn-key')
        }
        if(e.code === 'ArrowLeft'){
            e.preventDefault()
            ArrowLeft.innerHTML = '&#9668'
            ArrowLeft.classList.add('btn-key')
        }
        if(e.code === 'ArrowDown'){
            e.preventDefault()
            ArrowDown.innerHTML = '&#9660'
            ArrowDown.classList.add('btn-key')
        }
        if(e.code === 'ArrowRight'){
            e.preventDefault()
            ArrowRight.innerHTML = '&#9658'
            ArrowRight.classList.add('btn-key')
        }
      
    })
})
}
downButton()
function upButton(){
    document.addEventListener('keyup',(e)=>{
        BTN.forEach((elem)=>{
            if(elem.classList.contains('btn-key')){
                elem.classList.remove('btn-key')
            }
            if(e.code === 'CapsLock'){
                CAPS.classList.add('btn-key')
                e.stopImmediatePropagation() 
            }
        })
    })
    }
    upButton() 
    function textPrinting(){
    const TEXTAREA = document.querySelector('.textarea')
    KEYBOARD.addEventListener('click',(e)=>{  
        let symbol = e.target.innerHTML
       if(e.target.innerHTML === 'Shift' ||e.target.innerHTML === 'Ctrl'||
       e.target.innerHTML === 'Alt' || e.target.innerHTML === 'Win' || 
       e.target.innerHTML === 'Win'|| e.target.innerHTML === 'CapsLock'|| 
       e.target.innerHTML === 'Backspace'|| e.target.innerHTML === 'Delete'){
     symbol = ''
       }
       if(e.target.innerHTML === 'Tab'){
        symbol = '\t'
    }
       if(e.target.innerHTML === 'Enter'){
        symbol = '\n'
    }
     let cursor = TEXTAREA.selectionStart;
     let text = TEXTAREA.value;
     TEXTAREA.value = text + symbol
     cursor++;
    TEXTAREA.focus()
    })
    }
    document.addEventListener('keydown',(e)=>{  
        const TEXTAREA = document.querySelector('.textarea')
        let symbol = e.target.innerHTML
            if(e.code === 'ArrowUp')
            symbol = '▲'
            if(e.code === 'ArrowLeft')
            symbol = '◄'
            if(e.code === 'ArrowDown')
            symbol = '▼'
            if(e.code === 'ArrowRight')
            symbol = '►'
            if(e.code === 'Tab')
            symbol = '\t'
     let cursor = TEXTAREA.selectionStart;
     let text = TEXTAREA.value;
     TEXTAREA.value = text + symbol
     cursor++;
     TEXTAREA.focus()
    })
   
    textPrinting()

    function PressBackspace(){
        const TEXTAREA = document.querySelector('.textarea')
        KEYBOARD.addEventListener('click',(e)=>{  
            let symbol = e.target.innerHTML
           if(e.target.innerHTML === 'Backspace'){
            symbol = ''
            let cursor = TEXTAREA.selectionStart;
            let text = TEXTAREA.value;
          TEXTAREA.value =  text.slice(0, -1)
         cursor--;
        TEXTAREA.focus()
        }
        })
        }
        PressBackspace()


        function PressDel(){
            const TEXTAREA = document.querySelector('.textarea')
            KEYBOARD.addEventListener('click',(e)=>{  
                let symbol = e.target.innerHTML
               if(e.target.innerHTML === 'Delete'){
                symbol = ''
                let cursor = TEXTAREA.selectionStart;
                let text = TEXTAREA.value;
                let stringStart = text.slice(0, cursor);
                let stringEnd = text.slice(cursor + 1, text.length);
              TEXTAREA.value =  stringStart + stringEnd
    TEXTAREA.setSelectionRange(cursor, cursor);
            TEXTAREA.focus()
            }
            })
            }
            PressDel()

           function Caps(){
             
            BTN.forEach((el)=>{
            
             if(CAPS.classList.contains('btn-key')){
                
            if(el.innerHTML !=='Shift' && el.innerHTML !=='Tab' && el.innerHTML !=='Backspace'&& 
            el.innerHTML !=='Enter'&& el.innerHTML !=='CapsLock'&& el.innerHTML !=='Alt'&& el.innerHTML !=='Win'
             && el.innerHTML !=='Ctrl'&& el.innerHTML !=='Delete'){
                 let up = el.innerHTML.toUpperCase() 
                 el.innerHTML = up
                  CAPS.classList.add('btn-key')
             }
             
         }  
             
            })     
}

document.addEventListener('keydown',Caps)
document.addEventListener('click',(e)=>{
    
    if(e.target.innerHTML === 'CapsLock'){
        CAPS.classList.toggle('btn-key')
    BTN.forEach((el)=>{
          if(el.innerHTML!==el.innerHTML.toUpperCase()){           
       if(el.innerHTML !=='Shift' && el.innerHTML !=='Tab' && el.innerHTML !=='Backspace'&& 
       el.innerHTML !=='Enter'&& el.innerHTML !=='CapsLock'&& el.innerHTML !=='Alt'&& el.innerHTML !=='Win'
        && el.innerHTML !=='Ctrl'&& el.innerHTML !=='Delete'){
            let up = el.innerHTML.toUpperCase() 
            el.innerHTML = up
               
        }
          }else{
            if(el.innerHTML !=='Shift' && el.innerHTML !=='Tab' && el.innerHTML !=='Backspace'&& 
            el.innerHTML !=='Enter'&& el.innerHTML !=='CapsLock'&& el.innerHTML !=='Alt'&& el.innerHTML !=='Win'
             && el.innerHTML !=='Ctrl'&& el.innerHTML !=='Delete'){
                 let down = el.innerHTML.toLowerCase() 
                 el.innerHTML = down
                  
             }
          }
        
       })
    
    }
})




