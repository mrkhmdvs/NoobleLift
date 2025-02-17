// const searchForm = document.querySelector('.search-form');
// const searchBtn = document.querySelector('#search-btn');
// const cartItem = document.querySelector('.cart-items-container')
// const cartBtn = document.querySelector('#cart-btn')
// const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')


document.getElementById('menu-btn').addEventListener('click', function () {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});
// searchBtn.addEventListener('click', ()=>{
//     searchForm.classList.toggle('active');
//     document.addEventListener('click', (e)=>{
//         if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ){
//             searchForm.classList.remove('active');
//         }
//     })
// })

cartBtn.addEventListener('click', ()=>{
    cartItem.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem) ){
            cartItem.classList.remove('active');
        }
    })
})

// menuBtn.addEventListener('click', ()=>{
//     navbar.classList.toggle('active');
//     document.addEventListener('click', (e)=>{
//         if(!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn) ){
//             navbar.classList.remove('active');
//         }
//     })
// })



// document.querySelector(".btn").addEventListener("click", function () {
//     document.getElementById("popupForm").style.display = "block";
//   });

//   document.getElementById("closeFormBtn").addEventListener("click", function() {
//     document.getElementById("popupForm").style.display = "none";
//   });
  

  function openBookingForm(productName) {
    document.getElementById("productName").value = productName;
    document.getElementById("productType").value = productName;
    document.getElementById("bookingFormContainer").style.display = "block";
}

function closeBookingForm() {
    document.getElementById("bookingFormContainer").style.display = "none";
}
 

document.getElementById('menu-btn').addEventListener('click', function () {
    const navbar = document.getElementById('navbar');
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
    } else {
        navbar.classList.add('show');
    }
});

const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('navbar').classList.remove('show');
    });
});
  