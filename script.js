const $ = document.querySelector.bind(document);

const date= $('.date');
const day = $('.day');
const month = $('.month');
const year = $('.year');
 
const today =new Date();

const weeksday= ['Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy','Chủ Nhật',];

date.innerHTML= (today.getDate()<10 ? '0' : '') + today.getDate();
day.innerHTML= weeksday[today.getDay()];
month.innerHTML= `Tháng ${today.getMonth()}`;
year.innerHTML= today.getFullYear();

