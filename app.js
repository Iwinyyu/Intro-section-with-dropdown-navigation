// toggle menu
const menu_btn = document.querySelector('.menu');
const menu = document.querySelector('.nav');
const close_btn = document.getElementById('close');
const overlay = document.querySelector('.overlay');

// btns in menu
const feature_btn = document.getElementById('feature');
const company_btn = document.getElementById('company');
const feature_items = document.getElementById('feature-expand');
const company_items = document.getElementById('company-expand');
feature_items.style.display = 'none';
company_items.style.display = 'none';



menu_btn.addEventListener('click', ()=>{
  menu.classList.add('showbtn');
  overlay.classList.add('show-overlay');
})
close_btn.addEventListener('click', ()=>{
  menu.classList.remove('showbtn');
  overlay.classList.remove('show-overlay');
})

overlay.addEventListener('click', ()=>{
  if (menu.classList.contains('showbtn')){
    menu.classList.remove('showbtn');
    overlay.classList.remove('show-overlay');
  }
})

feature_btn.addEventListener('click', ()=>{
  if (feature_items.style.display === 'block'){
    feature_items.style.display = "none";
    feature_btn.classList.toggle('btn-expand')
  }else{
    feature_items.style.display = 'block';
    feature_btn.classList.toggle('btn-expand')
  }
})

company_btn.addEventListener('click', ()=>{
  if (company_items.style.display === 'block'){
    company_items.style.display = "none";
    company_btn.classList.toggle('btn-expand')
  }else{
    company_items.style.display = 'block';
    company_btn.classList.toggle('btn-expand')
  }
})