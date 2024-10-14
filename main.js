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
            { type: 'video', src: 'images/contents/color/1Player.mp4'  },
            { type: 'video', src: 'images/contents/color/1Player.mp4'  },
            { type: 'image', src: 'images/contents/color/4Player.mp4'},
            { type: 'youtube', src: 'https://www.youtube.com/embed/RszxIxJ2oz8' },
        ],
        'AnimalEscape': [
            { type: 'video', src: 'images/contents/animal/ItemCatch.mp4'  },
            { type: 'video', src: 'images/contents/animal/PlayerThrow.mp4'  },
            { type: 'video', src: 'images/contents/animal/AudioSetting.mp4'  },
            { type: 'image', src: 'images/contents/animal/game.png' },
            { type: 'youtube', src: 'https://www.youtube.com/embed/oxkTjzeUkec' },
        ],
        '夢現少女': [
            { type: 'video', src: 'videos/夢現少女_gameplay.mp4' },
            { type: 'image', src: 'images/game_icon/夢現少女Icon.png' },
            { type: 'youtube', src: 'https://www.youtube.com/embed/jDqVXS9-gls' },
        ],
        '紅霧の森': [
            { type: 'video', src: 'videos/紅霧の森_gameplay.mp4' },
            { type: 'image', src: 'images/game_icon/紅霧の森Icon.png' },
            { type: 'youtube', src: 'https://www.youtube.com/embed/FQvlzyBUwF8' },
        ]
    };

    // ゲームごとのテキストデータ
    const gameTexts = {
        'ColorBullet': [
            'ColorBulletは、4色のキャラクターが自分のスコアのために他の3色を倒し合うシューティングゲームです。',
            'ゲームアイコン',
            'ゲームプレイの様子'
        ],
        'AnimalEscape': [
            'AnimalEscapeは、自分の相棒を抱えて投げてジャンプする脱出を目指すアクションゲームです。',
            'ゲームアイコン',
            'ゲームプレイの様子'
        ],
        '夢現少女': [
            '夢現少女は、少女が不思議な世界を冒険する3Dアクションアドベンチャーゲームです。',
            'ゲームアイコン',
            'ゲームプレイの様子'
        ],
        '紅霧の森': [
            '紅霧の森は、人形から逃げる薄暗く赤いホラーゲームです。',
            'ゲームアイコン',
            'ゲームプレイの様子'
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
        const text = gameTexts[currentGameKey][currentContentIndex] || "";
        let html = '';

        switch(content.type) {
            case 'youtube':
                html = `<iframe width="100%" height="400vh" src="${content.src}" frameborder="0" allowfullscreen style="display: block; margin: 0 auto;"></iframe>`;
                break;
            case 'image':
                html = `<img src="${content.src}" style="width="100%" height="400vh"; display: block; margin: 0 auto;">`;
                break;
            case 'video':
                html = `<video width="100%" height="400vh" controls style="display: block; margin: 0 auto;"><source src="${content.src}" type="video/mp4">Your browser does not support the video tag.</video>`;
                break;
        }

        // コンテンツインジケーターを作成
        const totalContents = gameContents[currentGameKey].length;
        let indicators = '';
        for (let i = 0; i < totalContents; i++) {
            if (i === currentContentIndex) {
                indicators += getFilledSymbol(i);
            } else {
                indicators += getEmptySymbol(i);
            }
        }

        modalContent.innerHTML = `
            ${html}
            <p style="color: white; font-size: 18px; text-align: center; max-width: 90%; margin: 10px auto 0;">${text}</p>
            <div style="color: white; font-size: 24px; text-align: center; margin-top: 10px;">
                ${indicators}
            </div>
            <p style="color: white; font-size: 16px; text-align: center; margin-top: 5px;">
                ${currentContentIndex + 1} / ${totalContents}
            </p>
        `;
    }

    function getEmptySymbol(index) {
        switch(index) {
            case 0: return '☆';
            case 1: return '○';
            case 2: return '△';
            default: return '□';
        }
    }

    function getFilledSymbol(index) {
        switch(index) {
            case 0: return '★';
            case 1: return '●';
            case 2: return '▲';
            default: return '■';
        }
    }

    function changeContent(n) {
        currentContentIndex += n;
        const contentLength = gameContents[currentGameKey].length;
        if (currentContentIndex >= contentLength) currentContentIndex = 0;
        if (currentContentIndex < 0) currentContentIndex = contentLength - 1;
        showContent();
    }
    // YouTubeアイコンにのみクリックイベントを追加
    document.querySelectorAll('.youtube-container').forEach((element) => {
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