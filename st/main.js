// スロット画像
const images = [
    "./BAR.jpg",
    "./タイトルなし.png",
    "./budou.png"
];

// リール画像
const r1img = document.querySelector("#r1 img");
const r2img = document.querySelector("#r2 img");
const r3img = document.querySelector("#r3 img");

// ボタン
const btn01 = document.getElementById("btn01");
const btn02 = document.getElementById("btn02");
const btn03 = document.getElementById("btn03");
const btn04 = document.getElementById("btn04");

// interval
let int1 = null, int2 = null, int3 = null;

// 結果
let result1 = null, result2 = null, result3 = null;

// ランダム画像
function randomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

// ▶ スピン
btn01.addEventListener("click", () => {
    result1 = result2 = result3 = null;

    clearInterval(int1);
    clearInterval(int2);
    clearInterval(int3);

    int1 = setInterval(() => r1img.src = randomImage(), 100);
    int2 = setInterval(() => r2img.src = randomImage(), 100);
    int3 = setInterval(() => r3img.src = randomImage(), 100);
});

// ⏹ 停止①
btn02.addEventListener("click", () => {
    if (!int1) return;
    clearInterval(int1);
    int1 = null;
    result1 = r1img.src;
    checkFinish();
});

// ⏹ 停止②
btn03.addEventListener("click", () => {
    if (!int2) return;
    clearInterval(int2);
    int2 = null;
    result2 = r2img.src;
    checkFinish();
});

// ⏹ 停止③
btn04.addEventListener("click", () => {
    if (!int3) return;
    clearInterval(int3);
    int3 = null;
    result3 = r3img.src;
    checkFinish();
});

// 判定
function checkFinish() {
    if (result1 && result2 && result3) {
        if (result1 === result2 && result2 === result3) {
            alert("🎉 大当たり！");
        } else {
            alert("はずれ");
        }
    }
}
