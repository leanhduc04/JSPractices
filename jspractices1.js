//Bài 1: Tạo một chương trình cho phép người dùng nhập vào 2 số và cho phép người dùng chọn phép tính cộng, trừ, nhân, chia.
// Rồi thực hiện cộng trừ nhân chia 2 số người dùng vừa nhập rồi trả về kết quả.

var calculation = [
    { id: "1", name: "Cộng" },
    { id: "2", name: "Trừ"  },
    { id: "3", name: "Nhân" },
    { id: "4", name: "Chia" }
]

//Bước 1: Lấy thông tin từ người dùng

var a = +prompt("Nhập số thứ nhất")
var b = +prompt("Nhập số thứ hai")
var selectCalculation = prompt(`
1.Cộng
2.Trừ
3.Nhân
4.Chia
Nhập cách thực hiện phép tính theo số thứ tự cho trước :
`)
var arrSC = selectCalculation.split("")
function getSelectedCal(arrSC) {
    return calculation.filter((item) => arrSC.includes(item.id))
}
var selectedCal = getSelectedCal(arrSC)

//Bước 2: Thực hiện phép tính rồi trả về kết quả
for (let item of selectedCal) {
    if (item.id.includes(1)) {
        var sum = a + b
        alert(`Kết quả của phép tính cộng bạn chọn là ${sum}`)
    }
    if (item.id.includes(2)) {
        var sub = a - b
        alert(`Kết quả của phép tính trừ bạn chọn là ${sub}`)
    }
    if (item.id.includes(3)) {
        var mul = a * b
        alert(`Kết quả của phép tính nhân bạn chọn là ${mul}`)
    }
    if (item.id.includes(4)) {
        var div = a / b
        alert(`Kết quả của phép tính chia bạn chọn là ${div}`)
    }
}
