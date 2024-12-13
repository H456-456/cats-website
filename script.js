// Загрузка данных из Local Storage при загрузке страницы
window.onload = function() {
    // Радиокнопки
    if(localStorage.getItem('loveCatsYes') === 'true') {
        document.getElementById('loveCatsYes').checked = true;
    } else if(localStorage.getItem('loveCatsNo') === 'true') {
        document.getElementById('loveCatsNo').checked = true;
    }

    // Остальные поля формы
    document.getElementById('catName').value = localStorage.getItem('catName') || 'ваш котик)';
    document.getElementById('secretCatName').value = localStorage.getItem('secretCatName') || '';
    document.getElementById('catColor').value = localStorage.getItem('catColor') || '#000000';
    document.getElementById('catDescription').value = localStorage.getItem('catDescription') || 'ваш ответ будет нами получен😻)';
    document.getElementById('moodSelect').value = localStorage.getItem('mood') || 'неопределился(';
};

// Сохранение данных в Local Storage при изменении формы
document.getElementById('catForm').addEventListener('input', function() {
    // Сохранение состояния радиокнопок
    localStorage.setItem('loveCatsYes', document.getElementById('loveCatsYes').checked);
    localStorage.setItem('loveCatsNo', document.getElementById('loveCatsNo').checked);

    // Сохранение значений других полей формы
    localStorage.setItem('catName', document.getElementById('catName').value);
    localStorage.setItem('secretCatName', document.getElementById('secretCatName').value);
    localStorage.setItem('catColor', document.getElementById('catColor').value);
    localStorage.setItem('catDescription', document.getElementById('catDescription').value);
    localStorage.setItem('mood', document.getElementById('moodSelect').value);
});