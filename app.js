const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTeemplate = (todo) =>{ //we can delete paranthesis cuz

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
    </li>
    
`;                                     // it's just 1 parameter
    list.innerHTML+=html;
}; 

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTeemplate(todo);
        addForm.reset();
    }
});

// delete todos

list.addEventListener('click', e =>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

});

// Search todos

const filterTodos = (term) => {

    Array.from(list.children)
        .filter((todo) =>  !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));   };

//keyup event 
search.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
