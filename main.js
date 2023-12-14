//console.log("Widya Intawani")
/* console.log("Kiwik")*/


/*let namaSaya = "Ahmad";
let nama;

const uang = 1
// uang = 2  -> variable konstan, jadi tidak bisa diubah

nama = namaSaya
console.log(nama)
console.log(uang) */

/*let nilai1 = 75
let nilai2 = 88
//let result = nilai1 + nilai2
//let hasil = nilai1 + nilai2
console.log(nilai1 + nilai2)*/


/*let ipk = 3.7
if( ipk > 3 && ipk <= 3.5){
    console.log('Baik')
}else if (ipk > 3.5){
    console.log('Cumlaude')
}else {
    console.log('Kurang')
} */

/*let variable    
//variable = "nilai"
//variable = 0
//variable = 5.6
//variable = true
variable = 'data'

console.log(typeof variable)*/


//let array = [1, 2, 3, 4, 5]
//console.log (array[2]) : untuk menentukan index dalam array
//console.log(array.length) : untuk menentukan panjang array

//let array = ["ratu", "novi", "adit"]
//console.log(array[2])
//console.log(array.length)
//console.log(array[array.length - 1])

//console.log(array.toString())
//console.log(typeof array[2].toString())

/*
let array = [1, 2, 3, 4, 5]
//pop remove the last element
console.log(array.pop())
console.log(array); */

/*
// push - add new element to array (at the end)
let array = [1, 2, 3, 4, 5]
console.log(array.push())
console.log(array); */

/*
// shift - remove first array
let array = [1, 2, 3, 4, 5]
console.log(array.shift())
console.log(array); */

/*
// unshift - add new element to array (at the beginning)
let array = [1, 2, 3, 4, 5]
console.log(array.unshift(0))
console.log(array); */

/*
// Sort
let array = [40, 28, 32, 41, 63]
console.log(array.sort())
console.log(array);
console.log(array.reverse());
console.log(array.sort(function(a, b) {return a - b})) // lebih bagus pake ini, kecil ke besar
console.log(array.sort(function(a, b) {return b - a})) // yang ini kalau dari besar ke kecil */

/*
let value = [40, 28, 32, 41, 63]
function name (value){
    value.sort(function(a, b) {return a - b;
    });
    console.log(value);
   // console.log(array[value](function(a, b) {return b - a}))
} */

//console.log(array.sort(function(a, b) {return b - a}))

//for (let )

// let a = 10
// let b = 3
//console.log(a=b); 
//console.log(a -= b);
//console.log(a += b);
//console.log(a *= b);
//console.log(a /= b);
//console.log(a /= b)
//console.log(a %= b)
//console.log(a %= b)
//console.log(!!undefined)


// function hitungFaktorial(n){
//     // Basis atau kondisi terminasi
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         // Rekursif: Faktorial dari n = n * faktorial dari (n-1)
//         return n * hitungFaktorial (n-1);
//     }
// }

// // contoh penggunaan
// var hasil = hitungFaktorial(5);
// document.write("5 Faktorial adalah:", hasil);

// function segitiga2(panjang) {
//     let hasil = '';
//     for (let i = 0; i < panjang; i++) {
//         for (let j = panjang; j > i; j--) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(segitiga2(10));

// // For Loop. menampilkan angka 1 hinga 5
// for (var i = 1; i <= 5; i++){
//     console.log (i);
// }

// // while Loop menampilkan 1 hingga 5
// console.log ("          ");

// var i = 1;
// while (i <= 5){
//     console.log(i);
//     i++;
// }

// console.log ("          ");

// // do.. while loop. menamilkan 1 hingga 5 
// var i = 1;
// do {
//     console.log (i);
//     i++;
// } while (i <= 5);

// console.log ("          ");

