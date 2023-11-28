document.addEventListener("DOMContentLoaded", function() {
    var imageList = document.getElementById("imageList");
    var imageContainers = imageList.getElementsByClassName("image-container");

    for (var i = 0; i < imageList.children.length; i++) {
        var images = imageContainers[i].getElementsByClassName("image");  // この行を修正
        var imageText = imageContainers[i].getElementsByClassName("image-text")[0];
        var gitLink = imageContainers[i].getElementsByClassName("git-links")[0];
        
        gitLink.style.marginBottom = "0%";
        if (i % 2 === 0) {
            images[0].style.marginRight = "auto";  // 修正
            images[0].style.paddingLeft = "10%";
            imageContainers[i].style.background = 'linear-gradient(to left,#FFF0B8,#FFD782,#FFD782)';
            imageText.style.left = "30%";
            gitLink.style.right = "20%";
        } else {
            images[0].style.marginLeft = "auto";  // 修正
            images[0].style.paddingRight = "10%";
            imageContainers[i].style.background = 'linear-gradient(to right,#CEF5FF,#E7C7FF)';
            imageText.style.right = "30%";
            gitLink.style.left = "20%";
        }
    }
});