
// isPlaying: true
// score -> Có 2 điểm chính thức hành cho 2 người chơi
// currentStore
// dice1 - dice2
// Làm sao để nhận diện được ai là người đang chơi?? -> Chỉ có 2 người
//     -> Tạo biến để lưu
//     activePlayer: 1 -> Người thứ nhất đang chơi
//     activePlayer: 2 -> Người thứ hai đang chơi
// NewGame
//     1. Show Popup
//     2. Reset Data
//     3. Xay dựng Popup
// Roll Dice
//     1. Random dư liệu 2 con xúc xắc
//     2. Kiểm tra xem người dùng có xuay đúng con số 1 không?
//         2.1. Nếu xoay trúng số 1 -> Đổi lượt chơi -> Reset điểm tạm thời
//         2.2. Nếu xoay ok -> Cộng dồn vào điểm tạm thời cho người chơi đó.
// Hold -> Lấy điểm
//     1. So sánh xem điểm cuối cùng lớn hơn FinalScore???
//     2. Chưa đủ điểm -> Cộng dồn 'ĐIỂM CHÍNH THỨC' => Đổi lượt chơi 


var Score1, Score2;
// // var activePlayer1, activePlayer2;
// var currentScore = 0;
var n;
// var player-score1 = document.getElementById("player-score1");
// var player-score2 = document.getElementById("player-score2");
var FinalScore = document.getElementById("d1").value;
Score1 = 0;
Score2 = 0;

function roll() {

    var number1 = Math.floor(Math.random() * 6) + 1;
    var number2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dices1").setAttribute("class", "spinner dice-" + number1);
    document.querySelector("#dices2").setAttribute("class", "spinner dice-" + number2);


    if (number1 == 1) {
        Score1 = 0;
    } else if (number1 >= 2 && number1 <= 6) {
        Score1 = number1;
    }
    document.getElementById("player-score1").innerHTML = "" + Score1;
    console.log(Score1);


    if (number2 == 1) {
        Score1 = 0;
    } else if (number2 >= 2 && number2 <= 6) {
        Score2 = number2;
    }
    document.getElementById("player-score2").innerHTML = "" + Score2;
    console.log(Score2);

}