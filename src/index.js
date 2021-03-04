import "./styles.css";

//onClickAdd 関数
//clickされたらinput add-textより値取得
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//function 未完了リストから指定のリストを削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//add incomplete function
const createIncompleteList = (text) => {
  //inclmpleteのdivタグをcareateElementを作成
  const div = document.createElement("div");
  //div - class名を付与
  div.className = "list-row";

  //liタグを作る
  const li = document.createElement("li");
  //liの中にinntertextを設定
  li.innerText = text;

  //complete button
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  //buttonが押された時のリスナー
  completeButton.addEventListener("click", () => {
    //削除
    deleteFromIncompleteList(deleteeButton.parentNode);

    //complet listへ追加する
    const addTarget = completeButton.parentNode;
    //firstelementchild - li要素
    const text = addTarget.firstElementChild.innerText;
    //div以下初期化
    addTarget.textContent = null;

    //タグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "return";

    //backbtnを押したときの処理
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグ子要素生成
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  //complete button
  const deleteeButton = document.createElement("button");
  deleteeButton.innerText = "Delete";
  //buttonが押された時のリスナー
  deleteeButton.addEventListener("click", () => {
    //deleteボタンを押したときにincomplteから削除
    //親要素取得
    deleteFromIncompleteList(deleteeButton.parentNode);
  });

  //divタグの子要素にliタグを入れていく
  div.appendChild(li);
  //buttonをliタグの子要素へ追加
  div.appendChild(completeButton);
  div.appendChild(deleteeButton);

  //未完了ulリスト配下へ追加
  document.getElementById("incomplete-list").appendChild(div);
};

// event
//id要素に対してclickイベントを付与
//getElementById 要素取得
//addEventListener event付与
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
