// 1. 變數使用駝峰命名 (CamelCase)，對應的字串維持 HTML 的減號 (Kebab-case)
const btnCat1 = document.getElementById('btn-cat1');
const btnCat2 = document.getElementById('btn-cat2');
const cardCat1 = document.getElementById('card-cat1');
const cardCat2 = document.getElementById('card-cat2');

// 2. 胖丁 (第一隻貓) 按鈕的互動
btnCat1.addEventListener('click', function() {
    btnCat1.classList.add('active');
    btnCat2.classList.remove('active');

    cardCat1.classList.remove('hidden-card');
    cardCat1.classList.add('active-card');
    
    cardCat2.classList.remove('active-card');
    cardCat2.classList.add('hidden-card');
});

// 3. 夢幻 (第二隻貓) 按鈕的互動
btnCat2.addEventListener('click', function() {
    btnCat2.classList.add('active');
    btnCat1.classList.remove('active');

    cardCat2.classList.remove('hidden-card');
    cardCat2.classList.add('active-card');
    
    cardCat1.classList.remove('active-card');
    cardCat1.classList.add('hidden-card');
});