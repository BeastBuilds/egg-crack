function crackEgg() {
    const eggImage = document.getElementById("eggImage");
    eggImage.src = "Egg2.png"; // Change to cracked egg image
    eggImage.alt = "Cracked Egg";

    // Wait for 1 second before navigating to the next page
    setTimeout(() => {
        window.location.href = 'page3.html';
    }, 1000);
}
