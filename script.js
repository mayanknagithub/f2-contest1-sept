let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    arr.forEach(function(element){
        if(element.profession === 'developer'){
            console.log(element);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let output = arr.filter(function(employee){
        if(employee.profession != "admin"){
            return true;
        }
    })
    console.log(output);
  }
  
  let arr1 = [
    { id: 4, name: "harry", age: "22", profession: "intern"},
    { id: 5, name: "shelly", age: "20", profession: "developer"},
    { id: 6, name: "ronaldo", age: "21", profession: "Charted Accountant"},
  ];
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = arr.concat(arr1);
    console.log(newArr);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }