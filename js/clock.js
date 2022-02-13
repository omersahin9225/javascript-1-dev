
let fullName=prompt("lutfen adınızı giriniz: ")
let myName=document.querySelector("#myName")
myName.innerHTML= `${myName.innerHTML}  ${fullName}` 


// let yıl=tarih.getFullYear();
// let ay=tarih.getMonth();
// let gun=tarih.getDay();
// let saat=tarih.getHours();
// let dakika=tarih.getMinutes();
// let saniye=tarih.getSeconds();
// let myClock=document.querySelector("#myClock")
// myClock.innerHTML=`${myClock.inner} ${gun}  ${ay}  ${yıl} ${saat} ${dakika}  ${saniye}`

// tarih yazımı genel
// let tarih=new Date();
// let myClock=document.querySelector('#myClock')
// myClock.innerHTML=`${myClock.innerHTML} ${tarih}`


const ay=["ocak", "şubat", "mart","nisan","mayıs","haziran","temmuz","agustos","eylül","ekim","kasım","aralık"];

const gün=["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"];

let tarih=new Date();
let yıl=tarih.getFullYear();
let ayismi=tarih.getMonth();
let günismi=tarih.getDay();
let saat=tarih.getHours();
let dk=tarih.getMinutes();
let day=tarih.getDate();
let myClock=document.querySelector('#myClock')
myClock.innerHTML=`  ${day}   ${ay[ayismi]} ${gün[günismi]}   ${yıl} ` 
let myHours=document.querySelector('#myHours')
myHours.innerHTML=`${saat} ${dk}`