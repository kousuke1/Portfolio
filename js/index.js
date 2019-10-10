


$(function(){


//（１）ページの概念・初期ページを設定
var page=0;

//（２）イメージの数を最後のページ数として変数化
var lastPage =parseInt($(".slide img").length-1);

//（３）最初に全部のイメージを一旦非表示にします
     $(".slide img").css("display","none");

//（４）初期ページを表示
          $(".slide img").eq(page).css("display","block");

//（５）ページ切換用、自作関数作成
function changePage(){
                         $(".slide img").fadeOut(1500);
                         $(".slide img").eq(page).fadeIn(1500);
};

//（６）～秒間隔でイメージ切換の発火設定
    
var Timer;
function startTimer(){
Timer =setInterval(function(){
          if(page === lastPage){
                         page = 0;
                         changePage();
               }else{
                         page ++;
                         changePage();
          };
     },3000);
}
//（７）～秒間隔でイメージ切換の停止設定
function stopTimer(){
clearInterval(Timer);
}

//（８）タイマースタート
startTimer();

/*オプションを足す場合はここへ記載*/

});

　
$(function($){
 
  //コンテンツを囲む要素をidで指定
  var container = document.querySelector('#gallery');
 
  //すべての画像を読み込み終わった後に関数を実行
  imagesLoaded(container, function () {
    var msnry = new Masonry(container, {
      itemSelector: '.item', //コンテンツのclass名
      isFitWidth: true, //コンテナの親要素のサイズに基づいて、コンテンツのカラムを自動調節します。
      columnWidth: 310, //カラムの幅を設定
    });
  });
});



  