console.log("Use higher order function to filter odd numbers from array and cube of it.");

//  let num=window.prompt("Enter any positive number");
// console.log(num);

// let val=[Array];
// for(val=1;val<=num;val++){
//   console.log(`${val}`)
//}

let inputArray = [];
let size =window.prompt("Enter any positive number");
 console.log(size);

//for(let  inputArray=1; inputArray<=size;inputArray++)
for(let i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = ( + (i+1));
}

//Print the array in the console.
console.log(inputArray);




let evenSquare=inputArray.filter(el=>el%2!==0).map((el)=> el**3)
         

console.log(evenSquare);
//console.log(square);











// console.log(typeof (val));
// let square=val.map((el)=> el**2)

// console.log(square);

// let inputArray
// for(let  inputArray=1; inputArray<=num;inputArray++){
//     console.log( inputArray);

// }
// const datarr=Array.from(inputArray);
// console.log("dataarr");

// console.log(typeof ( inputArray));

//  let square=inputArray.map((el)=> el**2)

// console.log(square);

// let arr=array. reduce((a, b)=>{
//     for(val=1;val<=num;val++){
//         console.log(`${val}`);

//         a.push(val);
//         return a;
        
       
//     },[]);

// }
//  var t = [-1,-2,-3,5,6,1]
//     var positiveArr = [];
//     var negativeArr = [];

//     t.forEach (function(item){
//     if(item<0){
//     negativeArr.push(item);
//     }
//     else{
//     positiveArr.push(item)
//     })
// console.log(positiveArr) // output [5, 6, 1]
// console.log(negativeArr) // output [-1, -2, -3]

// let t =window.prompt("Enter any positive number");
// console.log(t);

// let positiveArr = [];
// for(let positiveArr=1;positiveArr<=t;positiveArr++){
//     console.log(`${positiveArr}`);


// positiveArr.forEach (function(item) {
    
// positiveArr.push(item);


// })
// console.log(positiveArr) 
// }

