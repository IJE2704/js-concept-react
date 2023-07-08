const addToStorage = () => {
    const inputField = document.getElementById('storage-id');
    const id = inputField.value;
    const valueField = document.getElementById('storage-value');
    const value = valueField.value;

    if (id && value) {

        localStorage.setItem(id, value)
        inputField.value = '';
        valueField.value = '';
    }
    const pen ={
        color : 'red',
        price : 10,
        brand : 'matador'
    }
    localStorage.setItem('pen', JSON.stringify(pen));
    const getValue = localStorage.getItem('pen');
    const getValueob = JSON.parse(getValue);
    console.log(getValueob);
    const empty = document.getElementById('empty');
    empty.innerHTML = `<h1>Color : ${getValueob.color}</h1>
                        <h1> Price : ${getValueob.price} </h1>`;
}