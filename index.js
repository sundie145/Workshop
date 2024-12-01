var product = [
    {
        id: 1,
        img: 'https://media.istockphoto.com/id/1180244659/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.webp?a=1&b=1&s=612x612&w=0&k=20&c=UaLDmbRt1e5o9j2SkzQhGkOa7YHxoXMMbpRvQBPM_Fk=',
        name: 'Wristwatch',
        price: 7000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam aperiam, ab voluptates blanditiis commodi.',
        type: 'watch',
    },
    {
        id: 2,
        img: 'https://media.istockphoto.com/id/471712723/photo/watch.webp?a=1&b=1&s=612x612&w=0&k=20&c=ylENoCXgvtVTUd-J_5FoLg_SjF--66gOGl5t3TQl8z8=',
        name: 'Designer Watch',
        price: 10000,
        description: 'Luxury designer watch with a timeless design.',
        type: 'watch',
    },
    {
        id: 3,
        img: 'https://media.istockphoto.com/id/1246138278/photo/silver-metallic-white-wireless-headphones-in-the-air-isolated-on-white-background-music.webp?a=1&b=1&s=612x612&w=0&k=20&c=yaQ6l4WHU8cHGcfbybzI2z-k4OSnAj3WYjmbZrK1fcQ=',
        name: 'Bluetooth Headset',
        price: 2500,
        description: 'Wireless Bluetooth headset with excellent sound.',
        type: 'watch',
    },
    {
        id: 4,
        img: 'https://media.istockphoto.com/id/1590362280/photo/round-black-and-white-wall-clock-at-almost-6-oclock-on-yellow-background-illustration-of-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=1AmKt6OOe7ImfZHKNtf7CkRwS2kNJ_tR5UoBGBH_cnI=',
        name: 'Wall Clock',
        price: 1000,
        description: 'A modern wall clock for your home.',
        type: 'watch',
    },

    {
        id: 5,
        img: 'https://media.istockphoto.com/id/1062811040/photo/stylish-table-lamp-mockup-with-black-shade-and-gold-stand-on-white-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=xxNQB7-3cbWNdFtwd53H2z0hHSzGg44RAXja2LHWvYc=',
        name: 'Table Lamp',
        price: 1500,
        description: 'A modern minimalist table lamp to add ambiance to your room.',
        type: 'table',
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1621743018966-29194999d736?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1vZGVybiUyMERlc2t8ZW58MHx8MHx8fDA%3D',
        name: 'Modern Desk',
        price: 5000,
        description: 'A sleek and modern desk perfect for your home office.',
        type: 'table',
    },
    {
        id: 7,
        img: 'https://media.istockphoto.com/id/1266344041/photo/3d-rendering-of-rough-edge-plank-dining-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sv_MW0ow8XqyWxLgtJHOkB26770C0qOASnYvM37JVcU=',
        name: 'Wooden Chair',
        price: 2000,
        description: 'Comfortable wooden chair with a modern design.',
        type: 'table',
    },
    {
        id: 8,
        img: 'https://images.unsplash.com/photo-1542372147193-a7aca54189cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29mZmVlJTIwVGFibGV8ZW58MHx8MHx8fDA%3D',
        name: 'Coffee Table',
        price: 3200,
        description: 'Simple yet elegant coffee table.',
        type: 'table',
    },

    {
        id: 9,
        img: 'https://images.unsplash.com/photo-1590156220728-bea5ba090f82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hhbmVsJTIwUGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Chanel Perfume',
        price: 4500,
        description: 'A luxurious fragrance, perfect for evening wear.',
        type: 'perfume',
    },
    {
        id: 10,
        img: 'https://media.istockphoto.com/id/504897928/photo/pressed-face-powder-and-puff.webp?a=1&b=1&s=612x612&w=0&k=20&c=fqixMNv7voKTT83ESdfSqCZCtgCilDRbf4L7uTcdFyY=',
        name: 'Compact Mirror',
        price: 900,
        description: 'Portable compact mirror for everyday use.',
        type: 'perfume',
    },

    {
        id: 11,
        img: 'https://images.unsplash.com/photo-1535120927584-0230f40fc1e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMEJhZ3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Leather Bag',
        price: 6000,
        description: 'Stylish leather bag for a sophisticated look.',
        type: 'watch',
    },
    {
        id: 12,
        img: 'https://media.istockphoto.com/id/1802280859/photo/home-modern-technology-concept-smart-portable-wireless-speaker-on-the-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=VJl72pNQwQysMLh5aQVUgQ8sGXPGLfMuhl-Afh-JaCI=',
        name: 'Smart Speaker',
        price: 3500,
        description: 'Smart speaker with excellent sound quality.',
        type: 'table',
    },
    {
        id: 13,
        img: 'https://images.unsplash.com/photo-1591375275686-e9b036b15f95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGlvciUyMFBlcmZ1bWV8ZW58MHx8MHx8fDA%3D',
        name: 'Dior Perfume',
        price: 5500,
        description: 'Fragrance that exudes elegance and confidence.',
        type: 'perfume',
    },
    {
        id: 14,
        img: 'https://media.istockphoto.com/id/1695670778/photo/flower-arrangement.webp?a=1&b=1&s=612x612&w=0&k=20&c=cuvz984Gm2z6plOu5bl-CFowyoWT0oUgyEEnX7sbzJo=',
        name: 'Vintage Vase',
        price: 2500,
        description: 'Elegant vase for your flowers and decor.',
        type: 'table',
    },

    {
        id: 15,
        img: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWluaW1hbGlzdGljJTIwQ2hhaXJ8ZW58MHx8MHx8fDA%3D',
        name: 'Minimalistic Chair',
        price: 2800,
        description: 'A minimalist chair perfect for modern interiors.',
        type: 'watch',
    },
    {
        id: 16,
        img: 'https://plus.unsplash.com/premium_photo-1715774735265-92a0305302ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWxlY3RyaWMlMjBLZXR0bGV8ZW58MHx8MHx8fDA%3D',
        name: 'Electric Kettle',
        price: 1500,
        description: 'An electric kettle for quick boiling.',
        type: 'table',
    },
    {
        id: 17,
        img: 'https://plus.unsplash.com/premium_photo-1683736986821-e4662912a70d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFwdG9wJTIwU3RhbmR8ZW58MHx8MHx8fDA%3D',
        name: 'Laptop Stand',
        price: 2000,
        description: 'A sturdy laptop stand for better ergonomics.',
        type: 'table',
    },
    {
        id: 18,
        img: 'https://plus.unsplash.com/premium_photo-1667662655276-b3751fbbe107?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THV4dXJpb3VzJTIwUGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Luxurious Perfume',
        price: 7800,
        description: 'Elegant perfume with a deep and sensual fragrance.',
        type: 'perfume',
    },
    {
        id: 19,
        img: 'https://media.istockphoto.com/id/173755847/photo/pair-of-gold-wedding-rings.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y0GL40RKYArSDdO-DjK_vWE8PhnaBEbRPA7oUedff7E=',
        name: 'Gold Jewelry',
        price: 3000,
        description: 'Beautiful gold jewelry for special occasions.',
        type: 'watch',
    },
    {
        id: 20,
        img: 'https://media.istockphoto.com/id/1791114340/photo/sunglasses-and-glasses-sale-concept-trendy-sunglasses-on-gray-background-with-golden-palm.webp?a=1&b=1&s=612x612&w=0&k=20&c=kcSCey2RBLYIJil47iC7csmMVVGO9dg-eRCPe9u3kgo=',
        name: 'Fashionable Sunglasses',
        price: 1500,
        description: 'Trendy sunglasses to complete your look.',
        type: 'watch',
    }
];

