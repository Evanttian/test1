let names = ["Aaron", "Benjamin", "Charlie"]; // Default list of names
let isRandomizing = false;
let intervalId;
let mode = 'school'; // Default mode is school mode

const icons = [
    // Animals
    '🦄', '🦊', '🐶', '🐱', '🐭', '🐹', '🐰', '🦁', '🐯', '🦓',
    '🦒', '🐪', '🐘', '🦔', '🐿️', '🦉', '🦇', '🦋', '🐌', '🦎',
    '🐢', '🐍', '🦕', '🦖', '🐊', '🦈', '🐠', '🐟', '🐡', '🦐',
    '🦑', '🐙', '🦀', '🦞', '🦆', '🦢', '🦚', '🦩', '🦜', '🐸',
    '🐊', '🦖', '🦕', '🦔', '🐾', '🐅', '🦓', '🦒', '🦏', '🦛',
    '🐘', '🐪', '🐫', '🦘', '🐃', '🐄', '🐎', '🐖', '🐏', '🐑',
    '🦙', '🐐', '🦌', '🐕', '🐩', '🐈', '🐓', '🦃', '🦚', '🦜',
    '🦢', '🕊️', '🐇', '🦝', '🦨', '🦡', '🦦', '🦥', '🐁', '🐀',
    '🐿️', '🦔', '🦗', '🐜', '🐝', '🐞', '🦟', '🦂', '🕷️', '🕸️',
    
    // Sports
    '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸',
    '🏒', '🏑', '🥍', '🏏', '🥎', '🏹', '🎣', '🥊', '🥋', '🎽',
    '🛹', '🛷', '⛸️', '🥌', '🎿', '⛷️', '🏂', '🏄‍♂️', '🏄‍♀️', '🏊‍♂️',
    '🏊‍♀️', '🤽‍♂️', '🤽‍♀️', '🚣‍♂️', '🚣‍♀️', '🧗‍♂️', '🧗‍♀️', '🚵‍♂️', '🚵‍♀️', '🚴‍♂️',
    '🚴‍♀️', '🏇', '🧘‍♂️', '🧘‍♀️', '🏋️‍♂️', '🏋️‍♀️', '🚴‍♂️', '🚴‍♀️', '🚵‍♂️', '🚵‍♀️',
    '🤺', '🤼‍♂️', '🤼‍♀️', '🤸‍♂️', '🤸‍♀️', '🤾‍♂️', '🤾‍♀️', '🏌️‍♂️', '🏌️‍♀️', '🏇',
    '🧘‍♂️', '🧘‍♀️', '🏋️‍♂️', '🏋️‍♀️', '🚴‍♂️', '🚴‍♀️', '🚵‍♂️', '🚵‍♀️', '🤺', '🤼‍♂️',
    '🤼‍♀️', '🤸‍♂️', '🤸‍♀️', '🤾‍♂️', '🤾‍♀️', '🏌️‍♂️', '🏌️‍♀️', '🏇', '🧘‍♂️', '🧘‍♀️'
  ];
  

// Function to get a random icon from the icons array
function getRandomIcon() {
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
}
  
function showName(index) {
    const nameContainer = document.getElementById('name-container');
    const randomIcon = getRandomIcon(); // Get a random icon
    nameContainer.innerHTML = `
      <span class="random-icon">${randomIcon}</span>
      ${names[index]}
    `;
  }

// Function to get a random animal icon from the animalIcons array
function getRandomAnimalIcon() {
  const randomIndex = Math.floor(Math.random() * animalIcons.length);
  return animalIcons[randomIndex];
}

function showName(index) {
    const nameContainer = document.getElementById('name-container');
    nameContainer.innerHTML = `
      <span class="random-icon">${getRandomIcon()}</span>
      ${names[index]}
    `;
  }

function randomizeNames() {
  const totalNames = names.length;
  const totalTime = 7000; // Total time for randomization (in milliseconds)
  const intervalStep = 50; // Initial time interval between each name change (in milliseconds)
  const finalInterval = 500; // Time interval for the final name (in milliseconds)
  const steps = Math.floor((totalTime - finalInterval) / intervalStep); // Number of steps in the randomization

  let currentIndex = 0;
  let currentInterval = intervalStep;
  let step = 0;
  let elapsedTime = 0;

  function changeName() {
    currentIndex = Math.floor(Math.random() * totalNames); // Randomly pick a name index
    showName(currentIndex);

    elapsedTime += currentInterval;

    if (elapsedTime < totalTime) {
      if (step < steps) {
        step++;
        currentInterval = intervalStep + ((finalInterval - intervalStep) * step) / steps;
      } else {
        // Gradually increase interval if remaining time is less than the finalInterval
        const remainingTime = totalTime - elapsedTime;
        currentInterval = intervalStep + ((finalInterval - intervalStep) * remainingTime) / finalInterval;
      }

      intervalId = setTimeout(changeName, currentInterval); // Assign intervalId here
    } else {
      // When the total time is reached, display the final name and enable the button
      showName(currentIndex);
      const randomizeButton = document.getElementById('randomize-btn');
      randomizeButton.disabled = false;
      randomizeButton.textContent = '🎉 Randomize Names 🎉';
      isRandomizing = false; // Reset the flag when the randomization is complete
    }
  }

  isRandomizing = true; // Set the flag when the randomization starts
  changeName(); // Start the randomization process
}

