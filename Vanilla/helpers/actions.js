const list = document.getElementById("list");
const undoList = [];

async function openBox() {
    const { value: text,  } = await Swal.fire({
      title: "Add item to list",
      input: "text",
      inputPlaceholder: "Type the text here...",
      showCancelButton: true,
      confirmButtonText: "Add",
      cancelButtonText: "Cancel"
    });
    if (text.trim() === "")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "String cannot be empty."
        });
    else {
        addText(text);
    }
}

function addText(text) {
    let el = document.createElement('li');
    el.textContent = text;
    el.onclick = (event) => select(event);
    el.ondblclick = (event) => remove(event);
    this.list.appendChild(el);
    undoList.push({ type: "add", element: el });
}

function select(e){
    if(e.target.classList.length == 0)
        e.target.classList.add('selected');
    else {
        e.target.classList.remove('selected');
    }
}

function remove(e){
    e.target.remove();
    undoList.push({ type: "delete", element: e.target });
}

function deleteElements() {
  const elements = Array.from(document.getElementsByClassName('selected'));
  const arrayActions = [];

  elements.forEach(el => {
    undoList.push({ type: "delete", element: el });
    arrayActions.push(el);
  });

  // Eliminar en tiempo libre del navegador
  requestIdleCallback(() => {
    arrayActions.forEach(el => el.remove());
  });
}

function undoAction() {
    const lastAction = undoList.pop();
    if (!lastAction) return;
    if (lastAction.type === "add") {
      this.list.removeChild(lastAction.element);
    }
    if (lastAction.type === "delete") {
        lastAction.element.classList = [];
        this.list.appendChild(lastAction.element);
    }
}