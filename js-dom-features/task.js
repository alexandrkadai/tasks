// Some task
let wrapper = document.getElementById('buttonsWrapper');

for (let row = 1; row <= 20; row++) {
    for (let col = 1; col <= 30; col++) {
      const button = document.createElement("div");
      button.classList.add("buttons");
      button.dataset.row = row;
      button.dataset.col = col;
      wrapper.appendChild(button);
    }
  }
  

wrapper.addEventListener("click", (e) => {
    if (!e.target.classList.contains("buttons")) return;
  
    document.querySelectorAll(".buttons").forEach(button => {
      button.classList.remove("active", "highlight");
      button.textContent = "";
    });
  
    const selected = e.target;
    const row = selected.dataset.row;
    const col = selected.dataset.col;
  
    selected.classList.add("active");
    selected.textContent = `${col}/${row}`;
  
    document.querySelectorAll(`.cell[data-row="${row}"]`).forEach(button =>
      button.classList.add("highlight")
    );
    document.querySelectorAll(`.cell[data-col="${col}"]`).forEach(button =>
      button.classList.add("highlight")
    );
  });