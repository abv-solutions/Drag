const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  fill.className += " hold";
  setTimeout(() => this.className = "invisible", 1)
}
function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  // To permit drop event
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  this.className = "empty";
}
function dragDrop() {
  this.className = "empty";
  // Removes, then appends
  this.appendChild(fill);
}