// var pyramid = (n) => {
//     for(let baris = 1; baris <= n; baris++) {
//        let ruang = "";
//        for(let kolom = 1; kolom <= (2 * n - 1); kolom++) {
//        if (kolom >= (n + 1 - baris) && kolom <= (n - 1 + baris)) {
//           ruang = ruang + "*";
//           } else {
//           ruang = ruang + " ";
//           }
//        }
//        console.log(ruang);
//     }
//     for(let baris = 1; baris <= n; baris++) {
//         let ruang = "";
//         for(let kolom = 1; kolom <= (2 * n - 1); kolom++) {
//         if (kolom >= (n + 1 - baris) && kolom <= (n - 1 + baris)) {
//            ruang = ruang + "*";
//            } else {
//            ruang = ruang + " ";
//            }
//         }
//         console.log(ruang);
//      }
// };
// pyramid(4);



// console.log ("--------------------------------------------------");

// function cetakSegitigaTengah (jumlahBaris, condition) {
//     if ( condition == "terbalik"){
//         for (let i = jumlahBaris; i >= 1; i--) {
//         let spasi = ''.repeat(jumlahBaris - i);
//         let bintang = '*'.repeat(i);
//         console.log(spasi + bintang);
//         }
// }
// }


// function cetakSegitigaTengah (jumlahBaris, condition) {
//     for (let i = 1; i <= jumlahBaris; i++) {
//         let spasi = ''.repeat(jumlahBaris - i);
//         let bintang = '*'.repeat(i);
//         console.log(spasi + bintang);
//     }
// }

// cetakSegitigaTengah (4);
// cetakSegitigaTengah (4, "terbalik");

// console.log ("--------------------------------------------------");

// function Mahasiswa(nama, jurusan){
//     this.nama = nama;
//     this.jurusan = jurusan;
//     this.sapa = function(){
//         console.log("Halo! Nama saya " + this.nama + " dari jurusan " + this.jurusan )

//     };
// }

// // Membuat objek menggunakan fungsi konstruktuyr
// var mahasiswa1 = new Mahasiswa ("Alice", "Information");;
// var mahasiswa2 = new Mahasiswa ("Bob", "Ekonomi");

// //Memanggil metode objek
// mahasiswa1.sapa();
// mahasiswa2.sapa();

// function fetchAp(){
//     fetch ('https://jsonplaceholder.typicode.com/tudos')
//     .then((data) => data.json ())
//     .then((data) => console.log.data)
// }


// function fetchApi() {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((data) => data.json())
//     .then((data) => {
//         data.forEach(element => {
//             console.log(element.completed)
//         });
//     })
// }


// const customers = [];

//         function addCustomer(name, accountNumber){
//             let newCustomer = {
//                 name: name,
//                 accountNumber: accountNumber,
//                 balance: 0,
//                 transactionHistory: []
//             };
//             customers.push(newCustomer);
//             console.log(`Customer ${name} with account number ${accountNumber} has been added.`);
//         }

//         function findCustomer(accountNumber){
//             return customers.find(customer => customer.accountNumber === accountNumber);
//         }

//         function deposit(accountNumber, amount){
//             const customer = findCustomer(accountNumber);
//             if(customer){
//                 customer.balance += amount;
//                 customer.transactionHistory.push(`Deposit: +${amount}`);
//                 console.log(`Deposited ${amount} to account ${accountNumber}.`);
//             } else {
//                 console.log(`Customer with account number ${accountNumber} not found.`);
//             }
//         }

//         function withdraw(accountNumber, amount){
//             const customer = findCustomer(accountNumber);
//             if(customer){
//                 if(customer.balance >= amount){
//                     customer.balance -= amount;
//                     customer.transactionHistory.push(`Withdrawal: -${amount}`);
//                     console.log(`Withdrawn ${amount} from account ${accountNumber}.`);
//                 } else {
//                     console.log(`Insufficient balance for account ${accountNumber}.`);
//                 }
//             } else {
//                 console.log(`Customer with account number ${accountNumber} not found.`);
//             }
//         }

//         function checkBalance(accountNumber){
//             const customer = findCustomer(accountNumber);
//             if(customer){
//                 console.log(`Account Number: ${accountNumber}, Balance: ${customer.balance}`);
//             } else {
//                 console.log(`Customer with account number ${accountNumber} not found.`);
//             }
//         }

