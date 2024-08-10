
const fs = require("fs")

console.log(fs);

console.log("starting..");

//fs.writeFileSync("kisu.txt" , "kisu is a kartik and kartik is a kisu")
fs.writeFile("kisu.txt","kisu is a good student " ,() => {
    console.log("done ");
    fs.readFile("kisu2.txt" ,(error , data) =>{
        console.log(error , data.toString());
        
    })
    
})
fs.appendFile("kisu" , "kartik " , (e , d) => {
    console.log(d.toString());
    
})
console.log("Ending....");
