 // Функція для створення таблиці
 function createTable() {
	var table = document.getElementById('dynamic-table');
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;

	var numRows = Math.floor(windowHeight / 400); // Висота кожної комірки
	var numCols = Math.floor(windowWidth / 300); // Ширина кожної комірки

	var tableHTML = '';
	for (var i = 0; i < numRows; i++) {
		tableHTML += '<tr>';
		for (var j = 0; j < numCols; j++) {
			tableHTML += '<td></td>'; // Додаємо комірку у кожен рядок
		}
		tableHTML += '</tr>';
	}

	table.innerHTML = tableHTML;
}

// Викликаємо функцію при завантаженні сторінки та при зміні розміру вікна
window.onload = createTable;
window.onresize = createTable;

// Викликаємо функцію при зміні розміру вікна
window.addEventListener('resize', createTable);