document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.site-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
    });
  }
  const lightbox=document.querySelector('.lightbox');
  const lightboxImg=lightbox?.querySelector('img');
  document.querySelectorAll('[data-lightbox]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      if(lightbox&&lightboxImg){
        lightboxImg.src=btn.dataset.lightbox;
        lightboxImg.alt=btn.querySelector('img')?.alt||'Product image';
        lightbox.classList.add('open');
      }
    });
  });
  lightbox?.querySelector('.lightbox-close')?.addEventListener('click',()=>lightbox.classList.remove('open'));
  lightbox?.addEventListener('click',e=>{if(e.target===lightbox) lightbox.classList.remove('open')});
  document.addEventListener('keydown',e=>{if(e.key==='Escape') lightbox?.classList.remove('open')});
});
