const characters = [
    {
        id: 'scaramouche',
        name: '流浪者',
        category: 'game',
        image: 'images/scaramouche.jpg',
        description: '原神游戏中的角色，性格孤僻复杂的风元素使用者',
        jsonUrl: 'characters/scaramouche.json',
        cardUrl: 'characters/scaramouche.card'
    },
    // 可以继续添加更多角色
];

function renderCharacters(filteredChars = characters) {
    const gallery = document.getElementById('characterGallery');
    gallery.innerHTML = '';

    filteredChars.forEach(char => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}">
            <div class="character-card-content">
                <h3>${char.name}</h3>
                <p>${char.description}</p>
                <div class="download-buttons">
                    <a href="${char.jsonUrl}" download class="download-btn">JSON</a>
                    <a href="${char.cardUrl}" download class="download-btn">角色卡</a>
                </div>
            </div>
        `;
        gallery.appendChild(card);
    });
}

function searchCharacters() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredChars = characters.filter(char =>
        char.name.toLowerCase().includes(searchInput)
    );
    renderCharacters(filteredChars);
}

document.getElementById('categoryFilter').addEventListener('change', (e) => {
    const category = e.target.value;
    const filteredChars = category === 'all'
        ? characters
        : characters.filter(char => char.category === category);
    renderCharacters(filteredChars);
});

// 初始化
renderCharacters();
