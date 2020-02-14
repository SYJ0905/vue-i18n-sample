// var mySwiper = new Swiper('.swiper-container', {
//   direction: 'horizontal',
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// }) 

/* 定義語言包物件 */
const messages = {
  tw: {
    message: {
      hello: '您好'
    }
  },
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

/* 預設語系 */
let locale = localStorage.getItem('locale') || 'tw'

/* 建立 VueI18n 實體 */
const i18n = new VueI18n({
  locale,
  messages,
})

/* 必須比其他 JS 套件更前面就執行 */
new Vue({ i18n }).$mount('#app')

/* 切換網switchLang站語系 */
function switchLang () {
  locale = this.value;
  console.log(locale);
  i18n.locale = locale
  localStorage.setItem('locale', locale)
}


const buttons = Array.from(document.querySelectorAll('.switchLan'));
buttons.forEach((button) => {
  button.addEventListener('click', switchLang);
});


var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})