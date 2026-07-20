const swiper = new Swiper(".swiper", {
    // 基本設定
    direction: "horizontal", // 水平スライダー
    loop: true, // ループ有効化
    autoplay: {
        delay: 3000, // 自動再生の間隔
    },
    // ページネーション
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true, // ページネーションのクリック有効化
    },
    // ナビゲーション
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // アニメーション
    effect: "fade",
});
