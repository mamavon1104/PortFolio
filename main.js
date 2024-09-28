document.addEventListener("DOMContentLoaded", function() {
    tippy('[data-tippy-content]');

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

    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.getElementsByClassName('close')[0];
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // ゲームごとのコンテンツデータ
    const gameContents = {
        'ColorBullet': [
            { type: 'youtube', src: 'https://www.youtube.com/embed/RszxIxJ2oz8' },
            { type: 'image', src: 'images/game_icon/ColorBulletIcon.png' },
            { type: 'text', content: 'ColorBulletは、4色のキャラクターが自分のスコアのために他の3色を倒し合うシューティングゲームです。メニュー画面の背景アニメーションなど、常に動いている画面を特徴としています。' }
        ],
        'AnimalEscape': [
            { type: 'youtube', src: 'https://www.youtube.com/embed/oxkTjzeUkec' },
            { type: 'image', src: 'images/game_icon/AnimalEscapeIcon.png' },
            { type: 'text', content: 'AnimalEscapeは、自分の相棒を抱えて投げてジャンプする脱出を目指すアクションゲームです。簡単な操作で楽しめる優しいアクションゲームとなっています。' }
        ],
        '夢現少女': [
            { type: 'youtube', src: 'https://www.youtube.com/embed/jDqVXS9-gls' },
            { type: 'image', src: 'images/game_icon/夢現少女Icon.png' },
            { type: 'text', content: '夢現少女は、少女が不思議な世界を冒険する3Dアクションアドベンチャーゲームです。3Dの操作感や、カメラワークにこだわって制作しました。' }
        ],
        '紅霧の森': [
            { type: 'youtube', src: 'https://www.youtube.com/embed/FQvlzyBUwF8' },
            { type: 'image', src: 'images/game_icon/紅霧の森Icon.png' },
            { type: 'text', content: '紅霧の森は、人形から逃げる薄暗く赤いホラーゲームです。学校の文化祭で制作し、マップの作成とカメラの切り替えを担当しました。' }
        ]
    };

    let currentGameKey = '';
    let currentContentIndex = 0;

    function openModal(gameKey) {
        modal.style.display = 'block';
        currentGameKey = gameKey;
        currentContentIndex = 0;
        showContent();
    }

    function showContent() {
        const content = gameContents[currentGameKey][currentContentIndex];
        let html = '';
        switch(content.type) {
            case 'youtube':
                html = `<iframe width="100%" height="640" src="${content.src}" frameborder="0" allowfullscreen></iframe>`;
                break;
            case 'image':
                html = `<img src="${content.src}" style="max-width:100%; height:auto;">`;
                break;
            case 'text':
                html = `<p style="color: white; font-size: 18px; text-align: center;">${content.content}</p>`;
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

    // 各ゲームアイコンとYouTubeアイコンにクリックイベントを追加
    document.querySelectorAll('.image-container, .youtube-container').forEach((element) => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const gameKey = this.closest('.image-container').dataset.gameKey;
            openModal(gameKey);
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    prevBtn.addEventListener('click', () => changeContent(-1));
    nextBtn.addEventListener('click', () => changeContent(1));

    // Tippyの初期化
    tippy('[data-tippy-content]');
});