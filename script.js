// 1. 先讓程式找出網頁中的「按鈕」和「名片」在哪裡
const btnCat1 = document.getElementById('btn-cat1');
const btnCat2 = document.getElementById('btn-cat2');
const cardCat1 = document.getElementById('card-cat1');
const cardCat2 = document.getElementById('card-cat2');

// 2. 設定當「點擊第一隻貓咪按鈕」時要發生的事
btnCat1.addEventListener('click', function() {
    // 改變按鈕顏色：自己亮起 (active)，另一隻變暗
    btnCat1.classList.add('active');
    btnCat2.classList.remove('active');

    // 顯示第一隻貓的名片，隱藏第二隻貓的名片
    cardCat1.classList.remove('hidden-card');
    cardCat1.classList.add('active-card');
    
    cardCat2.classList.remove('active-card');
    cardCat2.classList.add('hidden-card');
});

// 3. 設定當「點擊第二隻貓咪按鈕」時要發生的事
btnCat2.addEventListener('click', function() {
    // 改變按鈕顏色：自己亮起 (active)，另一隻變暗
    btnCat2.classList.add('active');
    btnCat1.classList.remove('active');

    // 顯示第二隻貓的名片，隱藏第一隻貓的名片
    cardCat2.classList.remove('hidden-card');
    cardCat2.classList.add('active-card');
    
    cardCat1.classList.remove('active-card');
    cardCat1.classList.add('hidden-card');
});