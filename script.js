// Задача 1


let promise = new Promise((resolve, reject) => {
        setTimeout (() => {
            let number = Math.ceil( Math.random() * 6)
            console.log(number);
            if (number <= 5){
                console.log("Start the game...")
                resolve(number);
            } else if (number === 6){
                reject(new Error)
            }return number;
        }, 2000)
    })

promise
.then(
    number => {
        if (number ===1){
        console.log("Stay here");
    }else {
        console.log(`Go ${number} steps`);
    }})
  .catch(err => {
    console.warn('Exit');
  })



//   Задача 2


// function goToShop(){
//     return new Promise((resolve, reject) => {
//         let product = Math.ceil( Math.random() * 8);
//         if (product <4){
//             console.log(product);
//             reject(new ProductError("Too low products"));
//         } else if (product >=4) {
//             makeDinner().then();
//             resolve(product);
//         };
// })}

// function makeDinner(){
//     return new Promise((resolve) => {
//         setTimeout (() => {
//         resolve(console.log('Bon Appetit'));             
//     }, 3000)
// })}

// class ProductError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "Product Error";
//     }
//   }

// goToShop()
//     .then(res => console.log(res))
//     .catch(err => console.error(err.name + ': ' + err.message));


// Второй способ - через массив продуктов:


// function goToShop() {
//     let arrProduct = ['Колбаса', 'Сыр', 'Творог', 'Зелень', 'Помидоры', 'Молоко', 'Яйца', 'Грибы'];
//     return new Promise ((resolve,reject)=>{
//         let newArrProduct = arrProduct.slice(Math.round(Math.random()*arrProduct.length));
//         console.log(newArrProduct);
//         if (newArrProduct.length >= 4) {
//             makeDinner().then((value) => {
//                 console.log(value);
//             });
//             resolve(newArrProduct);
//         }else if(newArrProduct.length < 4){
//             reject(new ProductError('Too low product!'));
//         }
//     })
// }

// function makeDinner() {
//     return new Promise ((resolve)=>{
//         setTimeout (() => {
//             resolve('Bon Appetit');
//         },3000)
//     })
// }

// class ProductError extends Error {
//         constructor(message) {
//           super(message);
//           this.name = "Product Error";
//         }
//       }
    
// goToShop()
//     .then((value)=>{
//     console.log(`Вы приобрели следующие товары: ${value}`);
//     })
//     .catch(err => console.error(err.name + ': ' + err.message));