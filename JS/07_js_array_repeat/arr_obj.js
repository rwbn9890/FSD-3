
let data = [
    {
        id:1,
        name:"Krishnal",
        course:"FSD",
        branch:"RWBN1",
        subjects:["html", "css", "js"]
    },
    {
        id:2,
        name:"Jay",
        course:"FSD",
        branch:"RWBN1",
        subjects:["html", "css", "js"]
    },
    {
        id:3,
        name:"Amit",
        course:"FSD",
        branch:"RWBN1",
        subjects:["html", "css", "js"]
    },
    {
        id:4,
        name:"Vijay",
        course:"Graphic",
        branch:"RWBN1",
        subjects:["ph", "Ai", "Xd"]
    },
    {
        id:5,
        name:"Krisha",
        course:"FED",
        branch:"RWBN1",
        subjects:["Bootstrap", "js", "react"]
    },
    {
        id:6,
        name:"Brij",
        course:"UI/UX",
        branch:"RWBN1",
         subjects:["figma", "ds", "Canva"]
    },
]

// let ind = data.findIndex((ele)=> ele.subjects[0] == "figma" )
// console.log(ind)


// let every = data.every((ele) => ele.branch == "RWBN1")
// console.log(every)



// let some = data.some((ele) => ele.course == "ml")
// console.log(some)


// let newData = data.map(function(ele){
//     if(ele.course == "FSD"){
//         ele.subjects.push("Node")
//     }
//     return ele;
// })
// console.log(newData)


// let filterArray = data.filter((ele) => ele.course == "FSD" )

let filterArray = data.filter((ele) => ele.subjects.includes("js") )

console.log(filterArray)