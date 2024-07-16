document.addEventListener('DOMContentLoaded', function() {
    const itemInput = document.getElementById('item');
    const addButton = document.getElementById('add-btn');
    const clearButton = document.getElementById('clear-btn');
    const listContainer = document.getElementById('list-container');
    let shoppingList = [];
  
    // Add button click event
    addButton.addEventListener('click', function() {
      const newItem = itemInput.value.trim();
      if (newItem !== '') {
        shoppingList.push({ name: newItem, completed: false });
        renderList();
        itemInput.value = '';
      }
    });
  
    // Mark item as purchased (click event on list items)
    listContainer.addEventListener('click', function(e) {
      if (e.target && e.target.nodeName === 'LI') {
        const index = e.target.dataset.index;
        shoppingList[index].completed = !shoppingList[index].completed;
        renderList();
      }
    });
  
    // Clear list button click event
    clearButton.addEventListener('click', function() {
      shoppingList = [];
      renderList();
    });
  
    // Function to render the shopping list
    function renderList() {
      listContainer.innerHTML = '';
      shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        if (item.completed) {
          li.classList.add('completed');
        }
        li.dataset.index = index;
        listContainer.appendChild(li);
      });
    }
  });