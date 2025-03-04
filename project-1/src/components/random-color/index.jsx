import { useEffect, useState } from "react";
// import RandomColor from './index';

export default function RandomColor() {
 const[typeofcolor, setTypeofcolor] = useState("hex");
   const [color, setColor] = useState("#000000");
 function RandomColorUtility(length) {
    return Math.floor(Math.random()*length)
 }
 
 function handleCreateRandomHexColor(){
const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexColor = "#";
for(let i=0; i<6; i++){
    hexColor += hex[RandomColorUtility(hex.length)];
}
setColor(hexColor);
}
 function handleCreateRandomrgbColor(){
 const r = RandomColorUtility(256)
 const g = RandomColorUtility(256)
 const b = RandomColorUtility(256)
 setColor(`rgb(${r},${g},${b})`)
 }
  
  useEffect(() => {
 if(typeofcolor === 'rgb') handleCreateRandomrgbColor()
 else handleCreateRandomHexColor

  },[typeofcolor])


    return (
    <div style= {{
        width : '100vw',
        height: '100vw',
        background : color,
    }}>
<button onClick = {()=> setTypeofcolor('hex')}>Create HEX color</button>
<button onClick = {()=> setTypeofcolor('rgb')}>create RGB color</button>
<button onClick={typeofcolor=== 'hex' ? handleCreateRandomHexColor : handleCreateRandomrgbColor}>Generative Random Color</button>
<button onClick={typeofcolor=== 'hex' ? handleCreateRandomHexColor : handleCreateRandomrgbColor}>Generative Random Color</button>

<div style = {
  { 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '60px',
    marginTop: '50px',
    flexDirection: 'column',


  }
}>
  <h3>
    {typeofcolor === 'rgb' ?'RGB Color' : 'HEX color'}
  </h3>
<h1>
  {color}
</h1>
</div>
    </div>
  );
}


