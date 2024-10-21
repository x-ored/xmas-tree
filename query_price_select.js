document.addEventListener('DOMContentLoaded', function() {
    // Устанавливаем цену для размера по умолчанию (180 cm)
    const defaultPrice = document.querySelector('.tree_size.active').getAttribute('data-price');
    const defaultOldPrice = document.querySelector('.tree_size.active').getAttribute('data-old-price');
    document.getElementById('current_price').textContent = `$${defaultPrice}.00 CAD`;
    document.getElementById('old_price').textContent = `$${defaultOldPrice}.00 CAD`;
    
    // Добавляем обработчики на остальные размеры
    document.querySelectorAll('.tree_size').forEach(function(sizeElement) {
        sizeElement.addEventListener('click', function(event) {
            event.preventDefault(); // Останавливаем стандартное действие ссылки
            
            // Убираем активный класс со всех элементов
            document.querySelectorAll('.tree_size').forEach(function(elem) {
                elem.classList.remove('active');
            });
            
            // Добавляем активный класс к выбранному элементу
            this.classList.add('active');
            
            // Получаем данные о новой цене из атрибутов
            const newPrice = this.getAttribute('data-price');
            const newOldPrice = this.getAttribute('data-old-price');
            
            // Обновляем значения цен
            document.getElementById('current_price').textContent = `$${newPrice}.00 CAD`;
            document.getElementById('old_price').textContent = `$${newOldPrice}.00 CAD`;
        });
    });
});
