function splitWords() {
    const input = document.getElementById("wordsInput").value.trim();
    if (!input) {
        alert("Введите хотя бы однин элемент!");
        return;
    }

    const words = input.split("\n").filter(word => word.trim() !== "");
    const shuffled = words.sort(() => Math.random() - 0.5);
    const middle = Math.ceil(shuffled.length / 2);

    const group1 = shuffled.slice(0, middle);
    const group2 = shuffled.slice(middle);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <div class="group"><strong>Группа 1:</strong> ${group1.join(", ")}</div>
        <div class="group"><strong>Группа 2:</strong> ${group2.join(", ")}</div>
    `;
}