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

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  // 未完了のリストに追加
  document.getElementById("imcomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
