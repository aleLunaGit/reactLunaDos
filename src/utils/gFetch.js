let productos = [{id:"1", nombre:"rtx-3060", tipo:"GPU", precio:"2000", foto: "../assets/gpu.webp"},
{id:"2", nombre:"Asus", tipo:"MBOARD", precio:"800"},
{id:"3", nombre:"Corsair", tipo:"RAM", precio:"700"},
{id:"4", nombre:"AMD Ryzen", tipo:"CPU", precio:"1400"}];

export const gFetch = () => {
    return new Promise(( res, rej )=>{    
      setTimeout(()=>{
        res( productos )
      }, 1000) 
   })
  
  } 
