const answer = document.getElementById("answer");

function hinzufügen() {
  answer.innerHTML = "";
  fetch(`http://${window.PUBLIC_IP}:3000/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text())
    .then((data) => (answer.innerHTML = data))
    .catch((error) => console.error("Fehler:", error));
}

function abrufen() {
  answer.innerHTML = "";
  fetch(`http://${window.PUBLIC_IP}:3000/all`)
    .then((response) => response.json())
    .then((daten) => {
      const table = document.createElement("table");

      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      ["ID", "Text"].forEach((text) => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      daten.forEach((item) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const textCell = document.createElement("td");
        textCell.textContent = item.text;
        row.appendChild(textCell);

        tbody.appendChild(row);
      });
      table.appendChild(tbody);

      document.getElementById("answer").appendChild(table);
    });
}
