const toggleBtn = document.getElementById("theme-toggle");
const rootElem = document.documentElement;

// 1. 現在の有効なテーマ（モード）を取得する関数
function getCurrentTheme() {
    // LocalStorageに保存された設定があるか確認
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    // 保存されていなければ、ユーザーのOS設定（ダークモードか）を確認
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
}

// 2. 画面起動時に初期テーマを適用
const initialTheme = getCurrentTheme();
if (localStorage.getItem("theme")) {
    // LocalStorageに明示的な設定がある場合のみ属性を付与
    rootElem.setAttribute("data-theme", initialTheme);
}

// 3. ボタンクリック時の切り替えイベント
toggleBtn.addEventListener("click", () => {
    // 現在のテーマをもとに、次に適用するテーマを決定
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // HTMLの独自属性を書き換えてCSSを適用させる
    rootElem.setAttribute("data-theme", newTheme);

    // 次回訪問時用にLocalStorageに選択を保存
    localStorage.setItem("theme", newTheme);
});