$(document).ready(()=>{
    var html = '';
    for(let i=0; i < product.length; i++){
        html +=  `<div onclick="openProducDetail(${i})"  class="product-itmes ${product[i].type}">
                <img class="product-img" src="${product[i].img}" alt="">
                <p style="font-size: 1.2vw;">${product[i].name}</p>
                <p style="font-size: 1vw;">${numberWithCommas(product[i].price)} THB</p>
            </div>`  ;
    }
    $("#productlist").html(html);
})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
function searsomething(elem){
//console.log('#'+elem)
var value = $('#'+elem.id).val()
console.log(value)

var html = '';
for(let i = 0; i < product.length; i++) {
    if(product[i].name.includes(value)) {
        html += `<div onclick="openProducDetail(${i})"  class="product-itmes ${product[i].type}">
            <img class="product-img" src="${product[i].img}" alt="">
            <p style="font-size: 1.2vw;">${product[i].name}</p>
            <p style="font-size: 1vw;">${numberWithCommas(product[i].price)} THB</p>
        </div>`;
    }
}
    if(html == ''){
        $("#productlist").html(`<p>Not found product</p>`);
    }else{
    
    $("#productlist").html(html);
}
}
function searproduct(param){
console.log(param)
$(".product-itmes").css('display','none')
if(param == 'all'){
    $(".product-itmes").css('display','block')

    
}
else{
    $("."+param).css('display','block')

}
}
var productindex = 0;

