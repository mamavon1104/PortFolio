document.addEventListener("DOMContentLoaded", function() {
    const imagesDiv = document.getElementById("images");
    const ulElements = imagesDiv.querySelectorAll("ul");
   
    const colors = [
        'linear-gradient(to right, #FFC1CC, #FFD1DC, #FFE1EC, #FFF1FC)',
        'linear-gradient(to right, #FFFACD, #FFFBD0, #FFFBF0, #FFFDE0)',
        'linear-gradient(to right, #E0F8E0, #D0F8D0, #C0F8C0, #B0F8B0)',
    ];
    let colorIndex = 0;
   
    ulElements.forEach((ul) => {
        ul.style.background = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
   
    const imageList = document.getElementById("imageList");
    const imageContainers = document.querySelectorAll(".image-container");
    
    imageContainers.forEach((container, index) => {
        container.style.zIndex = index;
        
        const images = container.getElementsByClassName("game-icon");
        const imageText = container.getElementsByClassName("image-text")[0];
        const linkContainer = container.getElementsByClassName("link-container")[0];
        
        if (index % 2 === 0) {
            images[0].style.marginRight = "auto";
            images[0].style.marginLeft = "10%";
            container.style.background = 'linear-gradient(to left, #FFF0B8, #FFF0B8, #FFD782)';
            imageText.style.left = "30%";
            linkContainer.style.right = "20%";
        } else if (index !== 3) {
            images[0].style.marginLeft = "auto";
            images[0].style.marginRight = "10%";
            container.style.background = 'linear-gradient(to right, #CEF5FF, #E7C7FF)';
            imageText.style.right = "32%";
            linkContainer.style.left = "15%";
        } else {
            images[0].style.marginLeft = "auto";
            images[0].style.marginRight = "10%";
            container.style.background = 'linear-gradient(to left, #8b0000, #320000, #320000, #320000, #000000, #000000)';
            imageText.style.right = "32%";
            linkContainer.style.left = "15%";
        }
    });
});

// モーダルウィンドウとコンテンツ制御のためのJavaScript
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modalContent');
const close = document.getElementsByClassName('close')[0];

// ゲームごとのコンテンツデータ
const gameContents = {
    'ColorBullet': [
        { type: 'youtube', src: 'https://www.youtube.com/embed/RszxIxJ2oz8' },
        { type: 'image', src: 'images/game_icon/ColorBulletIcon.png' },
        { type: 'video', src: 'path/to/ColorBullet.mp4' }
    ],
    'AnimalEscape': [
        { type: 'youtube', src: 'https://www.youtube.com/embed/oxkTjzeUkec' },
        { type: 'image', src: 'images/game_icon/AnimalEscapeIcon.png' },
        { type: 'video', src: 'path/to/AnimalEscape.mp4' }
    ],
    '夢現少女': [
        { type: 'youtube', src: 'https://www.youtube.com/embed/jDqVXS9-gls' },
        { type: 'image', src: 'images/game_icon/夢現少女Icon.png' },
        { type: 'video', src: 'path/to/夢現少女.mp4' }
    ],
    '紅霧の森': [
        { type: 'youtube', src: 'https://www.youtube.com/embed/FQvlzyBUwF8' },
        { type: 'image', src: 'images/game_icon/紅霧の森Icon.png' },
        { type: 'video', src: 'path/to/紅霧の森.mp4' }
    ]
};

let currentGameKey = '';
let currentContentIndex = 0;

function openModal(gameKey, index = 0) {
    modal.style.display = 'block';
    currentGameKey = gameKey;
    currentContentIndex = index;
    showContent();
}

function showContent() {
    const content = gameContents[currentGameKey][currentContentIndex];
    let html = '';
    switch(content.type) {
        case 'youtube':
            html = `<iframe width="100%" height="400" src="${content.src}" frameborder="0" allowfullscreen></iframe>`;
            break;
        case 'image':
            html = `<img src="${content.src}" style="width:100%">`;
            break;
        case 'video':
            html = `<video width="100%" controls><source src="${content.src}" type="video/mp4"></video>`;
            break;
    }
    modalContent.innerHTML = html;
}

function changeContent(n) {
    currentContentIndex += n;
    const contentLength = gameContents[currentGameKey].length;
    if (currentContentIndex >= contentLength) currentContentIndex = 0;
    if (currentContentIndex < 0) currentContentIndex = contentLength - 1;
    showContent();
}

close.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// 各ゲームのYouTube関連のコンテナにクリックイベントを追加
document.querySelectorAll('.youtube-container').forEach((container) => {
    container.onclick = function(e) {
        e.preventDefault(); // デフォルトのリンク動作を防止
        const gameKey = this.closest('.image-container').querySelector('.game-icon').alt.split(' ')[0];
        openModal(gameKey);
    };
});