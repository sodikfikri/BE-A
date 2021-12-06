
const fruits = require('./Fruits.js')

const Index = () => {
    // loop arr
    for(let i of fruits){
        console.log(i)
    }
}

const Find = (index) => {
    let data = fruits[index]

    console.log(data)
}

const Store = (data) => {
    // push data to arr
    fruits.push(data)
    Index()
}

const Update = (index, name) => {
    // update data arr
    fruits[index] = name
    Index()
}

const Destroy = (index) => {
    fruits.splice(index, 1);
    Index()
}

module.exports = {Index, Find, Store, Update, Destroy}