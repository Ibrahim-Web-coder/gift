
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("searchInput");
    input.addEventListener("input", function () {
        const filter = input.value.toLowerCase();
        const cards = document.querySelectorAll(".project-card");
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(filter) ? "block" : "none";
        });
    });
});
