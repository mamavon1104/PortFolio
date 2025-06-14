document.addEventListener("DOMContentLoaded", function() {
    tippy('[data-tippy-content]');

    const imagesDiv = document.getElementById("images");
    const ulElements = imagesDiv.querySelectorAll("ul");
   
    // ゲームごとのコンテンツデータ
    const gameContents = {
        'ColorBullet': [
            { type: 'youtube', src: 'https://www.youtube.com/embed/RszxIxJ2oz8' },
            { type: 'video', src: 'images/contents/color/Player1.mp4'  },
            { type: 'video', src: 'images/contents/color/Player4.mp4'},
            { type: 'video', src: 'images/contents/color/Ranking.mp4'  },
        ],
        'AnimalEscape': [
            { type: 'youtube', src: 'https://www.youtube.com/embed/oxkTjzeUkec' },
            { type: 'video', src: 'images/contents/animal/ItemCatch.mp4'  },
            { type: 'video', src: 'images/contents/animal/PlayerThrow.mp4'  },
            { type: 'video', src: 'images/contents/animal/AudioSetting.mp4'  },
            { type: 'image', src: 'images/contents/animal/game.png' },
        ],
        '夢現少女': [
            { type: 'youtube', src: 'https://www.youtube.com/embed/jDqVXS9-gls' },
            { type: 'image', src: 'images/contents/yumemi/title.png' },
            { type: 'image', src: 'images/contents/yumemi/rule.png' },
        ],
        '紅霧の森': [
            { type: 'youtube', src: 'https://www.youtube.com/embed/GTQlX5eRgXk' },
            { type: 'video', src: 'images/contents/koumu/AudioReverbZone1.mp4'  },
            { type: 'video', src: 'images/contents/koumu/AudioReverbZone2.mp4'  },
            { type: 'video', src: 'images/contents/koumu/ARCode.mp4'  },
            { type: 'image', src: 'images/contents/koumu/Death.png' },
        ],
        'MagnetPlanet': [
            { type: 'youtube', src: 'https://www.youtube.com/embed/UKYhUhxPLYI' },
            { type: 'video', src: 'images/contents/magnet/Interactable4Target2.mp4'  },
            { type: 'video', src: 'images/contents/magnet/Interact.mp4'  },
            { type: 'image', src: 'images/contents/magnet/Blender_MagnetKun.png' },
        ],
        'Unity': [
            { type: 'video', src: 'images/contents/unity/ScriptbaleObjectVideo.mp4'  },
            { type: 'video', src: 'images/contents/unity/PackageManagement.mp4'  },
            { type: 'video', src: 'images/contents/unity/SceneLoad.mp4'  },
            { type: 'image', src: 'images/contents/unity/InputSystemRx.png' },
        ],
    };

    // ゲームごとのテキストデータ
    const gameTexts = {
        'ColorBullet': [
            'ゲームプレイの様子(youtube)です。',
            'コントローラーによってアニメーションが変わるタイトル画面(Player: 1)です。',
            'コントローラーによってアニメーションが変わるタイトル画面(Player: 4)です。',
            'プレイヤーが4人いた時のトータル画面の表示方法です。',
        ],
        'AnimalEscape': [
            'ゲームプレイの様子(youtube)です。',
            'プレイヤーがアイテムをキャッチして扉を開ける映像です。',
            'もう一人のプレイヤーをキャッチして遠くまで投げている映像です。',
            'オーディオ設定している場面の映像です。',
            'ゲーム中に可愛いくてポップな場面もあります😏',
        ],
        '夢現少女': [
            'ゲームプレイの様子(youtube)です。',
            '夢現少女は、少女が不思議な世界を冒険する3Dアクションアドベンチャーゲームです。',
            'ゲームの操作説明',
        ],
        '紅霧の森': [
            'ゲームプレイの様子(youtube)です。',
            'AudioReverbZoneを使用した音の反響(1)です。',
            'AudioReverbZoneを使用した音の反響(2)です。',
            'ArucoUnityによってARコードをカメラで認識している動画です。',
            '死亡時の画像',
        ],
        'MagnetPlanet': [
            'ゲームプレイの様子(youtube)です。',
            'インタラクトできるターゲットポイントの4種類です。(Blender)',
            'インタラクトしたときのサンプル動画です。',
            'Blenderで作成していました。',
        ],
        'Unity': [
            `ScriptableObjectを継承したC#スクリプトとScriptableObjectを自動生成するツールです。`,
            `Unityパッケージのインストールアンインストールを行う拡張機能です。今回はProBuilderを対象にしました。`,
            `現在ビルド設定内にあるシーンを列挙して、クリックするとシーン以降するボタンのエディタ拡張です。`,
            `InputSystemをイベント発行のストリームとして使用できる形に拡張しています。`,
        ],
    };

    // ゲームごとの背景色
    const gameColorArray = [    
        'linear-gradient(to right, #FFD782, #FFF0B8, #FFF0B8)',
        'linear-gradient(to right, #CEF5FF, #E7C7FF)',
        'linear-gradient(to right, #B8E986, #E4F7D4, #E4F7D4)',
        'linear-gradient(to right, #000000, #000000, #320000, #320000, #320000, #8b0000)',
        'linear-gradient(to right, rgb(255, 156, 156), rgb(255, 204, 244), rgb(203, 211, 255))',
        'linear-gradient(to right, rgb(199, 199, 199), rgb(222, 222, 222), rgb(255, 255, 255))',
    ];

    const skillColorArray = [
        'linear-gradient(to right, #FFC1CC, #FFD1DC, #FFE1EC, #FFF1FC)',
        'linear-gradient(to right, #FFFACD, #FFFBD0, #FFFBF0, #FFFDE0)',
        'linear-gradient(to right, #E0F8E0, #D0F8D0, #C0F8C0, #B0F8B0)',
    ];

    let colorIndex = 0;

    ulElements.forEach((ul) => {
        ul.style.background = skillColorArray[colorIndex];
        colorIndex = (colorIndex + 1) % skillColorArray.length;
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
            imageText.style.left = "30%";
            linkContainer.style.right = "20%";
        } else {
            images[0].style.marginLeft = "auto";
            images[0].style.marginRight = "10%";
            imageText.style.right = "32%";
            linkContainer.style.left = "15%";
        }
        container.style.background = gameColorArray[index];
    });

    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.getElementsByClassName('close')[0];
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

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
                html = `<iframe width="150%" height="600vh" src="${content.src}" frameborder="0" allowfullscreen  style="display: block; margin-left: -25%; position: relative;"></iframe>`;
                break;
            case 'image':
                html = `<img src="${content.src}" width="150%" height="600vh" controls style="display: block; margin-left: -25%; position: relative;">`;
                break;
            case 'video':
                html = `<video width="150%" height="600vh" controls style="display: block; margin-left: -25%; position: relative;"><source src="${content.src}" type="video/mp4">Your browser does not support the video tag.</video>`;
                break;
        }

        // コンテンツインジケーターを作成
        const totalContents = gameContents[currentGameKey].length;
        let indicators = '';
        for (let i = 0; i < totalContents; i++) {
            const content = gameContents[currentGameKey][i];
            if (i === currentContentIndex) {
                indicators += getFilledSymbol(content.type);
            } else {
                indicators += getEmptySymbol(content.type);
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

    function getEmptySymbol(contentType) {
        switch(contentType) {
            case 'video': return '□';
            case 'image': return '○';
            case 'youtube': return '☆';
            default: return '△';
        }
    }
    
    function getFilledSymbol(contentType) {
        switch(contentType) {
            case 'video': return '■';
            case 'image': return '●';
            case 'youtube': return '★';
            default: return '▲';
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