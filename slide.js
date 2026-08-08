// スライダーコンテナ、進む・戻るボタン、ドットインジケータの要素を取得
const sliderContainer = document.querySelector(".slider_container");
const nextBtn = document.querySelector(".next_btn");
const backBtn = document.querySelector(".back_btn");
const indicators = document.querySelectorAll(".indicator");

// スライダーの状態（初期は１）
let sliderStatus = 1;

// 進むボタンが押された時
nextBtn.addEventListener("click", () => {
    switch(sliderStatus) {
        case 1: // （１）の時の処理
            sliderStatus = 2;
            sliderContainer.style.transform = `translateX(-${280 * 1}px)`;
            backBtn.style.color = "lightcoral";
            indicators[0].style.backgroundColor = "lightgray";
            indicators[1].style.backgroundColor = "gray";
            break;
        case 2: // （２）の時の処理
            sliderStatus = 3;
            sliderContainer.style.transform = `translateX(-${280 * 2}px)`;
            nextBtn.style.color = "lightgray";
            indicators[1].style.backgroundColor = "lightgray";
            indicators[2].style.backgroundColor = "gray";
            break;
        case 3: // （３）の時の処理
            break;
    }
});

// 戻るボタンが押された時
backBtn.addEventListener("click", () => {
    switch(sliderStatus) {
        case 1: // （１）の時の処理
            break;
        case 2: // （２）の時の処理
            sliderStatus = 1
            sliderContainer.style.transform = `translateX(${0}px)`;
            backBtn.style.color = "lightgray";
            indicators[1].style.backgroundColor = "lightgray";
            indicators[0].style.backgroundColor = "gray";
            break;
        case 3: // （３）の時の処理
            sliderStatus = 2;
            sliderContainer.style.transform = `translateX(-${280 * 1}px)`;
            nextBtn.style.color = "lightcoral";
            indicators[2].style.backgroundColor = "lightgray";
            indicators[1].style.backgroundColor = "gray";
            break;
    }
});
