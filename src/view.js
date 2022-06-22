import * as destination from './destination.js'
import * as rpg from './rpg.js'

const GENERATE=document.querySelector('button')
const RESULT=document.querySelector('#result')
const TYPES=document.querySelector('#types')
const CATEGORY=document.querySelector('#category').content.children[0]
const TITLE=RESULT.querySelector('h1')
const DETAILS=RESULT.querySelector('.details')
const LANDINGS=RESULT.querySelector('.landings')

function generate(){
  LANDINGS.innerHTML=''
  let d=destination.generate()
  TITLE.textContent=d.name
  let c=destination.categories.find(c=>c.destinations.indexOf(d)>=0)
  DETAILS.textContent=c.type
  if(!d.landings.length) return
  for(let l of rpg.shuffle(d.landings)){
    let i=document.createElement('li')
    i.textContent=l
    LANDINGS.appendChild(i)
  }
}

export function setup(){
  for(let c of destination.categories){
    let control=CATEGORY.cloneNode(true)
    control.querySelector('span').textContent=c.type
    let i=control.querySelector('input')
    i.id=c.type
    if(c==destination.destinations) i.checked='true'
    TYPES.appendChild(control)
  }
  GENERATE.onclick=generate
  GENERATE.focus()
  generate()
}
