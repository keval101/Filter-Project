
//get input element
let filterInput = document.querySelector('#filter-input');

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    //get value of input
    let filterValue = filterInput.value.toUpperCase();
    console.log(filterValue);

    // get names ul
    let ul = document.getElementById('names');

    //get items from li
    let li = ul.querySelectorAll('li.collection-item');

    //Loop Through Collection item List
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];  
        //if match
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            
            li[i].style.display = '';
        }
        else{
            
            li[i].style.display = 'none';
        }
    }
}