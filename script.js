//SEARCH INPUT
let filterInput = document.getElementById('searchInput');

filterInput.addEventListener('keyup', (e) => {
    let filterNames = e.target.value.toUpperCase();

    let names = document.getElementById('names');

    let li = names.querySelectorAll('li.item');

    for(let i=0; i<li.length; i++) {
       let a = li[i].getElementsByTagName('a')[0];

       if(a.innerHTML.toUpperCase().indexOf(filterNames)> -1){
           li[i].style.display = "";
       }else {
            li[i].style.display = "none";
       }
    }
});