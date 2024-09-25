document.addEventListener("DOMContentLoaded", function() {
    const imagesDiv = document.getElementById("images");
    const ulElements = imagesDiv.querySelectorAll("ul");
    
    const colors = [
        'linear-gradient(to right, #FFC1CC, #FFD1DC, #FFE1EC, #FFF1FC)', // 赤系の淡いグラデーション
        'linear-gradient(to right, #FFFACD, #FFFBD0, #FFFBF0, #FFFDE0)',  // 黄色系の淡いグラデーション
        'linear-gradient(to right, #E0F8E0, #D0F8D0, #C0F8C0, #B0F8B0)', // 緑系の淡いグラデーション
    ];
    let colorIndex = 0;
    
    ulElements.forEach((ul) => {
        ul.style.background = colors[colorIndex];
        colorIndex++;
        if (colorIndex === colors.length) {
            colorIndex = 0;
        }
    });
        
    const imageList = document.getElementById("imageList");
    const imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach((container, index) => {
        container.style.zIndex = imageContainers.length - index;

        const youtubeContainer = container.querySelector(".youtube-container");
        const mediaOverlay = container.querySelector(".media-overlay");
        const closeButton = container.querySelector(".close-button");
        const tabButtons = container.querySelectorAll(".tab-button");
        const tabContents = container.querySelectorAll(".tab-content");

        youtubeContainer.addEventListener("click", function(e) {
            e.preventDefault();
            mediaOverlay.style.display = "flex";
        });

        closeButton.addEventListener("click", function() {
            mediaOverlay.style.display = "none";
        });

        tabButtons.forEach(button => {
            button.addEventListener("click", function() {
                const tab = this.dataset.tab;
                tabButtons.forEach(btn => btn.classList.remove("active"));
                tabContents.forEach(content => content.classList.remove("active"));
                this.classList.add("active");
                container.querySelector(`.tab-content.${tab}`).classList.add("active");
            });
        });

        if (index % 2 === 0) {
            container.querySelector(".game-icon").style.marginRight = "auto";
            container.querySelector(".game-icon").style.marginLeft = "10%";
            container.style.background = 'linear-gradient(to left, #FFF0B8, #FFF0B8, #FFD782)';
            container.querySelector(".image-text").style.left = "30%";
            container.querySelector(".link-container").style.right = "20%";
        } else {
            container.querySelector(".game-icon").style.marginLeft = "auto";
            container.querySelector(".game-icon").style.marginRight = "10%";
            container.style.background = 'linear-gradient(to right, #CEF5FF, #E7C7FF)';
            container.querySelector(".image-text").style.right = "32%";
            container.querySelector(".link-container").style.left = "15%";
        }
    });

    const mediaItems = document.querySelectorAll('.media-item');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    let currentIndex = 1;

    function showItem(index) {
        mediaItems.forEach(item => item.classList.remove('active'));
        mediaItems[index - 1].classList.add('active');
        currentIndex = index;
    }
    function showPrevItem() {
        let newIndex = currentIndex - 1;
        if (newIndex < 1) newIndex = mediaItems.length;
        showItem(newIndex);
    }
    function showNextItem() {
        let newIndex = currentIndex + 1;
        if (newIndex > mediaItems.length) newIndex = 1;
        showItem(newIndex);
    }
    
    prevButton.addEventListener('click', showPrevItem);
    nextButton.addEventListener('click', showNextItem);
    // キーボードナビゲーションのサポート
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') showPrevItem();
        if (e.key === 'ArrowRight') showNextItem();
    });
});

function changeMainScreenshot(src, gameIndex) {
    document.getElementById(`main-screenshot-${gameIndex}`).src = src;
}

const targets = document.querySelectorAll('.js-scroll-curtain');
let isSet = false;

window.addEventListener('scroll', function () {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    targets.forEach(target => {
        const targetPos = target.getBoundingClientRect().top + scroll;
        if (scroll > targetPos - windowHeight && !isSet) {
            isSet = true;
            console.log("aaa");
        }
    });
});