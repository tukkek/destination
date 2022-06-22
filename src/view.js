import * as destination from './destination.js'

const GENERATE=document.querySelector('button')
const RESULT=document.querySelector('#result')

function generate(){RESULT.innerHTML=destination.generate().join(', ')}

export function setup(){
  GENERATE.onclick=generate
  GENERATE.focus()
  generate()
}
