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
        const mediaItems = container.querySelectorAll(".media-item");
        const prevButton = container.querySelector(".nav-button.prev");
        const nextButton = container.querySelector(".nav-button.next");

        let currentItemIndex = 0;

        youtubeContainer.addEventListener("click", function(e) {
            e.preventDefault();
            mediaOverlay.style.display = "flex";
        });

        closeButton.addEventListener("click", function() {
            mediaOverlay.style.display = "none";
        });

        function showMediaItem(index) {
            mediaItems.forEach(item => item.classList.remove("active"));
            mediaItems[index].classList.add("active");
            currentItemIndex = index;
            updateNavButtons();
        }

        function updateNavButtons() {
            prevButton.disabled = currentItemIndex === 0;
            nextButton.disabled = currentItemIndex === mediaItems.length - 1;
        }

        prevButton.addEventListener("click", function() {
            if (currentItemIndex > 0) {
                showMediaItem(currentItemIndex - 1);
            }
        });

        nextButton.addEventListener("click", function() {
            if (currentItemIndex < mediaItems.length - 1) {
                showMediaItem(currentItemIndex + 1);
            }
        });

        // 初期状態のボタン更新
        updateNavButtons();

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