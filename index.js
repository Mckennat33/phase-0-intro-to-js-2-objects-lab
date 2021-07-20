
// function updateEmployeeAndValue(employee, key, value) {
//    return Object.assign({}, employee, { [key]: value }); 
// }
let employee = {

}

function updateEmployeeWithKeyAndValue(employee, key, value) { 
  return Object.assign({}, employee, {[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) { 
  return Object.assign(employee, {[key]: value})

  //or you can do it this way.

  //employee[key] = value 
  //return employee
}

function deleteFromEmployeeByKey(employee, key){
   const newObject = Object.assign({}, employee)
   delete newObject[key]
   return newObject
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key]
   //const newObject = ({}key)
   //delete newObject[employee] 
   return employee
}





























