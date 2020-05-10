// The WHOLE Xiler Website is under an GNU LESSER GENERAL PUBLIC LICENSE! //
// The license can be found in the github repository with the name `LICENSE`! //

const arrows = document.getElementsByClassName("listener");

var switchFunction = function() {
    this.href = this.getAttribute("href") == "#offer" ? (this.getAttribute("data-position") == "0" ? "#intro" : "#about") : "#offer";
    let arrow = this.getElementsByTagName("i")[0];
    // arrow.classList.toggle("up");
};

for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', switchFunction, false);
}

jQuery(function($) {
    // I know this probably isn't the best way to do it but it works
    $(window).on('scroll', function() {
        const top = $(".arrow").offset().top;

        if(top - 200 <= $(this).scrollTop() && top >= $(this).scrollTop()) {
            if (!arrows[0].getElementsByTagName("i")[0].classList.contains("up")) {
                arrows[0].getElementsByTagName("i")[0].classList.add("up");
                arrows[0].href = "#offer";
            }
            if (arrows[1].getElementsByTagName("i")[0].classList.contains("up")) {
                arrows[1].getElementsByTagName("i")[0].classList.remove("up");
                arrows[1].href = "#offer";
            }
        } else if (top <= $(this).scrollTop()) {
            if (!arrows[1].getElementsByTagName("i")[0].classList.contains("up")) {
                arrows[1].getElementsByTagName("i")[0].classList.add("up");
                arrows[1].href = "#intro";
            }
        } else {
            if (arrows[0].getElementsByTagName("i")[0].classList.contains("up")) {
                arrows[0].getElementsByTagName("i")[0].classList.remove("up");
                arrows[0].href = "#intro";
            }
            if (arrows[1].getElementsByTagName("i")[0].classList.contains("up")) {
                arrows[1].getElementsByTagName("i")[0].classList.remove("up");
                arrows[1].href = "#offer";
            }
        }
    })
});