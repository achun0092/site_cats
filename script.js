/* =========================================
   1. 頂部名片切換邏輯
   ========================================= */
const btnCat1 = document.getElementById('btn-cat1');
const btnCat2 = document.getElementById('btn-cat2');
const cardCat1 = document.getElementById('card-cat1');
const cardCat2 = document.getElementById('card-cat2');

btnCat1.addEventListener('click', function() {
    btnCat1.classList.add('active');
    btnCat2.classList.remove('active');
    cardCat1.classList.remove('hidden-card');
    cardCat1.classList.add('active-card');
    cardCat2.classList.remove('active-card');
    cardCat2.classList.add('hidden-card');
});

btnCat2.addEventListener('click', function() {
    btnCat2.classList.add('active');
    btnCat1.classList.remove('active');
    cardCat2.classList.remove('hidden-card');
    cardCat2.classList.add('active-card');
    cardCat1.classList.remove('active-card');
    cardCat1.classList.add('hidden-card');
});

/* =========================================
   2. 照片牆：分類篩選與載入更多
   ========================================= */
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
const loadMoreBtn = document.getElementById('load-more-btn');

let currentFilter = 'all'; // 當前選擇的分類
let itemsToShow = 4;       // 預設顯示幾張

// 核心功能：根據分類和數量，重新整理照片牆
function updateGallery() {
    // 步驟 A：先挑出符合當前分類的照片
    const matchedItems = galleryItems.filter(item => {
        if (currentFilter === 'all') return true;
        // 檢查照片隱藏的 data-category 是否包含我們選的標籤
        return item.getAttribute('data-category').includes(currentFilter);
    });

    // 步驟 B：先把所有照片隱藏
    galleryItems.forEach(item => {
        item.style.display = 'none';
    });

    // 步驟 C：只顯示符合條件的「前 N 張」
    matchedItems.slice(0, itemsToShow).forEach(item => {
        item.style.display = 'block';
    });

    // 步驟 D：判斷「載入更多」按鈕要不要消失
    if (itemsToShow >= matchedItems.length) {
        loadMoreBtn.style.display = 'none'; // 照片發完了，隱藏按鈕
    } else {
        loadMoreBtn.style.display = 'inline-block'; // 還有照片，顯示按鈕
    }
}

// 監聽所有分類按鈕的點擊
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // 1. 拔掉所有人的橘色背景，給被點擊的按鈕加上橘色
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // 2. 更新當前的分類，並把顯示數量「重置回 4 張」
        currentFilter = this.getAttribute('data-filter');
        itemsToShow = 4;

        // 3. 呼叫核心功能重新排版
        updateGallery();
    });
});

// 監聽載入更多按鈕
loadMoreBtn.addEventListener('click', function() {
    itemsToShow += 4; // 每次點擊多顯示 4 張
    updateGallery();
});

// 網頁一打開，先自動執行一次排版
updateGallery();


/* =========================================
   3. 點擊放大燈箱 (Lightbox)
   ========================================= */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('lightbox-close');

// 監聽每一張照片的點擊
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // 把被點擊照片的網址，複製到燈箱的照片裡
        lightboxImg.src = this.src;
        // 顯示燈箱
        lightbox.style.display = 'flex';
    });
});

// 點擊右上角的 ✖ 關閉燈箱
closeLightbox.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// 點擊黑色背景區塊，也能關閉燈箱（這很符合使用者直覺！）
lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});