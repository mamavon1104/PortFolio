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

    // image-containerのz-indexを設定する
    imageContainers.forEach((container, index) => {
        container.style.zIndex = index; // 上から下への順番でzindexを設定
    });
    for (let i = 0; i < imageContainers.length; i++) {
        const images = imageContainers[i].getElementsByClassName("image");
        const imageText = imageContainers[i].getElementsByClassName("image-text")[0];
        const gitContainer = imageContainers[i].querySelector(".git-container");

        if (i % 2 === 0) {
            images[0].style.marginRight = "auto";
            images[0].style.marginLeft = "10%";
            imageContainers[i].style.background = 'linear-gradient(to left, #FFF0B8, #FFF0B8, #FFD782)';
            imageText.style.left = "30%";
            gitContainer.style.right = "16%";
        } else if (i !== 3) {
            images[0].style.marginLeft = "auto";
            images[0].style.marginRight = "10%";
            imageContainers[i].style.background = 'linear-gradient(to right, #CEF5FF, #E7C7FF)';
            imageText.style.right = "32%";
            gitContainer.style.left = "21%";
        } else {
            images[0].style.marginLeft = "auto";
            images[0].style.marginRight = "10%";
            imageContainers[i].style.background = 'linear-gradient(to left, #8b0000, #320000, #320000, #320000, #000000, #000000)';
            imageText.style.right = "32%";
            gitContainer.style.left = "21%";
        }
    }
});

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
