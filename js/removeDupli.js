let removeMessage = document.querySelector("#removeMessage");

function removeDupli (array) {
    let result = array.filter((item, index)=>{
        return array.indexOf(item) === index;
    })
    console.log(result);
    removeMessage.innerHTML += `${result} <br></br>`
}

removeDupli([1, 1, 1]);
removeDupli([1, 1, 2, 2, 3, 3]);
removeDupli([5, 23, 8, 5, 5, 44, 23]);