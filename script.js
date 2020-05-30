console.log("Alhamdulillah")
alert("Terima Kasih Ya Allah");

function readMore(coolbutton) {
    let dots = document.querySelector(`.button-code[code-button="${coolbutton}"] .dots`);
    let moreText = document.querySelector(`.button-code[code-button="${coolbutton}"] .more`);
    let btnText = document.querySelector(`.button-code[code-button="${coolbutton}"] .coolbuttonfix`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
}
