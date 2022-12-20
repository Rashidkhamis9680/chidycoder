function largestNumbers(str){
    let maxes = [];
    for (let i = 0; i < str.length; i++){
        let tempmax = str[i][0];
        console.log(tempmax);
        for(let j = 0;  j < str[i].length; j++){
            let currentElement = str[i][j];
            if(currentElement >= tempmax){
                tempmax = currentElement;
            }
        }
        maxes.push(tempmax);
    }
    return maxes;
}
 
console.log(largestNumbers([[4, 2, 9, 7], [64, 3, 97, 34], [67, 82, 1, 10], [73, 55, 49, 32]]));
 


function largestNumbersTwo(str){
    let maxes = [0, 0, 0, 0];
    for (let i = 0; i < str.length; i++){
        for(let j = 0;  j < str[i].length; j++){
            let currentElement = str[i][j];
            if(currentElement >= maxes[i]){
                maxes[i] = currentElement;
            }
        }
        
    }
    return maxes;
}
console.log(largestNumbersTwo([[4, 2, 9, 7], [64, 3, 97, 34], [67, 82, 1, 10], [73, 55, 49, 32]]));


function findmax(str){
    
}



// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
  
//   processUserInput(greeting);
  

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
  }, {});
  console.log(usersObj);