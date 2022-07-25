
/* проверка на загрузку контента */
document.addEventListener('DOMContentLoaded',() => {

      /* подложка для всплывающего меню */
      // document.querySelector('.menu__btn').addEventListener('click',function (e) {
      //       e.preventDefault();
      //       document.querySelector('.menu__inner').classList.toggle('active');
      //       document.querySelector('body').classList.toggle('fixed');
      // });




      /* запускаю считывание попадания в экран */

      const gridItem = document.querySelectorAll('.hidden');
      const options = {
            root: null,
            threshold: 0.85,
      };


      const observer = new IntersectionObserver(function (entries,observer) {
            entries.forEach(entry => {

                  // console.log('entered')
                  if (!entry.isIntersecting) {
                        entry.target.classList.remove('hidden');
                        return;
                  }
                  entry.target.classList.remove('hidden');
            });
      },options);

      gridItem.forEach(gridItem => {
            observer.observe(gridItem);
      });


     //
     //  /* внутренний процент скролла */
     //  const wrapper = document.querySelector('.wrapper');
     //  const rocket = document.querySelector('#rocket');
     //
     //
     //  wrapper.addEventListener('scroll',() => {
     //        scTopPr = wrapper.scrollTop / (wrapper.offsetHeight * 6);
     //        console.log(scTopPr);
     //
     //        /* передача координат в css */
     //        if(scTopPr>0,16,() => {
     //        /* rocket.style.top = (70 * (0.2 + scrollTopPr) / 0.4) & '%' */
     //              console.log('works');
     //        });
     //  });
     //
     // /*  document.querySelector('#rocket').style.top='30' && '%'; */

      


});