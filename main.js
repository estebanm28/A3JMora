// Select DOM elements
const input = document.querySelector('input'); // Select the input element
const addBtn = document.querySelector('.btn-add'); // Select the add button
const ul = document.querySelector('ul'); // Select the unordered list
const empty = document.querySelector('.empty'); // Select the element with class 'empty'

// Add event listener to the add button
addBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const text = input.value; // Get the value of the input
    if (text !== "") { // Check if the input is not empty
        const li = document.createElement('li'); // Create a new list item
        const checkbox = document.createElement('input'); // Create a new input element
        checkbox.type = 'checkbox'; // Set the type of the input to checkbox
        
        // Add event listener to the checkbox
        checkbox.addEventListener('change', (e) => {
            if (checkbox.checked) { // Check if the checkbox is checked
                li.style.textDecoration = 'line-through'; // Add line-through style to the text
                ul.appendChild(li); // Move the list item to the bottom
            } else { // If the checkbox is not checked
                li.style.textDecoration = 'none'; // Remove the line-through style
            }
        });

        const p = document.createElement('p'); // Create a new paragraph element
        p.textContent = text; // Set the text content of the paragraph to the input value

        li.appendChild(checkbox); // Append the checkbox to the list item
        li.appendChild(p); // Append the paragraph to the list item
        li.appendChild(addDeleteBtn()); // Append the delete button to the list item
        ul.appendChild(li); // Append the list item to the unordered list
        input.value = ""; // Clear the input value
        empty.style.display = "none"; // Hide the 'empty' message
    }
});

// Function to add the delete button
function addDeleteBtn() {
    const deleteBtn = document.createElement('button'); // Create a new button element
    deleteBtn.textContent = "X"; // Set the text content of the button to 'X'
    deleteBtn.className = "btn-delete"; // Add a class to the button
    
    // Add event listener to the delete button
    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement; // Get the parent element (list item)
        ul.removeChild(item); // Remove the list item from the unordered list

        const items = document.querySelectorAll('li'); // Select all list items

        if (items.length === 0) { // Check if there are no list items left
            empty.style.display = "block"; // Show the 'empty' message
        }
    });
    return deleteBtn; // Return the delete button
}

// Removed redundant event listeners for checkbox and deleteBtn outside of their respective functions
