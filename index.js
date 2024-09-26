let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    console.log(cats.push(name))
}


function destructivelyPrependCat(name = "Bob"){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    return [...cats, name]
}

function  prependCat(name){
    return [name, ...cats,]
}

function removeLastCat(){
    return cats.slice(0,2)
}
console.log(removeLastCat())
console.log(cats)

function removeFirstCat(){
    return cats.slice(1)
}
