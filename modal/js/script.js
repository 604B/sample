// 開くボタンの取得と機能実装
const showButton = document.querySelector("#confirm-button");

showButton.addEventListener("click", () => {
    // 入力フォームの内容を確認画面へ
    const formName = document.querySelector("#name");
    const formComments = document.querySelector("#comments");
    const confirmName = document.querySelector("#confirm-name");
    const confirmComments = document.querySelector("#confirm-comments");
    confirmName.value = formName.value;
    confirmComments.value = formComments.value;
});
// 登録ボタンの処理
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", () => {
    // 入力フォームをクリアして確認画面を閉じる
    const formName = document.querySelector("#name");
    const formComments = document.querySelector("#comments");
    const dialog = document.querySelector("#modal");
    formName.value = "";
    formComments.value = "";
    dialog.close();
});

// トーストの処理
const button = document.querySelector("#submit-button");
const toast = document.querySelector("#toast");

button.addEventListener("click", () => {
    // トーストを表示
    toast.showPopover();

    // 3秒後に自動で閉じる
    setTimeout(() => {
        toast.hidePopover();
    }, 3000);
});
