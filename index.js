// Header 
var swiper = new Swiper(".myHeader", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    });


//********************* SHOP POPULAR PRODUCT***********************
    let shopProduct = [
      {
        name:"Stretch Fleece Mock Neck Long Sleeve T-Shirt",
        img:"/img/p-19.avif",
        price:180.35,
        title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris cons feugiat.",
      },
      {
        name:"Oversized Half Sleeve T-Shirt (Regular Striped)",
        img:"/img/p-20.avif",
        price:399.5,
        title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligul aequat ornare feugiat.",
      },
      {
        name:"Linen Blend Open Collar Short Sleeve Shirt (Striped)",
        img:"/img/p-14.avif",
        price:45.00,
        title:"Nullar eget sem vitae eros pharetra vitae luctus ligula. Mauris consequat ornare feugiat.",
      },
      {
        name:"HEATTECH Ultra Warm Crew Neck Long Sleeve T-Shirt",
        img:"/img/p-13.avif",
        price:99.00,
        title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus  consequat ornare feugiat.",
      },
      {
        name:"AIRism Cotton Crew Neck Short Sleeve T-Shirt",
        img:"/img/p-11.avif",
        price:84.25,
        title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris rnare feugiat.",
      },
      {
        name:"Herschel SpunBer",
        img:"/img/p-12.webp",
        price:89.00,
        title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      },
      {
        name:"STUDIO GHIBLI Round Mini Shoulder Bag",
        img:"/img/p-24.avif",
        price:88.00,
        title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      },
      {
        name:"Modal Cotton Open Collar Short Sleeve Shirt (Printed)t",
        img:"/img/p-17.avif",
        price:45.85,
        title:"Nullar eget sem vitae eros pharetra viverra. tae luctus ligula. Mauris consequat ornare feugiat.",
      }]

let popularRow = document.querySelector('.popular-row')

// console.log(shopProduct[0].img)


popularRow.innerHTML  = shopProduct.map((item)=>{
  let {name,price,img} = item


  return `
         <div class="popular-col">
            <div class="image">
            <img src=${img} alt="">
            <a href="shop.html" class="viewPD">View Product</a>
            </div>
             <div class="content">
                  <h4 class="popular-name">${name}</h4>
                  <p class="popular-price">$${price}</p>
              </div>
          </div>
  `

}).join("")




// register.addEventListener('click',() =>{
//     register.classList.remove('active')
//     registerRow.classList.remove('active')
// })




