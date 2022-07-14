//Bài 2: Tạo một chương trình cho phép người dùng chọn sản phẩm từ danh sách sản phẩm có sẵn.
// Mỗi sản phẩm sẽ bao gồm tên, số lượng còn lại của sản phẩm trong kho, giá cho từng sản phẩm.
// Cho phép người dùng chọn nhiều sản phẩm vào giỏ hàng.
// Sau khi người dùng chọn xong sản phẩm sẽ cho họ chọn số lượng sản phẩm họ muốn mua.
// Nếu số lượng vượt quá số lượng trong kho thì trả về lỗi.
// Cuối cùng tính toán giá trị giỏ hàng người dùng rồi trả về.

var sanpham = [
    { id: "1", name: "kem danh rang", quantity: 20, price: 5 },
    { id: "2", name: "hoa qua", quantity: 100, price: 15 },
    { id: "3", name: "iphone", quantity: 8, price: 500 }
]

//Bước 1: Lấy những sản phẩm người dùng chọn
var selectGoods = prompt(`
1.Kem đánh răng
2.Hoa quả
3.Iphone
Ấn phím 0 nếu không chọn sản phẩm`)

var arraySG = selectGoods.split("")
function muaBan(arraySG) {
    return sanpham.filter((item) => arraySG.includes(item.id))
}
var selectedItems = muaBan(arraySG)

//Bước 2:Lấy thông tin về số lượng của sản phẩm người dùng đã chọn
var cart = []
for (let item of selectedItems) {
    var quantity = prompt(`Nhập số lượng ${item.name} cần mua`)

    if (+quantity > item.quantity) {
        alert("Sản phẩm không còn đủ!")
        break
    }
    cart.push({ sanpham: item, quantity: +quantity })
}

//Bước 3: Tính và trả về số tiền cần thanh toán
if (cart.length !== 1) {
    var cartAmount = 0
    for (var item of cart) {
        var itemQuantity = item.quantity
        var itemPrice = item.sanpham.price
        cartAmount += itemQuantity * itemPrice
    }
    alert(`Tổng đơn hàng của bạn là: ${cartAmount}$`)
}
