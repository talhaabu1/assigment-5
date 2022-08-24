const nameArry = [];

function display(nameli){
    console.log(nameli);
    const addlist = document.getElementById('add-li');
    addlist.innerHTML = '';
    for (let i = 0; i < nameli.length; i++) {

        const playerName = nameArry[i].name;

        const li = document.createElement('li');
        li.innerHTML = `
        <li class="list-none text-2xl mb-3"> <span>${i + 1}. </span> <span>${playerName}</span></li>
        `;
        addlist.appendChild(li)
    }
    

}

function nameadd(element){
    const name = element.parentNode.parentNode.children[0].innerText;
    
    element.setAttribute('disabled', true);

    const allElement = {
        name: name
    }
    nameArry.push(allElement)
    // console.log(nameArry);

    const item =  document.getElementById('totale-name');

    if(item.innerText == '5'){
        element.removeAttribute('disabled')
        alert('Canot add more than five players')
        return;
    }
    item.innerText = nameArry.length;
    display(nameArry)
}