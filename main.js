var str='phuong';
var tuoi=20;

/*cac ham in
alert('tao hop thoai')
console.log("in ra console")
console.error("in loi console")
console.warn("in canh bao console")

confirm('tao hop thoai confiirm');
prompt('tao hop thoai co donh input')

setTimeout(function(){
    console.log('chay sau 1s')
},1000)

setInterval(function(){
    console.log('thuc hien moi giay sau 1s')
},1000)
*/

/*
taon tu toan hoc
** luy thua
% chia lay du
*/

/**
 * kiem tra kieu du lieu
var a=10
console.log(typeof a)
 */

// var a=1
// var b='1'

// console.log(a==b)   //true
// console.log(a===b)  //false

// console.log(a!=b)   //false
// console.log(a!==b)  //true

//Object 
// var akey='a'
// var myObject ={
//     name:'phuong',
//     age: 18,
//     adress:'function',
//     'them':'1234',
//     [akey]:'qwer',
//     getname : function(){
//         return this.name
//     }

// }
// console.log('myObject la',myObject)

// // lay ra mang cac key
// console.log(Object.keys(myObject))
// //lay ra mang velue
// console.log(Object.values(myObject))

// //them phan tu
// myObject.email='eamis@dafffs'
// console.log('myObject la',myObject)

// //lay phan tu
// console.log(myObject.name)
// console.log(myObject['name'])
// console.log(myObject.them)
// console.log(myObject['them'])
// var myKey ='age'
// console.log(myObject[myKey])
// console.log(myObject['a'])
// console.log(myObject.getname())

// //xoa phan tu
// delete myObject.age;
// console.log(myObject)

// // Object constructor

// function user(ten,tuoi,ns) {
//     this.ten=ten;
//     this.tuoi=tuoi;
//     this.ns=ns;
//     this.getname = function(){
//         return this.ten
//     }
// }
// // them thuoc tinh
// user.prototype.them='them';
// user.prototype.getns=function () {
//     return this.ns;
// }

// var obj1=new user('phuong',18,'11/11/1111')
// console.log(obj1)
// obj1.diachi='hanoi'
// console.log(obj1)
// console.log(obj1.getname())
// console.log(obj1.getns())

// var date=new Date();
// console.log(date)
// console.log(date.getFullYear())
// console.log(date.getMonth()+1)
// console.log(date.getDate())
// console.log(date.getHours())



// mang
var arr=[
    1,
    2,
    4,
    '4',
    'f',
];
console.log(arr)
// kiem tra co pai mang khong
console.log(Array.isArray(arr));

console.log(arr.length);

console.log(arr[2])

console.log(arr.toString())
console.log(arr.join('-'))

// pop xoa  phan tu cuoi tra ve phan tu do
console.log(arr.pop())
console.log(arr)

//kiem tra phantu co trong mang
console.log(arr.includes(2))

// push tham phan tu vao cuoi va tra ve do dai mang
console.log(arr.push('them1','them2'))
console.log(arr)

// shift xoa vi tri dau tra ve phan tu do
console.log(arr.shift())
console.log(arr)

// unshift them phan tu vao dau tra ve do dai mang
console.log(arr.unshift('themdau1','themdau2'))
console.log(arr)

// splice(a,b't1','t2','t3') xoa phan tu tu a so phan tu b 
//tra ve cac ohan tu da xoa
//them vao cac phan tu tu vi tri a
console.log(arr.splice(1,2,'t1','t2','t3'))
console.log(arr)

var arr2=[1,2,3];

// noi 2 mang arr.concat(arr2)
console.log(arr.concat(arr2))
arr=arr.concat(arr2)
console.log(arr)

// cat mang arr.slice(1,3)
console.log(arr.slice(1,3))

// duyet cac phan tu
arr.forEach(function(i,index) {
    console.log(index,i)
});

// kiem tra dieu kien tat ca phan tu phai thoa man
var t= arr.every(function(i,index) {
    console.log(i)
    return i!=='t3'; //dieu kien=false dung lai
});
console.log(t)

// kiem tra dieu kien tat ca phan tu 
//chi can 1 phan tu thoa man
var t= arr.some(function(i,index) {
    console.log(i)
    return i!=='t3'; //dieu kien=true thi dung
});
console.log(t)

// duyet tim phan tu dung dieu kien 
var t= arr.find(function(i,index) {
    console.log(i)
    return i==='t3'; //dieu kien true thi dung 
});
console.log(t)

//map duyet tao 1 manh thay doi phan tu
console.log(arr)
var narr=arr.map( function (i,index) {return i+'1'} );
console.log(narr);

//reduce duyet thuc hien return i khoi tao=3c
//ix phan tu
var temp=arr.reduce(function(i,ix){
    return i+=ix;
},'3c');
console.log(temp)

// chuoi
var mystring= 'le trong phuong trong';

// length  do dai chuoi
console.log(mystring.length);
//indexOf(chuoi,vi tri bat dau) tim vi tri chuoi con tra ve vi tri dau 
//neu khong co tra ve -1
console.log(mystring.indexOf('trong',4));
console.log(mystring.lastIndexOf('trong'));  //cuoi
console.log(mystring.search('trong'));
// tra ve tf
console.log(mystring.includes('trong'));

// cat chuoi slice(vi tri bat dau,vi tri ket thuc+1) 
console.log(mystring.slice(2,6))
console.log(mystring.slice(-5,-1))

