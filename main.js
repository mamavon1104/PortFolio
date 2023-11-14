document.addEventListener("DOMContentLoaded", function() {
    var imageList = document.getElementById("imageList");
    var imageContainers = imageList.getElementsByClassName("image-container");
    var images = imageList.getElementsByClassName("image");


    for (var i = 0; i < images.length; i++) {
        if (i % 2 === 0) {
            images[i].style.marginRight = "auto";
            images[i].style.marginLeft = "5%"; // 左寄せの画像は左マージンを自動に設定
            console.log("Image " + (i + 1) + ":Left");
            imageContainers[i].style.backgroundColor = "#FFE08B";
        } else {
            images[i].style.marginLeft = "auto";
            images[i].style.marginRight = "5%"; // 右寄せの画像は右マージンを自動に設定
            console.log("Image " + (i + 1) + ": Right");
            imageContainers[i].style.backgroundColor = "#A8BCFF";
        }
    }
});