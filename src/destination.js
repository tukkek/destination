import * as rpg from './rpg.js'

class Destination{
  constructor(name,landings=[]){
    this.name=name
    this.landings=landings
  }
  
  toString(){return this.name}
  
  travel(){
    let plan=[this.name]
    if(this.landings.length) plan.push(rpg.pick(this.landings))
    return plan
  }
}

class Category{
  constructor(type,id,destinations){
    this.type=type
    this.id=id
    this.destinations=destinations
  }
}

var destinations=new Category('Destination','destinations',[
  new Destination('European Dead Zone',[]),
  new Destination('Nessus',[]),
  new Destination('Dreaming City',[]),
  new Destination('The Moon',[]),
  new Destination('Cosmodrome',[]),
  new Destination('Europa',[]),
])

var campaigns=new Category('Campaign','campaigns',[
  new Destination('Beyond light'),
  new Destination('Forsaken'),
])

var dungeons=new Category('Dungeon','dungeons',[
  new Destination('Prophecy'),
])
 
var raids=new Category('Raid','raids',[
  new Destination('Vault of glass'),
])
 
var pve=new Category('PvE','pve',[
  new Destination('Strikes'),
  new Destination('Gambit'),
])

var pvp=new Category('PvP','pvp',[
  new Destination('Crucible'),
  new Destination('Iron banner'),
  new Destination('Trial of Osiris'),
])

var categories=[destinations,campaigns,dungeons,raids,pve,pvp]

export function generate(){
  let types=categories.filter(c=>document.querySelector('#'+c.id).checked)
  let t=rpg.pick(types)
  let plan=[t.type]
  plan.push(...rpg.pick(t.destinations).travel())
  return plan
}

