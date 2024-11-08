/** @format */

let arr = [
  { id: 1, name: 'john', age: '18', profession: 'developer' },
  { id: 2, name: 'jack', age: '20', profession: 'developer' },
  { id: 3, name: 'karen', age: '19', profession: 'admin' },
]

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(
    (item) =>
      item.profession === 'developer' &&
      console.log(
        `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
      )
  )
}

function PrintDeveloperbyForEach() {
  arr.forEach((item) => {
    item.profession === 'developer' &&
      console.log(
        `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
      )
  })
}

function addData() {
  const newEmployee = { id: 4, name: 'susan', age: '20', profession: 'intern' }
  arr.push(newEmployee)
  console.log(arr)
}

function removeAdmin() {
  const filteredArr = arr.filter((item) => item.profession !== 'admin')
  console.log(filteredArr)
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: 'alice', age: '25', profession: 'developer' },
    { id: 5, name: 'bob', age: '22', profession: 'developer' },
    { id: 6, name: 'lisa', age: '30', profession: 'admin' },
  ]
  const concatenatedArr = arr.concat(newArray)
  console.log(concatenatedArr)
}
