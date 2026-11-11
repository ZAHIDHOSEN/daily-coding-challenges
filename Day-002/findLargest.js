

const findLargestNumber = (num)=>{

    let largest = num[0]

    for(let i = 1; i < num.length; i++){
        if(num[i] > largest){
            largest = num[i]
        }
    }
        return largest
}

const myNumber =[1,2,8,55,65,85]
console.log("Largest number", findLargestNumber(myNumber))