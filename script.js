// Create the "Get Total Price" button and append it to the body
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price"; // Set the button text
document.body.appendChild(getSumBtn);

// Function to calculate the total price and add it to the table
const getSum = () => {
    // Get all the price cells in the table
    const priceCells = document.querySelectorAll(".price");

    let total = 0;

    // Loop through each price cell and add the price to the total
    priceCells.forEach(cell => {
        total += parseFloat(cell.textContent); // Convert text content to a number
    });

    // Create a new row for displaying the total price
    const totalRow = document.createElement("tr");

    // Create the first cell for "Total Price"
    const totalLabelCell = document.createElement("td");
    totalLabelCell.textContent = "Total Price";
    totalLabelCell.setAttribute("colspan", "1"); // Span across one column

    // Create the second cell to display the total amount
    const totalPriceCell = document.createElement("td");
    totalPriceCell.textContent = total.toFixed(2); // Display the total with two decimals

    // Append the new cells to the total row
    totalRow.appendChild(totalLabelCell);
    totalRow.appendChild(totalPriceCell);

    // Append the total row to the table
    const table = document.querySelector("table");
    table.appendChild(totalRow);
};

// Add event listener for button click
getSumBtn.addEventListener("click", getSum);
