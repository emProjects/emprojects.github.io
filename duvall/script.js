function showFloatingBanner() {
    var banner = document.getElementById("floating-banner");
    banner.style.display = "block";

    setTimeout(function() {
        banner.style.opacity = "1";
    }, 100);

    setTimeout(function() {
        banner.style.opacity = "0";
    }, 3000);

    setTimeout(function() {
        banner.style.display = "none";
    }, 3500);
}