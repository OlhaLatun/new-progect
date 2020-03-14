let importantUrgent;
let importantNotUrgent;
let notImportantUrgent;
let notImportantNotUrgent;

(function() {
  importantUrgent = document.getElementById("importantUrgent");
  importantNotUrgent = document.getElementById("importantNotUrgent");
  notImportantUrgent = document.getElementById("notImportantUrgent");
  notImportantNotUrgent = document.getElementById("notImportantNotUrgent");

  const quadrants = [
    importantUrgent,
    importantNotUrgent,
    notImportantUrgent,
    notImportantNotUrgent
  ];

  quadrants.forEach(quadrant => {
    const button = quadrant.getElementsByTagName("button")[0];
    button.addEventListener("click", () => {
      addNewTask(quadrant);
    });
  });
})();

function addNewTask(quadrant) {
  console.log(quadrant);
  const value = getInputValue(quadrant);
  if (value) {
    addNewItem(value, quadrant);
  } else {
    alert("No task added");
  }
}

function getInputValue(quadrant) {
  const getValue = quadrant.getElementsByClassName("new-task")[0].value;
  return getValue;
}

function addNewItem(value, quadrant) {
  const list = quadrant.getElementsByClassName("toDoList")[0];
  const newTask = getLiWithText(value);
  list.appendChild(newTask);
}

function getLiWithText(value) {
  const newListItem = document.createElement("li");
  const checkbox = getCheckbox();
  const text = document.createTextNode(" " + value);
  const space = document.createTextNode(" ");
  const icon = getDeleteIcon();
  newListItem.appendChild(checkbox);
  newListItem.appendChild(text);
  newListItem.appendChild(space);
  newListItem.appendChild(icon);
  return newListItem;
}

function getCheckbox() {
  const input = document.createElement("input");
  input.type = "checkbox";
  return input;
}

function getDeleteIcon() {
  const i = document.createElement("i");
  i.className = "fas fa-trash";
  return i;
}
