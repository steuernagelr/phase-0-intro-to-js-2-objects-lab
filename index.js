// Write your solution in this file!
const employee = {
    
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = { ...employee }

    newObject[key] = value

    return newObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, value, key) {
    employee[value] = key
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key] = undefined
    return employee
}