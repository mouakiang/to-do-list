export function renderTodo(booger) {
    // create a div and a p tag
    const divEl = document.createElement('div');
    const pEl = document.createElement('p');

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    // if (todo.complete) {
    //     divEl.classList.add('complete');
    // } else {
    //     divEl.classList.add('incomplete');
    // }
    // add the 'todo' css class no matter what

    // put the todo's text into the p tag
    pEl.textContent = booger.todo;
    // append stuff
    divEl.append(pEl);
    // return the div
    return divEl;
}
