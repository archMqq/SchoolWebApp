document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popupContent");
    const closePopup = document.getElementById("closePopup");

    if (!overlay || !popup || !popupContent || !closePopup) {
        console.error("Некоторые элементы не найдены в DOM!");
        return;
    }

    const openPopup = (content) => {
        popupContent.innerHTML = content; // Проверяем, что popupContent существует
        overlay.style.display = "flex";
    };

    const closePopupHandler = () => {
        overlay.style.display = "none";
        popupContent.innerHTML = "";
    };

    document.getElementById("memoryButton").addEventListener("click", () => {
        openPopup("<h2>Текст про память</h2><p>Сюда добавь текст про память.</p>");
    });

    document.getElementById("planButton").addEventListener("click", () => {
        openPopup("<h2>План по запоминанию</h2><p>Сюда добавь план по запоминанию.</p>");
    });

    document.getElementById("instructionsButton").addEventListener("click", () => {
        openPopup("<h2>Инструкция</h2><p>Сюда добавь инструкцию по использованию бота.</p>");
    });

    closePopup.addEventListener("click", closePopupHandler);

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closePopupHandler();
    });
});
