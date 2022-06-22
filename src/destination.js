import * as rpg from './rpg.js'

class Destination{
  constructor(name,landings=[]){
    this.name=name
    this.landings=landings
  }
  
  toString(){return this.name}
}

class Category{
  constructor(type,destinations){
    this.type=type
    this.destinations=destinations
  }
}

export var pve=new Category('PvE',[
  new Destination('Vanguard'),
])

export var pvp=new Category('PvP',[
  new Destination('Crucible'),
  new Destination('Gambit'),
])

export var legends=new Category('Legends',[
  new Destination('Prophecy'),
  new Destination('Vault of glass'),
])
 
export var destinations=new Category('Destination',[
  new Destination('Cosmodrome',
    ['Fallen SABER',"The devil's lair",'The disgraced','The steppes','Skywatch']),
  new Destination('Dreaming City',['Awakening','Divalian mists']),
  new Destination('Eternity',['Dares of eternity','Treasure hoard']),
  new Destination('European Dead Zone',
    ['Lake of shadows','Sulken isles','The arms dealer','The gulch',
    'The sludge','Trostland','Winding cove']),
  new Destination('Nessus',
    ["Artifact's edge",'Exodus black','Exodus crash','Insight terminus','Inverted spire',
    'The cistern',"Watcher's grave"]),
  new Destination('The Moon',['Sanctuary',"Sorrow's harbor"]),
])

export var campaigns=new Category('Campaign',[
  new Destination('The witch queen'),
])

export var categories=[pve,pvp,legends,destinations,campaigns]

export function generate(){
  let types=categories.filter(c=>document.querySelector('#'+c.type).checked)
  return types.length&&rpg.pick(rpg.pick(types).destinations)
}
