//Bài 1:Tạo một chương trình cho phép người dùng nhập một con số bất kì từ 1-10.
// Chương trình của bạn cũng sẽ tạo ra một con số ngẫu nhiên từ 1-10.
// Nếu con số người dùng nhập không trùng với con số mà chương trình của bạn tạo ra thì bạn sẽ trả về gợi ý cho người dùng.
// Cho tới khi người dùng nhập con số đúng với chương trình tạo ra.
//Ví dụ: Con số chương trình tạo ra: 2
//Người dùng nhập lần đầu: 8 => trả về nhỏ hơn và cho người dùng nhập lại
//		Người dùng nhập lần tiếp: 5 => trả về nhỏ hơn và cho người dùng nhập lại
//		Người dùng nhập lần tiếp: 1 => trả về lớn hơn và cho người dùng nhập lại
//		Người dùng nhập lần tiếp: 2 => trả về chính xác và dừng chương trình

var programNum = Math.floor(Math.random() * 11)
while (userNum != programNum) {
    var userNum = prompt("Nhập một con số bất kì từ 1-10")
if (userNum > programNum) {
    alert("Số của chúng tôi nhỏ hơn, xin mời nhập lại")
}
if (userNum < programNum) {
    alert("Số của chúng tôi lớn hơn, xin mời nhập lại")
}
}
alert("Chính xác")