// mystring.replace('trong','TRONG') tay the
console.log(mystring.replace(/trong/g,'TRONG'))  //thay the tat ca

// chuyen thanh viet hoa mystring.toUpperCase()
console.log(mystring.toUpperCase());

// chuyen thanh viet thuong mystring.toLowerCase()
console.log(mystring.toLowerCase());

// trim loai bo dau cach ow dau va cuoi
console.log(mystring.trim())

// split('dau')  tach choi 
console.log(mystring.split(' '));
console.log(mystring.split(''));

console.log(mystring.charAt(5))
console.log(mystring[5])

a=3.145419
// toString chuyen so thanh chuoi
console.log(a.toString())
// tofixed(3) lam tron lay 3 chu so thap phan
console.log(a.toFixed(3))

//set
var set=new Set([1,2,3])
set.add(4)
set.add(2)
var q=[...set]   //... xoa dau ngoac set->arr
console.log(set)

//map
const luke = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    occupation: 'Jedi Knight',
}
//Object-> mang
var w=Object.entries(luke)
console.log(w)
//Object-> map
const map1 = new Map(Object.entries(luke))
console.log(map1)

// map->Object
const obj = Object.fromEntries(map1)
console.log(obj)

// map->mang
const arrf = Array.from(map1)
console.log(arrf)

var map =new Map([[1,1],[2,2]]);
console.log(map)
// them phan tu
map.set(3,'le')
map.set('1', 'String one')
map.set(1, 'This will be overwritten')
map.set(1, 'Number one')
map.set(true, 'A Boolean')

console.log(map)

//kich thuoc map
console.log(map.size)

//kiem tra key co thuoc map khong
console.log(map.has('1'))

//lay value tu key
console.log(map.get('1'))

//xoa phan tu neu co tra ve true
console.log(map.delete(3))
console.log(map)

keys=map.keys()
console.log(keys)
values=map.values()
console.log(values)
entries=map.entries()
console.log(entries)




//cac ham toan hoc
// console.log(Math.PI);
// console.log(Math.round(1.5)) //lam tron
// console.log(Math.abs(-4))    //gia tri tuey doi
// console.log(Math.ceil(4.1))  //lam tron len
// console.log(Math.floor(4.99))//lam tron xuong
// console.log(Math.random())   // random tu 0 den 1
// console.log(Math.min(1,2,3,-4,3))
// console.log(Math.max(1,2,3,-4,3))


//ham
// function hammau(str,str2) {
//     str-=10
//     console.log(str+str2);
// }
// a=20
// hammau(a,'gtrn');

// function log1() {
//     console.log(arguments);
//     for (var i of arguments) {
//         console.log(i)
//     }
// }
// var log2= function(){
//     console.log('log2')
// }
// log1('123','lll','xxx')
// log2();



// Polyfill
/**
 Để hỗ trợ các trình duyệt cũ bạn phải
vá các chức năng mà nó đang thiếu. 
Nếu không được hỗ trợ, bạn cần mô phỏng 
nó với tính năng tương đương
vd len include

if (!String.prototype.includes) {
    String.prototype.includes = function(seach,start){
        'use strict'
    }
    if(seach instanceof RegExp){
        throw TypeError("loi")
    }
    if ( start===undefined) { strat=0; }
    return this.indexOf(seach,start)!==-1
}
 */
    
// } else if(){


// vongf lap
// for (let i = 0; i < 10; i++) {
//     // console.log(i)
// }

// console.log(myObject)
// for (var key in myObject) {
//     if (typeof myObject[key] !=='function') {
//         console.log(key)
//         console.log(myObject[key])        
//     }
// }
// // arr laf chuoi mang
// for (var value of arr) {
//     console.log(value)
// }
// var i=0
// while (i<10) {
//     i++
// }
// do {
    
// } while (dung);

// map.forEach((value, key) => {
//     console.log(`${key}: ${value}`)
// })

// for (const [key, value] of map) {
//     console.log(`${key}: ${value}`)
// }
// e=[1,2,3,4,5,1,2,3,1,2,5,6,2]
// function tinhTanSo(arr) {
//     var tanSo = {};
//     for (var i = 0; i < arr.length; i++) {
//       var phanTu = arr[i];
//       if (tanSo[phanTu]) {
//         tanSo[phanTu]++;
//       } else {
//         tanSo[phanTu] = 1;
//       }
//     }
    
//     return tanSo;
//   }
// console.log(tinhTanSo(e))

//////////////////////DOM/////////////////

//get element

// var id_1 = document.getElementById('id');
// console.log(id_1)
// var class_1= document.getElementsByClassName('class')
// console.log(class_1)
// var TagName_1= document.getElementsByTagName('h2')
// console.log(TagName_1)
// var querySelector_1= document.querySelector('.h2_1')
// console.log(querySelector_1)

// var querySelector_1= document.querySelector('.box .h2_2')
// console.log(querySelector_1)

// var querySelector_1= document.querySelectorAll('.box .h2_2')
// console.log(querySelector_1)

// //cach1
// list_item_note=document.querySelectorAll('.box1 li')
// console.log(list_item_note)
// //cach 2
// box_1=document.querySelector('.box1')
// console.log(box_1)

// list_item_note2=box_1.querySelectorAll('.li1')
// console.log(list_item_note2)


//attributes
var heading_element= document.getElementById('id_1');
heading_element.title='heading'
heading_element.setAttribute('class','clash_h1')
console.log(heading_element.getAttribute('title'))
console.log(heading_element)