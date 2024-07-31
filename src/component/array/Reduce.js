import React from "react";
export const Reduce=()=>{
    const data=[12,12,11,10,34,45];
    const pricedata=[
        {price:12,id:1,name:'Pen'},
        {price:12,id:2,name:'Pencil'},
        {price:11,id:3,name:'Paper'},
        {price:10,id:4,name:'Copy'},
        {price:34,id:5,name:'Books'},
        {price:45,id:6,name:'Utencils'},
    ]
    
    const sum =data.reduce((p,c)=>{
        // return p+c;
        return  p+c

    },0)
    const max =data.reduce((p,c)=>{
        return  p>c ?p :c

    },0)
    const min =data.reduce((p,c)=>{
        return  p<c ?p:c

    },0)
    const pricesum =pricedata.reduce((p,c)=>{
        console.log("pricedata", p,c)
        return  p+c.price;

    },0)
    console.log('min',min)
    console.log('max',max)
    console.log('sum',sum);
    return(
       <div >
            Reduce 
            <div>Sum={sum}</div>
            <div>Max={max}</div>
            <div>Min={min}</div>
            <div>PriceSum:{pricesum}</div>
            
       </div>
   )
};