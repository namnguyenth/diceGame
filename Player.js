
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



// Người chơi: PLAYER 1 và PLAYER 2. Hãy set điểm chiến thắng ở FINAL SCORE trước nhé!
// Có 2 xúc xắc để quay trong trò chơi, mỗi lần quay điểm của xúc sắc được tính ở CURRENT, tổng điểm của PLAYER được hiển thị ngay dưới tên PLAYER.
// Chú ý: Khi PLAYER quay 1 trong 2 xúc xắc vào 1 điểm CURRENT nhận được là 0, nghĩa là + 0 vào điểm tổng. Bấm ROLL DICE để quay xúc xắc, HOLD để dừng lượt.


var Score1, Score2;
// // var activePlayer1, activePlayer2;
// var currentScore = 0;
// var n;
// var player-score1 = document.getElementById("player-score1");
// var player-score2 = document.getElementById("player-score2");
var FinalScore = document.getElementById("d1");
Score1 = 0;
Score2 = 0;


//popup
var md = document.getElementById("popupT");
var btn = document.getElementById("btnX");
var span = document.getElementsByClassName("close")[0];

btnX.onclick = function () {
    document.getElementById("popupT").style.display = "block";
}
span.onclick = function () {
    document.getElementById("popupT").style.display = "none";
}
//popup


function reset() {
    Score1 = 0;
    Score2 = 0;
    document.getElementById("player-name1").innerHTML = "PLAYER 1";
    document.getElementById("player-name2").innerHTML = "PLAYER 2";
    document.getElementById("player-score1").innerHTML = "" + 0;
    document.getElementById("player-score2").innerHTML = "" + 0;
    document.getElementById("player1-current-score").innerHTML = "" + 0;
    document.getElementById("player2-current-score").innerHTML = "" + 0;

    document.getElementById("btn-roll").disabled = false;

}







//ham kiem tra finalScore 

// function check() {
//     if (document.getElementById("d1").value === "") {
//         alert("Bạn phải nhập giá trị cho Final Score > 0");
//     } else {
//         console.log('tiep tuc');
//     }
// }



//ham kiem tra
function kiemtra(Score1, Score2) {
    if (Score1 > Score2) {
        document.getElementById("player-name1").innerHTML = "Winner";
        alert('Player 1 Win');
        document.getElementById("btn-roll").disabled = "true";
    } else if (Score1 < Score2) {
        document.getElementById("player-name2").innerHTML = "Winner";
        alert('Player 2 Win');
        document.getElementById("btn-roll").disabled = "true";
    } else if (Score1 == Score2) {
        console.log("continue");
    }

}
//Ham roll
function roll() {
    if (document.getElementById("d1").value === "") {
        alert("Bạn phải nhập giá trị cho Final Score > 0");
    } else {
        console.log('tiep tuc');
    }


    //start 
    //player 1 start

    var number1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dices1").setAttribute("class", "spinner dice-" + number1);
    document.getElementById("player1-current-score").innerHTML = number1;
    if (number1 == 1) {
        Score1 += 0;
    } else if (number1 >= 2 && number1 <= 6) {
        Score1 += number1;
        if (Score1 >= FinalScore.value) {
            document.getElementById("player-score1").innerHTML = "" + Score1;
            console.log("1win");
            kiemtra(Score1, Score2);
        } else {
            console.log("1 tiep tuc");
            document.getElementById("player-score1").innerHTML = "" + Score1;
        }
    }
    console.log("Diem hien tai p1 " + Score1);


    //player 2 start
    var number2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dices2").setAttribute("class", "spinner dice-" + number2);
    document.getElementById("player2-current-score").innerHTML = number2;

    if (number2 == 1) {
        Score2 += 0;
    } else if (number2 >= 2 && number2 <= 6) {
        Score2 += number2;
        if (Score2 >= FinalScore.value) {
            document.getElementById("player-score2").innerHTML = "" + Score2;
            console.log("2win");
            kiemtra(Score1, Score2);

        } else {
            console.log("2 tiep tuc");
            document.getElementById("player-score2").innerHTML = "" + Score2;
        }
    }
    console.log("Diem hien tai p2 " + Score2);

}
