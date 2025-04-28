function searchWord() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const wordList = document.getElementById("wordList");
    const sections = wordList.getElementsByTagName('h2');

    for (let i = 0; i < sections.length; i++) {
        const ul = sections[i].nextElementSibling;
        const li = ul.getElementsByTagName('li');
        let hasVisible = false;

        for (let j = 0; j < li.length; j++) {
            const txtValue = li[j].textContent || li[j].innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                li[j].style.display = "";
                hasVisible = true;
            } else {
                li[j].style.display = "none";
            }
        }

        // Tampilkan atau sembunyikan judul berdasarkan apakah ada item yang terlihat
        sections[i].style.display = hasVisible ? "" : "none";
        ul.style.display = hasVisible ? "" : "none";
    }
}