//         function viewTransactionHistory(accountNumber){
//             const customer = findCustomer(accountNumber);
//             if(customer){
//                 console.log(`Transaction History for Account Number ${accountNumber}:`);
//                 customer.transactionHistory.forEach(transaction => console.log(transaction));
//             } else {
//                 console.log(`Customer with account number ${accountNumber} not found.`);
//             }
//         }

//         function transactionHandler(type, accountNumber, amount){
//             switch (type){
//                 case 'deposit':
//                     deposit(accountNumber, amount);
//                     break;
//                 case 'withdraw':
//                     withdraw(accountNumber, amount);
//                     break;
//                 default:
//                     console.log("Invalid Transaction type");
//             }
//         }

//         // Example Usage:
//         addCustomer("Ratu", "123456789");
//         deposit("123456789", 7000);
//         withdraw("123456789", 500);
//         checkBalance("123456789");
//         viewTransactionHistory("123456789");

// console.log(customers);


// ----------------------------------------------------------------------------------------------- //

let customers = []; // This array will hold customer objects

function addCustomer(name, accountNumber) {
  let newCustomer = {
    name: name,
    accountNumber: accountNumber,
    balance: 0,
    transactionHistory: []
  };
  customers.push(newCustomer);
}

function findCustomerByAccountNumber(accountNumber) {
  return customers.find(customer => customer.accountNumber === accountNumber);
}

function deposit(accountNumber, amount) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    customer.balance += amount;
    customer.transactionHistory.push({ date: Date.now(), type: 'deposit', amount: amount });
    console.log(`Deposit of ${amount} to account number ${accountNumber} was successful.`);
  } else {
    console.log(`Customer with account number ${accountNumber} not found.`);
  }
}

function withdraw(accountNumber, amount) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    if (customer.balance >= amount) {
      customer.balance -= amount;
      customer.transactionHistory.push({ type: 'withdrawal', amount: amount });
      console.log(`Withdrawal of ${amount} from account number ${accountNumber} was successful.`);
    } else {
      console.log(`Insufficient balance for withdrawal from account number ${accountNumber}.`);
    }
  } else {
    console.log(`Customer with account number ${accountNumber} not found.`);
  }
}

function validateCustomerData(name, accountNumber){
    if(customers.find(customer => customer.accountNumber === accountNumber) && (customer => customer.name === name) ){
        return true;
            } else {
            return false;
            }
}

function editCustomerInfo(accountNumber, newInfo){
    let customer = findCustomerByAccountNumber(accountNumber);
    if (customer) {

    }

}

function getHighBalanceCustomers(){

}

function calculateTotalBalance(){

}

function performTransaction(accountNumber, amount){

}

addCustomer('Ratu Amalia', '123456789');
deposit('123456789', 7000);
withdraw('123456789', 500);


console.log(customers);
    
const isValidData = validateCustomerData("Ratu Amalia", "123456789");
console.log(`Is customer data valid? ${isValidData}`);


function validateCustomerData(name, accountNumber) {
    if (customers.some(customer => customer.accountNumber === accountNumber)) {
      return false; // Account number is not unique
    }
    // Add more validation as needed
    return true;
  }
  
  function editCustomerInfo(accountNumber, {}) {
    let customer = findCustomerByAccountNumber(accountNumber);
    if (customer) {
      Object.assign(customer, newInfo);
      return "Customer info updated";
    } else {
      return "Customer not found";
    }
  }
  
  function getHighBalanceCustomers(minimumBalance) {
    return customers.filter(customer => customer.balance >= minimumBalance);
  }
  
  function calculateTotalBalance() {
    return customers.reduce((total, customer) => total + customer.balance, 0);
  }
  


// ------------------------------------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Bank Customer Management</title>
// </head>
// <body>
//     <script>
//         const customers = [];

//         function addCustomer(name, accountNumber){
//             let newCustomer = {
//                 name: name,
//                 accountNumber: accountNumber,
//                 balance: 0,
//                 transactionHistory: []
//             };
//             customers.push(newCustomer);
//             console.log(`Customer ${name} with account number ${accountNumber} has been added.`);
//         }

