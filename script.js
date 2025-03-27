document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.querySelector(".add-button");
  const cpfInput = document.querySelector(".cpf-tab");
  const nameInput = document.querySelector(".name-tab");
  const outputElements = document.querySelector(".output-elements");

  addButton.addEventListener("click", function() {
    const cpfValue = cpfInput.value.trim();
    const nameValue = nameInput.value.trim();

    if (cpfValue === "" || nameValue === "") {
      alert("Por favor, preencha ambos os campos.");
      return;
    }

    // Cria uma nova linha
    const row = document.createElement("div");
    row.classList.add("first-row");

    // Cria as colunas
    const cpfColumn = document.createElement("div");
    cpfColumn.classList.add("first-column");
    cpfColumn.textContent = cpfValue;

    const nameColumn = document.createElement("div");
    nameColumn.classList.add("second-colum");
    nameColumn.textContent = nameValue;

    const actionsColumn = document.createElement("div");
    actionsColumn.classList.add("third-colum");

    // Cria o ícone de lixeira
    const deleteIcon = document.createElement("span");
    deleteIcon.textContent = "🗑️"; // Você pode usar um ícone de lixeira aqui
    deleteIcon.style.cursor = "pointer";
    deleteIcon.addEventListener("click", function() {
      outputElements.removeChild(row);
    });

    // Adiciona as colunas à linha
    actionsColumn.appendChild(deleteIcon);
    row.appendChild(cpfColumn);
    row.appendChild(nameColumn);
    row.appendChild(actionsColumn);

    // Adiciona a nova linha à lista de saída
    outputElements.appendChild(row);

    // Limpa os campos de entrada
    cpfInput.value = "";
    nameInput.value = "";
  });
});