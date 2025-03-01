function insert_Row() {
        let table = document.getElementById("table"); // Get the table element
        let tr = document.createElement("tr"); // Create a new <tr> element

        // Optionally, you can add multiple cells
        let td = document.createElement("td");
        td.textContent = "new cell"; // Set the content of the new cell
        tr.appendChild(td); // Append the cell to the row

        table.prepend(tr);

}