function startRandomization() {
  if (!isRandomizing) {
    const randomizeButton = document.getElementById('randomize-btn');
    randomizeButton.disabled = true;
    randomizeButton.textContent = '🎉 Randomizing 🎉';

    randomizeNames(); // Start the randomization process
  }
}

function stopRandomization() {
  if (isRandomizing) {
    const randomizeButton = document.getElementById('randomize-btn');
    randomizeButton.disabled = false;
    randomizeButton.textContent = '🎉 Randomize Names 🎉';

    isRandomizing = false;
    clearInterval(intervalId);

    // Display the current name at the time of stopping
    const currentIndex = Math.floor(Math.random() * names.length);
    showName(currentIndex);
  }
}

function addName() {
  const nameInput = document.getElementById('name-input');
  const newName = nameInput.value.trim();

  if (newName !== '') {
    names.push(newName);
    nameInput.value = '';
    updateNameList();
  }
}

function removeName(index) {
  names.splice(index, 1);
  updateNameList();
}

function updateNameList() {
    const nameList = document.getElementById('name-list');
    nameList.innerHTML = '';
  
    names.forEach((name, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${name}</span>
        <span class="remove-name" onclick="removeName(${index})">&times;</span>
      `;
      nameList.appendChild(listItem);
    });
  
    // Display the names in the Add Name table by default
    const addNameContainer = document.getElementById('add-name-container');
    addNameContainer.style.display = names.length > 0 ? 'block' : 'none';
  
    // Save the names to local storage
    saveNamesToLocalStorage();
  }

  function saveNamesToLocalStorage() {
    // Convert the names array to a JSON string
    const namesJSON = JSON.stringify(names);
  
    // Save the JSON string to the "names" key in local storage
    localStorage.setItem('names', namesJSON);
  }

  function loadNamesFromLocalStorage() {
    // Get the JSON string from local storage for the "names" key
    const namesJSON = localStorage.getItem('names');
  
    // If the "names" key exists in local storage, parse the JSON string to get the names array
    if (namesJSON) {
      names = JSON.parse(namesJSON);
    }
  }

window.addEventListener('load', function () {
  // Load names from local storage when the page loads
  loadNamesFromLocalStorage();

  // Update the name list on the webpage with the loaded names
  updateNameList();
});

  // Display the names in the Add Name table by default
  const addNameContainer = document.getElementById('add-name-container');
  addNameContainer.style.display = names.length > 0 ? 'block' : 'none';

// Function to save the current name list to local storage
function saveNameList() {
    const nameListName = prompt("Enter a name for the list:");
    if (nameListName) {
      const savedLists = JSON.parse(localStorage.getItem('savedLists')) || {};
      savedLists[nameListName] = names.slice(); // Create a copy of the names array to avoid referencing issues
      localStorage.setItem('savedLists', JSON.stringify(savedLists));
      updateSavedListsDropdown();
    }
  }
  
  // Function to load the selected name list from local storage
  function loadSelectedList() {
    const selectedListName = document.getElementById('name-list-dropdown').value;
    if (selectedListName) {
      names = JSON.parse(localStorage.getItem('savedLists'))[selectedListName];
      updateNameList();
    }
  }
  
// Function to update the dropdown menu with saved lists
function updateSavedListsDropdown() {
    const savedLists = JSON.parse(localStorage.getItem('savedLists')) || {};
    const dropdown = document.getElementById('name-list-dropdown');
    dropdown.innerHTML = '<option value="">Select a saved list</option>';
  
    Object.keys(savedLists).forEach(listName => {
      const option = document.createElement('option');
      option.value = listName;
      option.text = listName;
      dropdown.add(option);
    });
  
    // Enable or disable the "Delete" button based on whether a list is selected
    const deleteButton = document.getElementById('delete-button');
    deleteButton.style.display = dropdown.value ? 'block' : 'none';
  }

  const deleteButtonsContainer = document.createElement('div');
  deleteButtonsContainer.id = 'delete-buttons';
  Object.keys(savedLists).forEach(listName => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      deleteSavedList(listName);
    };
    deleteButtonsContainer.appendChild(deleteButton);
  });

  dropdown.parentNode.appendChild(deleteButtonsContainer);

// Function to delete the selected saved list from local storage
function deleteSelectedList() {
    const selectedListName = document.getElementById('name-list-dropdown').value;
    if (selectedListName) {
      const savedLists = JSON.parse(localStorage.getItem('savedLists')) || {};
      delete savedLists[selectedListName];
      localStorage.setItem('savedLists', JSON.stringify(savedLists));
      updateSavedListsDropdown(); // Refresh the dropdown to remove the deleted list
    }
  }

// Function to delete a saved list from local storage
function deleteSavedList(listName) {
    const savedLists = JSON.parse(localStorage.getItem('savedLists')) || {};
    delete savedLists[listName];
    localStorage.setItem('savedLists', JSON.stringify(savedLists));
    updateSavedListsDropdown(); // Refresh the dropdown to remove the deleted list
  }

  window.addEventListener('load', function () {
    // Load names from local storage when the page loads
    loadNamesFromLocalStorage();
  
    // Update the name list on the webpage with the loaded names
    updateNameList();
  
    // Populate the dropdown with saved lists
    updateSavedListsDropdown();
  });