function openProducDetail(index) {
    productindex = index;
    console.log(productindex);
    $("#modalDesc").css('display', 'flex'); // แสดง Modal
    $("#modal-img").attr('src', product[index].img);
    $("#modal-name").text( product[index].name);
    $("#modal-price").text( numberWithCommas(product[index].price) +' THB ');
    $("#modal-desc").text( product[index].description);


}


function closeModal() {
    $(".modal").css('display', 'none'); // ซ่อน Modal
}
var cart = [];
function addtocart() {
    let pass = true;

    // ตรวจสอบสินค้าที่ซ้ำในตะกร้า
    for (let i = 0; i < cart.length; i++) {
        if (productindex === cart[i].index) {
            console.log('found same product');
            cart[i].count++; // เพิ่มจำนวนสินค้าที่มีอยู่ในตะกร้า
            pass = false;
            break;
        }
    }

    // ถ้าไม่ซ้ำ เพิ่มสินค้าใหม่ลงในตะกร้า
    if (pass) {
        const obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1 // ตั้งค่าจำนวนเริ่มต้นเป็น 1
        };

        cart.push(obj);
    }

    // แสดงข้อมูลตะกร้าใน Console
    console.log(cart);

    // แสดงข้อความแจ้งเตือน
    if (typeof Swal !== "undefined") {
        Swal.fire({
            icon: 'success',
            title: 'Added ' + product[productindex].name + ' to cart',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        alert('Added ' + product[productindex].name + ' to cart');
    }
    $("#cartcount").css('display', 'flex').text(cart.length);
}
function openCart(){
    $("#modalCart").css('display', 'flex')  
    rendercart()
}
function rendercart() {
    if (cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                             <img src="${cart[i].img}" alt="Product Image">
                             <div class="cartlist-detai">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1vw;">${numberWithCommas(cart[i].price * cart[i].count)} THB</p>
                             </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html);
    } else {
        $("#mycart").html(`<p>Not found product list</p>`);
    }
}


function deinitems(action, index) {
    if (action == '-') {
        if (cart[index].count > 0) {
            cart[index].count--; // ลดจำนวน
            $(`#countitems${index}`).text(cart[index].count); // อัปเดตจำนวนใน UI

            // ลบสินค้าออกจากตะกร้าเมื่อจำนวนเป็น 0
            if (cart[index].count === 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((result) => {
                    if (result.isConfirmed) {
                        cart.splice(index, 1); // ลบสินค้าจากตะกร้า
                        rendercart(); // เรียกฟังก์ชันอัปเดต UI
                        $("#cartcount").css('display', 'flex').text(cart.length);
                        if(cart.length <= 0)
                            $("#cartcount").css('display', 'none')
                    } else {
                        cart[index].count = 1; // รีเซ็ตจำนวนกลับเป็น 1
                        $(`#countitems${index}`).text(cart[index].count);
                    }
                });
            }
        }
    } else if (action == '+') {
        cart[index].count++; // เพิ่มจำนวน
        $(`#countitems${index}`).text(cart[index].count); // อัปเดตจำนวนใน UI
    }
}