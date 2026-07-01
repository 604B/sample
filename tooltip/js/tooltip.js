// 要素の取得（クラス名にlinkを含む要素をすべて取得）
const links = document.querySelectorAll("[class*='link']");

// メソッドの定義
links.forEach((link) => {
    // リンクの「次の要素」がツールチップである、という前提で設定する
    const tooltip = link.nextElementSibling;

    if (tooltip && tooltip.matches("[class*='tooltip']")) {
        link.addEventListener("mouseenter", () => tooltip.showPopover());
        link.addEventListener("mouseleave", () => tooltip.hidePopover());
        link.addEventListener("focus", () => tooltip.showPopover());
        link.addEventListener("blur", () => tooltip.hidePopover());
    }
});

// 画面サイズが広がったらハンバーガーでの表示関連を閉じる
window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    console.log(currentWidth);
    const popover = document.getElementById("menu"); //ハンバーガー表示メニュー取得
    if (currentWidth >= 768) {
        if (popover.matches(":popover-open")) {
            popover.hidePopover();
        }
    }
});
