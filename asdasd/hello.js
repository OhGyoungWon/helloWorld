var name = "hello world";


function changeName(name){
    this.name = name;
    return name;
}

changeName("오경원")
console.log(name);