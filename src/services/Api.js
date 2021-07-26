import React from "react";
const Api={
        getListing:(pageNo)=>new Promise((resolve,reject)=>{
            fetch(`https://jsonplaceholder.typicode.com/posts/${pageNo}/comments`,{
                method:'get'
            }).then(res=>res.json())
            .then(res=>{
               resolve(res);
            }).catch(err=>{
                alert("Something went wrong!")
                reject(-1)
            });
        })
}
export default Api;