//         function findCustomer(accountNumber){
//             return customers.find(customer => customer.accountNumber === accountNumber);
//         }

//         function deposit(accountNumber, amount){
//             const customer = findCustomer(accountNumber);
//             if(customer){
//                 customer.balance += amount;
//                 customer.transactionHistory.push(`Deposit: +${amount}`);
//                 console.log(`Deposited ${amount} to account ${accountNumber}.`);
//             } else {
//                 console.log(`Customer with account number ${accountNumber} not found.`);
//             }
//         }

//         function withdraw(accountNumber, amount){
//             const customer = findCustomer(accountNumber);
//             if(customer){
//                 if(customer.balance >= amount){
//                     customer.balance -= amount;
//                     customer.transactionHistory.push(`Withdrawal: -${amount}`);
//                     console.log(`Withdrawn ${amount} from account ${accountNumber}.`);
//                 } else {
//                     console.log(`Insufficient balance for account ${accountNumber}.`);
//                 }
//             } else {
//                 console.log(`Customer with account number ${accountNumber} not found.`);
//             }
//         }

//         function checkBalance(accountNumber){
//             const customer = findCustomer(accountNumber);
//             if(customer){
//                 console.log(`Account Number: ${accountNumber}, Balance: ${customer.balance}`);
//             } else {
//                 console.log(`Customer with account number ${accountNumber} not found.`);
//             }
//         }

//         function viewTransactionHistory(accountNumber){
//             const customer = findCustomer(accountNumber);
//             if(customer){
//                 console.log(`Transaction History for Account Number ${accountNumber}:`);
//                 customer.transactionHistory.forEach(transaction => console.log(transaction));
//             } else {
//                 console.log(`Customer with account number ${accountNumber} not found.`);
//             }
//         }

//         function validateCustomerData(name, accountNumber){
//             // Implement your validation logic here
//             if(name && accountNumber){
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         function editCustomerInfo(accountNumber, newInfo){
//             const customer = findCustomer(accountNumber);
//             if(customer){
//                 // Implement your logic to edit customer information here
//                 Object.assign(customer, newInfo);
//                 console.log(`Customer information for account number ${accountNumber} has been updated.`);
//             } else {
//                 console.log(`Customer with account number ${accountNumber} not found.`);
//             }
//         }

//         function getHighBalanceCustomers(){
//             // Implement your logic to get customers with high balance here
//             const highBalanceCustomers = customers.filter(customer => customer.balance > 1000);
//             return highBalanceCustomers;
//         }

//         function calculateTotalBalance(){
//             // Implement your logic to calculate total balance of all customers here
//             const totalBalance = customers.reduce((total, customer) => total + customer.balance, 0);
//             return totalBalance;
//         }

//         function performTransaction(accountNumber, amount){
//             // Implement your logic to perform a generic transaction here
//             // For example, you can use deposit or withdraw functions based on the amount
//             if(amount > 0){
//                 deposit(accountNumber, amount);
//             } else if(amount < 0){
//                 withdraw(accountNumber, Math.abs(amount));
//             } else {
//                 console.log("Invalid transaction amount.");
//             }
//         }

//         // Example Usage:
//         addCustomer("John Doe", "123456789");
//         deposit("123456789", 1000);
//         withdraw("123456789", 500);
//         checkBalance("123456789");
//         viewTransactionHistory("123456789");

//         // Additional Functions Usage:
//         const isValidData = validateCustomerData("Jane Doe", "987654321");
//         console.log(`Is customer data valid? ${isValidData}`);

//         editCustomerInfo("123456789", { name: "John Updated", balance: 2000 });
//         viewTransactionHistory("123456789");

//         const highBalanceCustomers = getHighBalanceCustomers();
//         console.log("High Balance Customers:", highBalanceCustomers);

//         const totalBalance = calculateTotalBalance();
//         console.log("Total Balance of All Customers:", totalBalance);

//         performTransaction("987654321", -200);
//         checkBalance("987654321");
//     </script>
// </body>
// </html>


