import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // make div
  const div = document.createElement("div");
  div.className = "list-row";

  // make li
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "Finished";
  completeButton.addEventListener("click", () => {
    // delete div "list-row" attribute when button clicked
    const deleteTarget = completeButton.parentNode;
    deleteFromIncompleList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // Create button tags
    const backButton = document.createElement("button");
    backButton.innerText = "Move back";

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // Add to Finished-list
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(delete)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    // delete div "list-row" attribute when button clicked
    deleteFromIncompleList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("imcomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
