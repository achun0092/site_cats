const btn_cat1 = document.getElementById('btn_cat1');
const btn_cat2 = document.getElementById('btn_cat2');
const card_cat1 = document.getElementById('card_cat1');
const card_cat2 = document.getElementById('card_cat2');

// 第一隻貓咪按鈕的互動
btn_cat1.addEventListener('click', function() {
    btn_cat1.classList.add('active');
    btn_cat2.classList.remove('active');

    card_cat1.classList.remove('hidden_card');
    card_cat1.classList.add('active_card');
    
    card_cat2.classList.remove('active_card');
    card_cat2.classList.add('hidden_card');
});

// 第二隻貓咪按鈕的互動
btn_cat2.addEventListener('click', function() {
    btn_cat2.classList.add('active');
    btn_cat1.classList.remove('active');

    card_cat2.classList.remove('hidden_card');
    card_cat2.classList.add('active_card');
    
    card_cat1.classList.remove('active_card');
    card_cat1.classList.add('hidden_card');
});