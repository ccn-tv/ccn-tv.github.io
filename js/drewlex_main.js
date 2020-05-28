// Кардинально новый продукт, по производительности превосходящий потенциал целого стака верстальщиков


// === DISCLAMER ===
// данный скрипт написан человеком, почти не имеющим отношения к фронтенду, так что просьба закрыть глаза, досчитать до 10, выдохнуть и положить нож на место.

/* ФУНКЦИОНАЛ:
  1. Блокирование контекстного меню, сохранения страницы, копирования и тд. - в <head> страницы пишем <script>var mv_protect="on"</script>
  2. Динамическая дата минус 10 дней (обычно для статьи и тд.) - добавляем элементу класс mv_mdate
  3. Динамическая дата сегодняшнего числа - добавляем элементу класс mv_tdate
  4. Динамические даты для комментов - нужным элементам добавляем класс mv_rdate
  5. Динамический год (текущий) - нужным элементам добавляем класс mv_tyear
  6. Комменты а-ля фейстбук - лайки и работа формы (кто не понял - тот поймет)
  7. Плавный скролл - добавляем элементу-ссылке  класс .scrollto и href с айди элемента, к которому надо скроллить
  8. Таймер - добавляем элементу id="mv_timer"
  9. Слайдер - добавляем родительскому элементу слайдера класс owl-carousel
  
  
  
  10. ФИШЕЧКИ - автокомменты, попапы, рулетка, формы. Для подключения прописываем в нужном месте страницы блок <div class="features-wrapper"></div> и перед закрытием тега <body> ставим настройки, которые ниже. 

  ----В двух словах о настройках фишек----
 
 Блок настроек состоит из 3х основных (обязательных) параметров и 5и дополнительных модулей. Основные отвечают за язык, продукт и половую принадлежность аудитории (например EROGAN это male, BELLINDA это female, а FITOSPRAY это all) все 3 обязательно должны быть указанны! Дополнительные модули отвечают за установку на странице формы (и ее API если надо), автокомментов, попапов и рулетки в любой комбинации: форма - просто форма, рулетка - просто рулетка, форма + рулетка = форма вылезает после вращения рулетки. Модули содержат набор уникальных настроек, позволяющих более точно подогнать фичу на страницу. Не нужные модули можно убрать из настроек чтобы не занимали места.
 
 
 
 
 
<script>
	initFeatures({
        lang : 'ru', // список языков - vn, it, es, co, hr, en, de, fr, ph, cz, id, th, gr, bg, al, ro, sg, en_sg, mk, si, sk, lv, hu, pl, lt, pt
        product : 'СПАЙС', // название продукта
        genderTargetting : 'all', // пол целевой аудитории - all, male, female
        
        form : {
             isNeeded : 1, // 1-включить форму, 0-выключить
			 img: '', // путь до картинки продукта
			 price : true, // плашка с ценой
             priceBrFix : true, // фиксит отображение цен в ценике (true - уберает перенос строки)
			 showSelect : false, // показывать или скрывать поле select
             untilExpire : 600 // таймер окончания акции где 600 = 10мин. Ставим 0 если таймер не нужен.
        },

        autoComments : {
            isNeeded : 1, // 1-включить автокомы, 0-выключить
            bgColor : '#d7f2d8' // цвет фона блока комчиков
		},
        
        popups : {
            isNeeded : 1, // 1-включить попы, 0-выключить
            bgColor: 'rgba(87, 86, 141, 0.8)', // цвет фона сообщения
            textColor : '#fff', // цвет основного текста сообщения
            emphColor : 'cyan', // цвет выделений в сообщениях (например, 'со скидкой XX%', '' )
            blackIcons :  false // черные или белые иконки, значения true или false
        },
        
        wheel : {
            isNeeded : 1, // 1-включить колесо, 0-выключить
		    customWheel : false // ссылка на свое колесо, либо false
        }
	});
</script>
              
*/





window.onload = function(){

  // Главная дата - нужно добавить класс элементу .mv_mdate
  var mv_mdate = document.getElementsByClassName('mv_mdate');
  var mv_now = Date.now(),
      mv_one_month = 1000 * 60 * 60 * 24 * 10;
  if(mv_mdate) {
    for (i=0; i < mv_mdate.length; i++) {
      mv_mdate[i].innerHTML = new Date(mv_now - mv_one_month).toLocaleDateString();
    }
  }

  // Дата сегодня- нужно добавить класс элементу .mv_tdate
  var mv_tdate = document.getElementsByClassName('mv_tdate');
  if(mv_tdate) {
    for (i=0; i < mv_tdate.length; i++) {
      mv_tdate[i].innerHTML = new Date(mv_now).toLocaleDateString();
    }
  }

  // Даты для комментов - нужно элементам где должна быть дата добавить класс .mv_rdate
  var mv_rdate = document.getElementsByClassName('mv_rdate');
  if(mv_rdate) {
  for (i=0; i<mv_rdate.length; i++) {
    let now = Date.now();
    let one_month = 1000 * 60 * 60 * 24 * (i+2)*0.3;
    let new_rdate = new Date(now - one_month).toLocaleDateString();
    let y = mv_rdate.length-i-1;
    mv_rdate[y].innerHTML = new_rdate;
    }
  }

    // Даты для комментов - нужно элементам где должна быть дата добавить класс .mv_rtdate
  var mv_rtdate = document.getElementsByClassName('mv_rtdate');
  if(mv_rtdate) {
  for (i=0; i<mv_rtdate.length; i++) {
    let now = Date.now();
    let one_month = 1000 * 60 * 60 * 24 * (i+2)*0.3;
    let new_rtdate = new Date(now - one_month).toLocaleDateString();
    let new_rtdateH = (new Date(now - one_month).getHours()>=10) ? new Date(now - one_month).getHours() : ('0'+new Date(now - one_month).getHours());
    let new_rtdateM = (new Date(now - one_month).getMinutes()>=10) ? new Date(now - one_month).getMinutes(): ('0'+new Date(now - one_month).getMinutes());
    let new_rtdateT = new_rtdateH + ':' + new_rtdateM;
    let y = mv_rtdate.length-i-1;
    mv_rtdate[y].innerHTML = new_rtdate + ' ' + new_rtdateT;
    }
  }

  // Текущий год - нужно добавить класс элементу .mv_tyear
  var mv_tyear = document.getElementsByClassName('mv_tyear');
  if(mv_tyear) {
    for (i=0; i < mv_tyear.length; i++) {
      mv_tyear[i].innerHTML = new Date().getFullYear();
    }
  }

//ТАЙМЕР
var mv_timer = document.getElementById("mv_timer");
if(mv_timer) {
  setInterval(function() {
   var newDate = new Date();
   var hours = 26 - newDate.getHours();
   var minutes = 60 - newDate.getMinutes();
   var seconds = 60 - newDate.getSeconds();
     if (seconds<10&&minutes<10) {
         mv_timer.innerHTML = hours+":"+0+minutes+":"+0+seconds
       } else if (seconds<10){
         mv_timer.innerHTML = hours+":"+minutes+":"+0+seconds
       } else if (minutes<10){
          mv_timer.innerHTML = hours+":"+0+minutes+":"+seconds
       } else {
       mv_timer.innerHTML = hours+":"+minutes+":"+seconds
     }}, 1000);
} 
var mv_timer_class = document.getElementsByClassName("mv_timer");
if(mv_timer_class) {
  setInterval(function() {
   var newDate = new Date();
   var hours = 26 - newDate.getHours();
   var minutes = 60 - newDate.getMinutes();
   var seconds = 60 - newDate.getSeconds();
   for(i=0; i<mv_timer_class.length; i++){
     if (seconds<10&&minutes<10) {
         mv_timer_class[i].innerHTML = hours+":"+0+minutes+":"+0+seconds
       } else if (seconds<10){
         mv_timer_class[i].innerHTML = hours+":"+minutes+":"+0+seconds
       } else if (minutes<10){
          mv_timer_class[i].innerHTML = hours+":"+0+minutes+":"+seconds
       } else {
       mv_timer_class[i].innerHTML = hours+":"+minutes+":"+seconds
     }}}, 1000); 
}

var mv_slider = document.querySelector('.owl-carousel');
if(mv_slider) {
  var mv_slider_js = document.createElement('script');
  mv_slider_js.src="js/owl.carousel.js";
  document.head.appendChild(mv_slider_js);
  //добавляем главные стили слайдера
  var mv_slider_main_css = document.createElement('link');
  mv_slider_main_css.rel="stylesheet";
  mv_slider_main_css.href="css/owl.carousel.min.css";
  document.body.appendChild(mv_slider_main_css);
  //добавляем главные стили темы
  var mv_slider_default_css = document.createElement('link');
  mv_slider_default_css.rel="stylesheet";
  mv_slider_default_css.href="css/owl.theme.default.css";
  document.body.appendChild(mv_slider_default_css);
}


//НУЖЕН JQuery! - плавный скролл - элементу даем класс scrollto и пишем href с айди элемента к которому надо скроллить
if(window.jQuery) {
    $(".to-form").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });
}


//КОММЕНТЫ №1 - А-ЛЯ ФЕЙСБУК
  // Объявляем переменные
  var send = document.querySelector(".send-btn"),
  textarea = document.querySelector(".textarea"),
  sendContainer = document.querySelector(".input-action"),
  commentNameInput =  document.querySelector(".comment-name-input");


  
  // Работа кнопок 'лайк'
  if (sendContainer) {
    function likeCount(){
        var like = document.querySelectorAll('.like');
        var likeCountOutput = document.querySelectorAll('.like-count');
        [].forEach.call(like, function(item, i){
          item.onclick = function() {
            if (item.classList.contains('liked')) {
              item.classList.remove('liked');
              item.style.fontWeight = "normal";
              --likeCountOutput[i].innerHTML;
              likeCountOutput[i].classList.remove('like-count-liked');
              likeCountOutput[i].classList.add('like-count-unliked');
            } else {
              item.classList.add('liked');
              item.style.fontWeight = "bold";
              ++likeCountOutput[i].innerHTML;
              likeCountOutput[i].classList.add('like-count-liked');
              likeCountOutput[i].classList.remove('like-count-unliked');
            }
          }
        });
    };
  likeCount();

  // Если JS не загрузится, то кнопка отправки комментария будет доступна по-умолчанию
  sendContainer.classList.remove('input-action-focus');
  // И ширина инпута тоже будет больше
   textarea.classList.remove('textarea-focus');


  // При фокусировке на поле ввода появляется кнопка отправления комментария, а также увеличивается высота поля ввода
    textarea.addEventListener("focus", function(event) {
      sendContainer.classList.add("input-action-focus");
      textarea.classList.add("textarea-focus");
    });

  // При потере фокуса поле ввода схлопнется, если оно пустое
    textarea.addEventListener("blur", function() {
      if(!textarea.value) {
        textarea.classList.remove("textarea-focus");
      } else {
        return false;
      }
    });

  // Добавление коммента и проверка заполненности полей
    send.addEventListener("click", function(event) {
      if (!textarea.value) {
        alert("WRITE YOUR COMMENT!");
      } else {
      var allComments = document.querySelectorAll('.comments-item');
      var newComment = document.createElement('div');
      newComment.classList.add('comments-item');
      newComment.classList.add('comment-appear');
      newComment.innerHTML = allComments[allComments.length-1].innerHTML;
      newComment.querySelector('.comment-username').innerHTML= textarea.value;
      newComment.querySelector('.like-count').classList.remove('like-count-liked');
      newComment.querySelector('.like').classList.remove('liked');
      newComment.querySelector('.like').style.fontWeight = 'normal';
       newComment.querySelector('.like-count').innerHTML= 0;
       newComment.querySelector('.comment-date').innerHTML= '';
          // вставляем данные в новый коммент, если есть инпут имени
       if(commentNameInput){
        newComment.querySelector('.comment-text').innerHTML =  '<span class="comment-username">' + commentNameInput.value + '</span>' + textarea.value;
        textarea.value = '';
        commentNameInput.value = '';
        document.querySelector('.comments').insertBefore(newComment, document.querySelector('.comment-input'));
        likeCount();
       } else {
        alert('Your comment is sent for moderation!');
        textarea.value = '';
       }
      }
    });
  }

}


function initFeatures(settings) {
    
    //Проверка настроек
    if (!settings) {
        console.log('%c%s', 'font-size: 30px; color: red;background-color: #ffe7e8', 'Хей, а скрипт настроить? ');
        throw new Error('No Settings Found');
    }
    if (!settings.product) {
        console.log('%c%s', 'font-size: 30px; color: red;background-color: #ffe7e8', 'А продукт кто будет указывать??');
        throw new Error('Product is not set!');
    }
    if (!settings.lang) {
        console.log('%c%s', 'font-size: 30px; color: red;background-color: #ffe7e8', 'А язык??');
        throw new Error('Language is not set!');
    };
    var checkLang = (window.countryList) ? Object.keys(window.countryList)[0] : false;
	if (!!checkLang && (checkLang != settings.lang)) {
		console.log('%c Кантрилист не соотвутствует выбранному языку (но это не точно)', 'font-size: 20px;color: red;background-color: #ffe7e8');
	}
	if ($('.features-wrapper').length == 0) {
		console.log('%c Надо вставить контейнер Фич!', 'font-size: 20px;color: red;background-color: #ffe7e8');
		throw new Error('No features block!');
	};

    
    //Хранилище импортируемых файлов
    if (!settings.formApi || !settings.formApi.isNeeded) {
        var featuresFilesSrc = (window.location.protocol == 'file:') ? {
                 userAva: 'images/autoCommentsAva.jpg',
            refreshingArrow: 'images/autoCommentsRefreshing.gif',
            autoCommStyles: 'css/autoComments.css',
            popupsStyles: 'css/popups.css',
            popupsIconUser: 'images/count-user_black.png',
            popupsIconOrder: 'images/count-order-984_black.png',
            prizeWheel: 'images/prizewheel.png',
            wheelCursor: 'images/wheel-cursor.png',
            wheelStyles: 'css/wheel.css',
            formStyles: 'css/formStyles.css'
        } : {
                 userAva: 'images/autoCommentsAva.jpg',
            refreshingArrow: 'images/autoCommentsRefreshing.gif',
            autoCommStyles: 'css/autoComments.css',
            popupsStyles: 'css/popups.css',
            popupsIconUser: 'images/count-user_black.png',
            popupsIconOrder: 'images/count-order-984_black.png',
            prizeWheel: 'images/prizewheel.png',
            wheelCursor: 'images/wheel-cursor.png',
            wheelStyles: 'css/wheel.css',
            formStyles: 'css/formStyles.css'
        };
    } else {
        var featuresFilesSrc = {
            userAva: 'images/autoCommentsAva.jpg',
            refreshingArrow: 'images/autoCommentsRefreshing.gif',
            autoCommStyles: 'css/autoComments.css',
            popupsStyles: 'css/popups.css',
            popupsIconUser: 'images/count-user_black.png',
            popupsIconOrder: 'images/count-order-984_black.png',
            prizeWheel: 'images/prizewheel.png',
            wheelCursor: 'images/wheel-cursor.png',
            wheelStyles: 'css/wheel.css',
            formStyles: 'css/formStyles.css'
        }
    }

    
 
    
    //Функция- генератор имен
    function genLocalName() {
        var localNames = {

            'id' : ["Said", "Andin", "Rizki", "Mahmud", "Muhammad", "Rahim", "Joko", "Agus", "Wahyu", "Ahmad", "Kurniawan", "Budi", "Arief", "Yusuf", "Fajar", "Indra", "Abdul", "Nugroho", "Hidayat", "Brian", "Taufik", "Aki", "Rudi", "Hanif", "Rian", "Puji", "Subhar", 'Nur', 'Dwi', 'Putri', 'Siti', 'Ainun', 'Aurelia', 'Maria', 'Lidya', 'Ratna', 'Fitri', 'Pratiwi', 'Lestari', 'Rahma', 'Anita', 'Kurnia', 'Yunita', 'Widya', 'Agustina', 'Intan', 'Rini', 'Maya', 'Devi', 'Utami', 'Mimin', 'Cantika', 'Yuni', 'Diana']
        }
        
        
        if (settings.genderTargetting == 'all') {
            var asx = Math.floor(Math.random() * (localNames[settings.lang].length));
            if (asx > localNames[settings.lang].length / 2) {
                
                localStorage.setItem('sex', '0')
            } else {
                
                localStorage.setItem('sex', '1')
            }
            var d = localNames[settings.lang][asx];
            
        } else if (settings.genderTargetting == 'male') {
            
            localStorage.setItem('sex', '1');
            var d = localNames[settings.lang][Math.floor(Math.random() * (localNames[settings.lang].length / 2))];
            
        } else if (settings.genderTargetting == 'female') {
            
            localStorage.setItem('sex', '0');
            var d = localNames[settings.lang][Math.floor((Math.random() * (localNames[settings.lang].length) + localNames[settings.lang].length) / 2)];
            
        } else {
            alert('vvedi pol v nastroykah');
        }
        
       
        return d;
    }
    
    //Функция выодит привальное слово в зависимости от пола сгенерированного имени - сказал\сказала, ебал\ебала 
    function genGenderWords (whichWord) {
        if (localStorage['sex'] == 1) {
            
            var genderWord = {             
                'id': ['', '', '', '', '', '', '', '', '', '']
            }
        } else {
            
            var genderWord = {
                'id': ['', '', '', '', '', '', '', '', '', '']
            }
        }
        
        return genderWord[settings.lang][whichWord]
    }
  
    //Функция выводит строку в формате - ИМЯ из г. ГОРОД
    function orderName() {

        var localFromWord = {
            'id' : ' dari kota '
        }

        return genLocalName() + localFromWord[settings.lang] + genLocalCity() + genGenderWords(9) ;
    }
    
    
    
    
    //Блок автокомментов
    if (!!settings.autoComments && settings.autoComments.isNeeded) {   
    
    var commActions = {
        'id' : {
            likeWord: 'Suka',
            replyWord: 'Jawab',
            justNowWord: 'Baru saja'
        }

    }
    
   
    
    var commBlocks = {
        'id': {
            autoCommWrap: '<div class="comments-refreshing-wrapper"><p class="comments-refreshing-title">Komentar terakhir</p><div class="comments-refreshing"><i>Komentar diperbarui...</i> <br><img src="' + featuresFilesSrc.refreshingArrow + '" alt=""></div>',
            autoComm1: '<div class="comments-item"><div class="comment-avatar"><img src="' + featuresFilesSrc.userAva + '" width="32" height="32"></div><div class="comment-text"><span class="comment-username">' + genLocalName() + '</span>Sudah pesan. Dapat diskon pula! Semoga semua baik-baik saja</div><div class="comment-action"><span class="like">' + commActions[settings.lang].likeWord + '</span><span class="reply">' + commActions[settings.lang].replyWord + '</span><span class="like-count">0</span><span class="comment-date">' + commActions[settings.lang].justNowWord + '</span></div></div>',
            autoComm2: '<div class="comments-item"><div class="comment-avatar"><img src="' + featuresFilesSrc.userAva + '" width="32" height="32"></div><div class="comment-text"><span class="comment-username">' + genLocalName() + '</span>Jangan khawatir! Saya sudah sering pesan ' + settings.product + ', semua pesanan dikemas dalam kemasan yang aman </div><div class="comment-action"><span class="like">' + commActions[settings.lang].likeWord + '</span><span class="reply">' + commActions[settings.lang].replyWord + '</span><span class="like-count">0</span><span class="comment-date">' + commActions[settings.lang].justNowWord + '</span></div></div>',
            autoComm3: '<div class="comments-item"><div class="comment-avatar"><img src="' + featuresFilesSrc.userAva + '" width="32" height="32"></div><div class="comment-text"><span class="comment-username">' + genLocalName() + '</span>Hari ini saya menerima ' + settings.product + '. Akan saya coba gunakan, semoga manjur.</div><div class="comment-action"><span class="like">' + commActions[settings.lang].likeWord + '</span><span class="reply">' + commActions[settings.lang].replyWord + '</span><span class="like-count">0</span><span class="comment-date">' + commActions[settings.lang].justNowWord + '</span></div></div>',
			autoComm4: '<div class="comments-item"><div class="comment-avatar"><img src="' + featuresFilesSrc.userAva + '" width="32" height="32"></div><div class="comment-text"><span class="comment-username">' + genLocalName() + '</span>Terima kasih atas diskon yang diberikan saat saya memesannya! Saya sebelumnya juga pernah memesan ' + settings.product + ', meski tidak begitu mahal. Mau bagaimana lagi, demi produk manjur harus siap bayar, meski tanpa potongan harga.</div><div class="comment-action"><span class="like">' + commActions[settings.lang].likeWord + '</span><span class="reply">' + commActions[settings.lang].replyWord + '</span><span class="like-count">0</span><span class="comment-date">' + commActions[settings.lang].justNowWord + '</span></div></div>',			
			autoComm5: '<div class="comments-item"><div class="comment-avatar"><img src="' + featuresFilesSrc.userAva + '" width="32" height="32"></div><div class="comment-text"><span class="comment-username">' + genLocalName() + '</span>Artikel yang mengesankan, saya akan coba juga. Saya sudah pesan beberapa bungkus, semoga manjur</div><div class="comment-action"><span class="like">' + commActions[settings.lang].likeWord + '</span><span class="reply">' + commActions[settings.lang].replyWord + '</span><span class="like-count">0</span><span class="comment-date">' + commActions[settings.lang].justNowWord + '</span></div></div>',
            autoComm6: '<div class="comments-item"><div class="comment-avatar"><img src="' + featuresFilesSrc.userAva + '" width="32" height="32"></div><div class="comment-text"><span class="comment-username">' + genLocalName() + '</span>Tentu saja manjur! Bagi saya produk ini sudah tidak aneh, soalnya semua kenalan saya juga pakai dan memuji kemanjurannya.</div><div class="comment-action"><span class="like">' + commActions[settings.lang].likeWord + '</span><span class="reply">' + commActions[settings.lang].replyWord + '</span><span class="like-count">0</span><span class="comment-date">' + commActions[settings.lang].justNowWord + '</span></div></div>',
            autoComm7: '<div class="comments-item"><div class="comment-avatar"><img src="' + featuresFilesSrc.userAva + '" width="32" height="32"></div><div class="comment-text"><span class="comment-username">Produsen ' + settings.product + '</span>Perhatian! Karena permintaan yang cukup besar, jumlah barang yang tersedia terbatas, Segeralah pesan! Untuk hari ini sudah terjual lebih dari 5000 paket.</div><div class="comment-action"><span class="like">' + commActions[settings.lang].likeWord + '</span><span class="reply">' + commActions[settings.lang].replyWord + '</span><span class="like-count">0</span><span class="comment-date">' + commActions[settings.lang].justNowWord + '</span></div></div>',
            autoComm8: '<div class="comments-item"><div class="comment-avatar"><img src="' + featuresFilesSrc.userAva + '" width="32" height="32"></div><div class="comment-text"><span class="comment-username">' + genLocalName() + '</span>Sudah pesan langsung beberapa bungkus karena kabarnya tidak akan dijual secara online lagi. Jumlah barangnya sangat terbatas, saya sarankan untuk yang ingin membeli agar segera pesan sebelum kehabisan. </div><div class="comment-action"><span class="like">' + commActions[settings.lang].likeWord + '</span><span class="reply">' + commActions[settings.lang].replyWord + '</span><span class="like-count">0</span><span class="comment-date">' + commActions[settings.lang].justNowWord + '</span></div></div>',
			autoComm9: '<div class="comments-item"><div class="comment-avatar"><img src="' + featuresFilesSrc.userAva + '" width="32" height="32"></div><div class="comment-text"><span class="comment-username">' + genLocalName() + '</span>Teman saya baru saja pulang dari Jepang dan dia bilang kalau sudah lihat  ' + settings.product + ' di apotek. Dia lihat harga sekitar $70 untuk satu bungkus, orang-orang tetap beli meski semahal itu! Gila!</div><div class="comment-action"><span class="like">' + commActions[settings.lang].likeWord + '</span><span class="reply">' + commActions[settings.lang].replyWord + '</span><span class="like-count">0</span><span class="comment-date">' + commActions[settings.lang].justNowWord + '</span></div></div>',			
			autoComm10: '<div class="comments-item"><div class="comment-avatar"><img src="' + featuresFilesSrc.userAva + '" width="32" height="32"></div><div class="comment-text"><span class="comment-username">' + genLocalName() + '</span>Fiuh, saya sudah berhasil pesan. Terima kasih, sebelumnya saya tidak tahu tentang produk ini. Saya baca ulasannya di internet, tampaknya semua puas. Yang terpenting jangan beli barang tiruan, jadi mending pesan di sini langsung.</div><div class="comment-action"><span class="like">' + commActions[settings.lang].likeWord + '</span><span class="reply">' + commActions[settings.lang].replyWord + '</span><span class="like-count">0</span><span class="comment-date">' + commActions[settings.lang].justNowWord + '</span></div></div></div>',
					
        }

    }

    $('.features-wrapper').append(commBlocks[settings.lang].autoCommWrap + commBlocks[settings.lang].autoComm1 + commBlocks[settings.lang].autoComm2 + commBlocks[settings.lang].autoComm3 + commBlocks[settings.lang].autoComm4 + commBlocks[settings.lang].autoComm5 + commBlocks[settings.lang].autoComm6 + commBlocks[settings.lang].autoComm7 + commBlocks[settings.lang].autoComm8 + commBlocks[settings.lang].autoComm9 + commBlocks[settings.lang].autoComm10 + '<style>@import url("' + featuresFilesSrc.autoCommStyles + '");.comments-refreshing-wrapper {background-color: ' + settings.autoComments.bgColor + ' !important}</style>' );
  
    
   
    
 
         // функция обновления комментов
    var commentRefresh = function(a,b) {
      counter = Math.floor(Math.random()*10000)+5000;
      if(document.querySelector('.comments-newly-showed')){
      document.querySelector('.comments-newly-showed').classList.remove('comments-newly-showed');
    }
      document.querySelector('.comments-refreshing').classList.add('refresh-appear');
      
      // убираем анимацию набора текста
      setTimeout(function(){document.querySelector('.comments-refreshing').classList.remove('refresh-appear')}, counter);
      // добавляем коммент
      setTimeout(function(){
      a[b].classList.add('comments-newly-showed');
      ++b;
      
      if(b < a.length){
      setTimeout(commentRefresh,(counter+6000), a,b);
    }
  }, 
            // через одну секунду после того как анимация убралась
  counter+1000)
    }
  var commentsRefreshing = document.querySelector('.comments-refreshing-wrapper');
    if (commentsRefreshing && commentsRefreshing.querySelector('.comments-item')){
      var commentFlag = 0;
       commentsRefreshing.querySelector('.comments-item').classList.add('comments-newly-showed');
      var commentsRefreshingCords = commentsRefreshing.getBoundingClientRect().top + pageYOffset;
        
        window.addEventListener('scroll', function() {
          
          if(commentsRefreshing.getBoundingClientRect().top <= 500 && commentFlag == 0) {
              ++commentFlag;
              var counter = 4000;
              setTimeout(commentRefresh, counter, commentsRefreshing.querySelectorAll('.comments-item'),1);
          } 
        })
    }
    }

    
    //Блок всплывашек
    if (!!settings.popups && settings.popups.isNeeded) {
    
        
        


    // вставляем стили и блок
    
         var popupsBlock = '<div class="show-message"></div><style>@import url("' + featuresFilesSrc.popupsStyles + '");.show-message__item, .show-message__item-first{background-color:' +  ((!settings.popups.bgColor) ? ' ' : settings.popups.bgColor) + ';}.show-message__info{color: ' + ((!settings.popups.textColor) ? ' ' : settings.popups.textColor) + ';} .show-message__info #js-user-id {color: ' + ((!settings.popups.textColor) ? ' ' : settings.popups.textColor) + '} .show-message__emph { color: ' + ((!settings.popups.emphColor) ? ' ' : settings.popups.emphColor) + '}  ' + ((!settings.popups.blackIcons) ? ' ' : '.show-message__info.icon-box::before {  content: " ";  background-image: url("' + featuresFilesSrc.popupsIconUser + '");} .everad-sprite-bucket+.show-message__info.icon-box::before { background-image: url("' + featuresFilesSrc.popupsIconOrder + '");}') + '</style>';
         
    
    document.body.insertAdjacentHTML('beforeend', popupsBlock);
    count_class = ".count-people";

    //функция определения размера скидки (если есть колесо - то будут выводиться разне значения, если нет - то 50%)
    function getDiscount() {
        if (!!settings.wheel && settings.wheel.isNeeded) {
            var discountVal = ['10%', '30%', '15%', '35%'];
            return discountVal[Math.floor(Math.random() * 4)];
        } else {
            var discountVal = '50%';
            return discountVal;
        }
    }
        
        
    lastpack_class = ".lastpack";
    var packages =  Math.ceil(Math.random() * 15 + 15);

    function reducePackages() {
         if(packages == 2) {
            return 2;
        }
        
                --packages;
        return packages;
       
    }
        
        
    // тексты сообщений
    var popupsMsg = {
        'vn': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Số lượng người truy cập trang web:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> vừa đặt mua ' + settings.product + ' <span class="show-message__emph">với giá khuyến mãi ' + getDiscount() + '</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;"> Còn <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> sản phẩm với giá khuyễn mãi.</span></p></div>'
        },
        'ro': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Utilizatori pe pagină:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> a comandat  ' + settings.product + ' <span class="show-message__emph">cu o reducere de  ' + getDiscount() + '</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;"> Ambalaje rămase cu reducere: <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span></span></p></div>'
        },
        'it': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Utenti sulla pagine:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ha ordinato  ' + settings.product + ' <span class="show-message__emph">con lo sconto del ' + getDiscount() + '</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;"> Confezioni rimanenti in offerta: <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span></span></p></div>'
        },
          'pt': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Visitantes online agora:   <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> encomendou  ' + settings.product + ' <span class="show-message__emph"> com desconto  ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Sobrou  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span>  pacotes na promoção</span></p></div>'
        },
        'es': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Usuarios on-line:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ha pedido ' + settings.product + ' <span class="show-message__emph">con el descuento de ' + getDiscount() + '</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Quedan con la oferta especial:  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span></span></p></div>'
        },
        'co': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Usuarios on-line:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ha pedido ' + settings.product + ' <span class="show-message__emph">con el descuento de ' + getDiscount() + '</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Quedan con la oferta especial:  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span></span></p></div>'
        },
        'id': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Jumlah pengunjung situs ini: <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> telah membeli ' + settings.product + ' <span class="show-message__emph">dengan diskon ' + getDiscount() + '</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Tersisa  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> buah selama masa promo</span></p></div>'
        },
        'de': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Anzahl der Besucher auf der Webseite:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> bestellte  ' + settings.product + ' <span class="show-message__emph"> mit einem Rabatt von  ' + getDiscount() + '</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Nur noch  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> St. zum Aktionspreis</span></p></div>'
        },
        'th': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">ผู้เยี่ยมชมเว็บไซต์ในขณะนี้:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> สั่ง  ' + settings.product + ' <span class="show-message__emph"> ได้รับส่วนลด  ' + getDiscount() + '</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">สินค้าโปรโมชั่นคงเหลือ  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> ชิ้น</span></p></div>'
        },
        'gr': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Ο αριθμός των επισκεπτών στην ιστοσελίδα:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> παρήγγειλα ' + settings.product + ' <span class="show-message__emph">με έκπτωση ' + getDiscount() + '</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Έμειναν <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> τεμ. με έκπτωση</span></p></div>'
        },
        'bg': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Посетители на сайта:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> поръча  ' + settings.product + ' <span class="show-message__emph"> с отстъпка ' + getDiscount() + '</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Остават още  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> опаковки в наличност</span></p></div>'
        },
        'ph': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Mga gumagamit:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> Inorder na ' + settings.product + ' <span class="show-message__emph">na may ' + getDiscount() + ' na diskwento</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;"> Natirang pakete na may diskwento: <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span></span></p></div>'
        },
        'cz': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Návštěvníků je teď na webu:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> se slevou   ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Zbývá  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> balení za akční cenu</span></p></div>'
        },
        'ru': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Посетителей сейчас на сайте:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> со скидкой  ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Осталось  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> упаковок по акции</span></p></div>'
        },
        'lt': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Dabar lankytojai lankytojai:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> su nuolaida  ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Liko daugiau  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> atsargų paketai</span></p></div>'
        },
        
         'pl': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Odwiedzający teraz online:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> ze zniżką  ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Pozostało  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> pakiety magazynowe</span></p></div>'
        },
        
            'hu': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Látogatók most online:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> kedvezménnyel  ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Maradt  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> készletcsomagok</span></p></div>'
        },
        
          'lv': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Apmeklētāji tagad tiešsaistē: <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> ar atlaidi  ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Pa kreisi  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> krājumu paketes</span></p></div>'
        },
          'sk': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Návštevníci teraz online:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> so zľavou  ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Zostáva  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> skladových balíkov</span></p></div>'
        },
        'si': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Zdaj je na spletni strani obiskovalcev:   <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> s popustom ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Ostalo je  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> paketov po nižji ceni</span></p></div>'
        },
        'mk': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Посетители на веб-страната сега:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> нарачал   ' + settings.product + ' <span class="show-message__emph"> со попуст  ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Останаа  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> пакувања за промоција</span></p></div>'
        },
        'sg': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">網站的訪問者數量:   <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> 訂購' + settings.product + ' 折扣  ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">还有   <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> 促销产品</span></p></div>'
        },
        'hr': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Posjetitelji sada online:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> s ' + getDiscount() + ' popusta!</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Sada postoji samo  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> paketa po dionici.</span></p></div>'
        },
        'fr': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Visiteurs sur le site en ce moment:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> commandé   ' + settings.product + ' <span class="show-message__emph"> avec une réduction de  ' + getDiscount() + ' !</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Il reste  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> paquets de promotion</span></p></div>'
        },
        'en': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Vizitors Online:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ordered  ' + settings.product + ' <span class="show-message__emph"> with a  ' + getDiscount() + ' discount!</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Only  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span>  packages with a discount left</span></p></div>'
        },
          'en_sg': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Vizitors Online:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ordered  ' + settings.product + ' <span class="show-message__emph"> with a  ' + getDiscount() + ' discount!</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Only  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span>  packages with a discount left</span></p></div>'
        },
        'al': {
            message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Vizitorët online tani:  <span id="js-user-id"></span></p></div>',
            message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ka porositur  ' + settings.product + ' <span class="show-message__emph"> me zbritje  ' + getDiscount() + '!</span></p></div>',
            message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Kanë mbetur edhe  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span>  pako me ofertë</span></p></div>'
        },
    }
    
    
    
    flag_phone = true;
    flag_five = true;
    flag_key = true;
    idleTimer = null;
    idleState = false;
    idleWait = 30000;
    if (parseInt($(".price_land_s1:first").text()) > 0) {
        price = parseInt($(".price_land_s1:first").text()) || 990
    } else {
        price = 0
    }
    var d = first_count();
    var c = new Date();
    var e = parseInt(c.getDate());
    var b = "27";
    changeBlink(b);
    var a = [4, 4, 4, 5, 5];
    if (localStorage.getItem("___cp")) {
        tm = parseInt(localStorage.getItem("___tm"));
        if (e - tm == 0) {
            d = localStorage.getItem("___cp");
            b = localStorage.getItem("___lp");
            changeBlink(b);
        } else {
            setLS(e, b, a, d)
        }
    } else {
        setLS(e, b, a, d)
    }
    $(count_class).text(d);
    $(lastpack_class).text(b);
    if ($(window).width() > 991) {
        $(document).bind("keydown", function() {
            if (flag_key) {
                clearTimeout(idleTimer);
                idleState = false;
                idleTimer = setTimeout(function() {
                    flag_key = false;
                    idleState = true
                }, idleWait)
            }
        });
        $("body").trigger("keydown")
    }
    $(".show-message").on("click", function() {
        $(".show-message__item").fadeOut(100);
        setTimeout(function() {
            $(".show-message").empty()
        }, 200)
    });
    setTimeout(function() {
        popUp()
    }, 8000)

    function first_count() {
        var e = new Date();
        var c = e.getHours();
        var a = e.getMinutes();
        var b = 100;
        var f = b + c * 12 + Math.floor(a / 5);
        return f
    }

    function popUp() {
        var a = rand(321, 769);
        localStorage.setItem("___rp", a);
        shwMsg(popupsMsg[settings.lang].message02, "", a);
        setTimeout(function() {
            var b = parseInt(localStorage.getItem("___lp"));
            if (b <= 5) {
                if (flag_five) {
                    shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
                    flag_five = false;
                    setTimeout(function() {
                        showPopupEnd()
                    }, 12000)
                }
            } else {
                var c = JSON.parse(localStorage.getItem("___sp"));
                showPopupBegin(b, c)
            }
        }, 12000)
    }

    function showPopupBegin(e, b) {
        var a = orderName();
        var g;
        var c;
        var i;
        var f;
        var h;
        var d;
        if ((b.length == 2) && (flag_phone)) {
            shwMsg(popupsMsg[settings.lang].message03, a, 0);
            flag_phone = false;
            setTimeout(function() {
                h = e;
                showPopupBegin(h, b)
            }, 13000)
        } else {
            g = Math.floor(Math.random() * (b.length));
            c = b[g];
            i = parseInt(window.price777) * parseInt(c) + window.curr777;
            f = parseInt(localStorage.getItem("___cp")) + 1;
            h = e - c;
            if ((price == 0) || (price == 1)) {
            } else {
                // d = '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name">' + a + '</span></span>, сделал(а) заказ на сумму ' + i + ', заказано <span class="bay">' + c + '</span> <span class="paced">упаковок</span><br><span class="package_left"> Осталось <span class="pacedNamed"></span> по акции <span class="blink_me">' + h + "</span></span></p></div>";
                changeBlink(h);
            }
            b.splice(g, 1);
            localStorage.setItem("___lp", h);
            localStorage.setItem("___sp", JSON.stringify(b));
            localStorage.setItem("___cp", f);
            $(count_class).text(f);
            $(lastpack_class).text(h);
            shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
            setTimeout(function() {
                if (h > 5) {
                    showPopupBegin(h, b)
                } else {
                    if (flag_five) {
                        shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
                        flag_five = false;
                        setTimeout(function() {
                            showPopupEnd()
                        }, 12000)
                    } else {
                        showPopupEnd()
                    }
                }
            }, 13000)
        }
    }

    function showPopupEnd() {
        var b = true;
        var a = "";
        setInterval(function() {
            var c = new Array(0, 1);
            var d = c[Math.floor(Math.random() * (c.length))];
            if (d == 0) {
                kindx = rand(1, 33);
                rp = parseInt(localStorage.getItem("___rp"));
                if (b) {
                    rp = rp + kindx;
                    b = false
                } else {
                    rp = rp - kindx;
                    b = true
                }
                localStorage.setItem("___rp", rp);
                var nextMsg = Math.round(Math.random());
                if(nextMsg == 0){

                shwMsg(popupsMsg[settings.lang].message02, "", rp)
            } else {
                shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
            }
            } else {
                a = orderName();
                shwMsg(popupsMsg[settings.lang].message03, a, 0)
            }
        }, 13000)
    }

   

    function rand(b, a) {
        b = parseInt(b);
        a = parseInt(a);
        return Math.floor(Math.random() * (a - b + 1)) + b
    }

    function shwMsg(c, a, b, x) {
        $(".show-message").append(c);
        if (x != "") {
             $(".js-leftpacks").text(x);
        }
        if (a != "") {
            $(".js-name").text(a)
        }
        if (b != 0) {
            $("#js-user-id").text(b)
        }
        $(".show-message__item").slideDown(500).delay(5000).slideUp(500).delay(5000);
        setTimeout(function() {
            $(".show-message").empty()
        }, 6500)
    }

    function setLS(d, b, a, c) {
        localStorage.setItem("___cp", c);
        localStorage.setItem("___tm", d);
        localStorage.setItem("___lp", b);
        localStorage.setItem("___sp", JSON.stringify(a))
    };

    function changeBlink(e) {
        var elem = document.body.querySelectorAll('.left.blink');
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerHTML = e;
        };
    }
}            
       
    
    //Блок рулетки
    if (!!settings.wheel && settings.wheel.isNeeded) {
        
	
	var wheelBlocks = {
		'id': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Mencoba keberuntungan Anda!</b><br>Situs kami memberi Anda peluang untuk mendapatkan diskon -50% pada ' + settings.product + '. Untuk melakukan ini, tekan tombol "SPIN" dan tunggu sampai roda keberuntungan berhenti. Mungkin Anda akan beruntung hari ini! Semoga berhasil!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Selamat!</span> <p class="pop-up-text">Anda memenangkan diskon 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',

		},
		'vn': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Xin chú ý!</b><br>Cổng thông tin của chúng tôi cung cấp cho các độc giả của mình khuyến mãi giảm giá cho sản phẩm ' + settings.product + '. Hãy thử vận may của bạn và nhấp vào nút "SPIN". Nếu may mắn, bạn có thể đặt mua thuốc với mức giá thấp hơn bình thường! Chúc may mắn!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Chúc mừng!</span> <p class="pop-up-text">Bạn đã nhận được giảm giá -50% cho sản phẩm ' + settings.product + '</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
		},
		'it': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Attenzione!</b><br>Il nostro portale mette in palio uno sconto aggiuntivo su ' + settings.product + '. Tentate la fortuna e premete il tasto "SPIN". Se sarete fortunati potrete ordinare il preparato ad ancora meno! Buona fortuna!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Congratulazioni!</span> <p class="pop-up-text">Potete ordinare ' + settings.product + ' con lo sconto del 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
		},
		'es': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Por favor ten cuidado!</b><br>En nuestro sitio ofrecemos descuentos a los lectores en toda la producción. Prueba tu suerte y presiona el botón "SPIN". ¡Si tiene suerte, puede solicitar nuestra producción a un precio inferior al habitual! Buena suerte! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Felicitaciones!</span> <p class="pop-up-text">¡Has obtenido un descuento del 50% en ' + settings.product + '!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
		},
		'pt': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Atenção!</b><br>Os visitantes do nosso site têm a oportunidade exclusiva de encomendar '+ settings.product +' com um desconto de até 50%! Para fazer isso, inicie a roda da fortuna clicando no botão "SPIN" e espere que ele pare completamente. Quem sabe, talvez você seja o sortudo que consiga economizar muito dinheiro hoje! Boa sorte! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Parabéns!</Span> <p class="pop-up-text">Você pode encomendar '+ settings.product +' com 50% de desconto!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        'co': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Por favor ten cuidado!</b><br>En nuestro sitio ofrecemos descuentos a los lectores en toda la producción. Prueba tu suerte y presiona el botón "SPIN". ¡Si tiene suerte, puede solicitar nuestra producción a un precio inferior al habitual! Buena suerte! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Felicitaciones!</span> <p class="pop-up-text">¡Has obtenido un descuento del 50% en ' + settings.product + '!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
		},
		'ro': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Atenţie!</b><br>Portalul nostru oferă o reducere pentru ' + settings.product + '. Încercaţi-vă norocul şi apăsaţi pe butonul "SPIN". Dacă vă v-a zîmbi norocul veţi putea comanda medicamentul cu un preţ încă mai scăzut! Succes! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Vă felicităm!</span> <p class="pop-up-text">Aţi primit o reducere de -50% pentru ' + settings.product + '!</p> <a class="pop-up-button" id="goto123" href="#">Ok</a> </div> </div>',
			
		},
		'cz': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Pozor!</b><br>Náš webový portál daruje možnost získat slevu na ' + settings.product + '. Stiskněte Spin a mějte štěstí. Pokud se vám bude dařit, získáte zboží se slevou. Hodně štěstí! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Gratulujeme!</span> <p class="pop-up-text">Teď si můžete objednat ' + settings.product + ' se slevou 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
		},
		'th': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>โปรดทราบ!</b><br>ตอนนี้กำลังมีการจับรางวัลเพื่อส่วนลดเพิ่มเติมสำหรับ ' + settings.product + ' ใช้โชคดีที่มีของคุณและกดปุ่ม "SPIN" ถ้าโชคดี คุณจะสามารถสั่งผลิตภัณฑ์ได้ในราคาพิเศษสุดๆ! ขอให้คุณโชคดี! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">ยินดีด้วย!</span> <p class="pop-up-text">คุณสามารถสั่ง ' + settings.product + ' พร้อมส่วนลด 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
		},
		'gr': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Δοκιμάστε την τύχη σας!</b><br>Ο ιστότοπός μας σας δίνει την ευκαιρία να πάρετε μια έκπτωση 50% στο ' + settings.product + '. Για να το κάνετε, πιέστε το πλήκτρο "SPIN" και περιμένετε να σταματήσει ο τυχερός τροχός. Ίσως να είστε τυχεροί σήμερα! Καλή τύχη!  </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Συγχαρητήρια!</span> <p class="pop-up-text">Κερδίστε έκπτωση 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
		},
		'de': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Achtung!</b><br>Unser Portal spielt einen zusätzlichen Rabatt auf ' + settings.product + ' aus. Fordern Sie Ihr Glück heraus und klicken Sie auf die Schaltfläche "SPIN". Wenn Sie Glück haben, können Sie ein Präparat zu einem niedrigeren Preis bestellen! Viel Glück! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Herzlichen Glückwunsch!</span> <p class="pop-up-text">Sie können ' + settings.product + ' mit einem Rabatt von 50% bestellen!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
		
		},
        'bg': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Опитай късмета си!</b><br>Нашият сайт ви дава възможност да получите 50% отстъпка от цената на лекарството Erogan. За да направите, това натиснете бутона "SPIN" и изчакайте, докато спре колелото на късмета. Може би, днес ще имаш късмет точно ти! Успех!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Честито!</span> <p class="pop-up-text">Ти печелиш 50% отстъпка!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
				
        },
		'fr': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Attention!</b><br>Notre portail offre des rabais supplémentaires sur ' + settings.product + ' . Découvrez la fortune et cliquez sur le bouton "SPIN". Si vous aurez de la chance, vous pouvez commander ce remède au prix encore plus bas. Bonne chance!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Félicitations!</span> <p class="pop-up-text">Vous pouvez commander ' + settings.product + ' avec la réduction 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
		},
		'al': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Kujdes!</b><br>Portali ynë i ofron lexuesve mundësinë të përfitojë një zbritje deri në -50% për ' + settings.product + '. Shtypni butonin “SPIN”, dhe prisni deri sa te ndalojë rrota e fatit! Ndoshta pikërisht juve do t’iu buzëqesh sot fati, dhe do të keni mundësinë të bëni porosinë me vetëm gjysëm çmimi! Ju urojmë fat!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Ju përgëzojmë!</span> <p class="pop-up-text">Ju mund ta porositni ' + settings.product + ' me një zbritje prej 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
		},
        'ru': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Внимание!</b><br>У поситителей нашего сайта есть эксклюзивная возможность заказать ' + settings.product + ' со скидкой до 50%! Для этого запустите колесо фортуны нажатием на кнопку "SPIN", и затем дождитесь его полной остановки. Кто знает, может именно Вы тот счастливчик, которому сегодня удастся неплохо сэкономить! Удачи! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Поздравляем!</span> <p class="pop-up-text">Вы можете заказать ' + settings.product + ' со скидкой 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        
        
          'lt': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Dėmesio!</b><br>Mūsų svetainės lankytojai turi išskirtinę galimybę užsisakyti. ' + settings.product + ' iki 50% nuolaida! Norėdami tai padaryti, paleiskite likimo ratą paspaudę mygtuką „SPIN“ ir palaukite, kol jis visiškai sustos. Kas žino, gal jūs esate laimingas, kuris šiandien galės sutaupyti pinigų! Sėkmės! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Sveikiname!</span> <p class="pop-up-text">Galite užsisakyti ' + settings.product + ' su 50% nuolaida!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        
        
         'pl': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Dėmesio!</b><br>Mūsų svetainės lankytojai turi išskirtinę galimybę užsisakyti ' + settings.product + ' iki 50% nuolaida! Norėdami tai padaryti, paleiskite likimo ratą paspaudę mygtuką „SPIN“ ir palaukite, kol jis visiškai sustos. Kas žino, gal jūs esate laimingas, kuris šiandien galės sutaupyti pinigų! Sėkmės! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Sveikiname!</span> <p class="pop-up-text">Galite užsisakyti ' + settings.product + ' su 50% nuolaida!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        
        
        'pl': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Uwaga!</b><br>Odwiedzający naszą stronę mają wyłączną możliwość zamówienia. ' + settings.product + ' do 50% taniej! Aby to zrobić, uruchom koło fortuny, naciskając przycisk "SPIN", a następnie zaczekaj, aż całkowicie się zatrzyma. Kto wie, może jesteś szczęściarzem, który może dziś zaoszczędzić dużo pieniędzy! Powodzenia! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Gratulacje!</span> <p class="pop-up-text">Możesz zamówić ' + settings.product + ' z 50% zniżką!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        
        
         'hu': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Figyelem!</b><br>Honlapunk látogatói kizárólagos lehetőséget biztosítanak a megrendelésre. ' + settings.product + ' akár 50% kedvezmény! Ehhez indítsa el a szerencse kerékét a "SPIN" gomb megnyomásával, majd várja meg, amíg teljesen leáll. Ki tudja, talán te vagy a szerencsés ember, aki ma sok pénzt takaríthat meg! Sok szerencsét! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Gratulálunk!</span> <p class="pop-up-text">Rendelhet ' + settings.product + ' 50% kedvezmény!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
         'lv': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Uzmanību!</b><br>Mūsu vietnes apmeklētājiem ir ekskluzīva iespēja pasūtīt. ' + settings.product + ' līdz 50% atlaide! Lai to izdarītu, ieslēdziet laimes riteni, nospiežot pogu "SPIN", un pēc tam pagaidiet, līdz tas pilnībā apstājas. Kas zina, varbūt esat laimīgs, kurš šodien var ietaupīt daudz naudas! Good luck! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Apsveicam!</span> <p class="pop-up-text">Jūs varat pasūtīt ' + settings.product + ' ar 50% atlaidi!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        'sk': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Varovanie!</b><br>Naši návštevníci stránok majú exkluzívnu príležitosť objednať ' + settings.product + ' až 50% z ceny! Ak to chcete urobiť, spustite kolo šťastia stlačením tlačidla "SPIN" a počkajte, kým sa úplne zastaví. Kto vie, možno ste šťastný, kto dnes ušetrí peniaze! Veľa šťastia! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Blahoželáme!</span> <p class="pop-up-text">Môžete si ho objednať ' + settings.product + ' s 50% zľavou!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        'si': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Pozor!</b><br>Obiskovalci naše spletne strani imajo enkratno možnost naročila ' + settings.product + ' s popustom do 50%! Za to zavrtite kolo fortune s pritiskom gumba "SPIN" in počakajte da se zaustavi. Kdo ve, mogoče ste Vi ta srečnež, ki bo lahko danes privarčeval z denarjem! Srečno! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Čestitamo!</span> <p class="pop-up-text">Lahko naročite ' + settings.product + ' s popustom 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        'mk': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Внимание!</b><br> Посетителите на нашата веб-страна имаат ексклузивна можност да нарачаат ' + settings.product + ' со попуст до 50%! Потребно е да си ја пробате среќата со притискање на копчето "SPIN", и потоа да почекате до неговото целосно запирање. Кој знае, можеби токму Вие сте тој среќник, кој што денеска добро ќе заштеди! Среќно! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Ви честитаме!</span> <p class="pop-up-text"> Вие можете да нарачате ' + settings.product + ' со попуст 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        'sg': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>注意!</b><br>我們網站的訪客有獨家訂購的機會' + settings.product + ' 折扣高達50％！ 要做到這一點，啟動命運之輪按下"SPIN"按鈕, 然後等待它完全停止。 誰知道，也許你是幸運的人今天可以節省一些錢！ 祝你好運！ </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">稱慶!</span> <p class="pop-up-text">你可以訂購' + settings.product + '享受50％的折扣！</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        'bg': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Внимание!</b><br>Посетителите на нашия сайт имат изключителната възможност да поръчат ' + settings.product + ' с 50% отстъпка! За тази цел трябва да завъртите колелото на късмета като натиснете бутона "SPIN" и след това да изчакате докато то спре напълно. Кой знае, може би точно Вие сте този късметлия, който днес ще успее хубаво да спести! Късмет! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Честито!</span> <p class="pop-up-text">Можете да поръчате ' + settings.product + ' с 50% отстъпка! </p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        'hr': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Pozor!</b><br>Posjetitelji naše stranice imaju ekskluzivnu mogućnost naručivanja ' + settings.product + ' s popustima do 50%! Za ovo morate pokreniti kotač sreće pritiskom na gumb "SPIN", i onda pričekajte da se potpuno zaustavi. Tko zna, možda Vi ste sretni koji će danas uspjeti uštedjeti svoj novac! Sretno! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Čestitamo!</span> <p class="pop-up-text">Možete naručiti ' + settings.product + ' popustom 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        'ph': {
			wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Atensyon!</b><br> Ang aming mambabasa ay may eksklusibong pagkakataong umorder ' + settings.product + '  na may diskwento hanggang 50%! Pindutin ang “SPIN” button para maumpisahan ang fortune wheel at antaying tumigil. Malay mo, baka ikaw ang maswerteng tao na makakuha ng pinakamagandang diskwento ngayon! Good luck! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Binabati kita!</span> <p class="pop-up-text">Pwedeng umorder ' + settings.product + ' na may 50% na diskwento !</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
		},
        'en': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Attention!</b><br>Our readers have an exclusive opportunity to order ' + settings.product + ' with discount up to 50%! Just launch the fortune wheel by pressing the "SPIN" button, and wait for it to stop. Who knows, maybe it is you that lucky guy, who will get the best discount today! Good Luck! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Congratulations!</span> <p class="pop-up-text">You can order ' + settings.product + ' with a 50% discount!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
        'en_sg': { 
            wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Attention!</b><br>Our readers have an exclusive opportunity to order ' + settings.product + ' with discount up to 50%! Just launch the fortune wheel by pressing the "SPIN" button, and wait for it to stop. Who knows, maybe it is you that lucky guy, who will get the best discount today! Good Luck! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
			popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Congratulations!</span> <p class="pop-up-text">You can order ' + settings.product + ' with a 50% discount!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
			
        },
	};
        
	 $('body').append(wheelBlocks[settings.lang].popup + '<style>@import url("' + featuresFilesSrc.wheelStyles + '");\n </style>' );

	(!!settings.form && settings.form.isNeeded) ? $('.features-wrapper').prepend(wheelBlocks[settings.lang].wheel + genLocalForm()): $('.features-wrapper').prepend(wheelBlocks[settings.lang].wheel)
	var wheel = document.querySelector('.wheel-img');
	var resultWrapper = document.querySelector('.spin-result-wrapper');
	// направляем все ссылки на форму, если это ленд
	
	// запускаем колесо по клику
	$('.cursor-text').click(function() {
		if (wheel.classList.contains('rotated')) {
			resultWrapper.style.display = "block";
		} else {
			wheel.classList.add('super-rotation');
			setTimeout(function() {
				resultWrapper.style.display = "block";
			}, 8000);
			setTimeout(function() {
				if (!!settings.form && settings.form.isNeeded) {
					$('.spin-wrapper').slideUp();
					$('.order_block').slideDown();
				start_timer();
				}
			}, 10000);
			wheel.classList.add('rotated');
		}
	});
	if (!!settings.form && settings.form.isNeeded) {
		$('.close-popup, .pop-up-button').click(function(e) {
			e.preventDefault();
			$('.spin-result-wrapper').fadeOut();
			var top = $('.toform').offset().top;
			$('body,html').animate({
				scrollTop: top
			}, 800);
		});
	} else {
		$('.close-popup').click(function(e) {
			e.preventDefault();
			$('.spin-result-wrapper').fadeOut();
			
		});
	}
        
        
}
    
    
    //Блок формы
    if (!!settings.form && settings.form.isNeeded) {

        if ($('.order_form').length == 0) {
            $('.features-wrapper').prepend(genLocalForm());
            
            var timerFlag = 0;
            $(window).scroll(function () {
                var timerOffset = $('.order_form').offset().top - $(window).height() * 1.5;
                if ($(this).scrollTop() > timerOffset && timerFlag === 0) {
                    start_timer();
                    ++timerFlag;
                }
            })
        } 
        
        
		$('a').click(function(e) {
			var top = $((!!settings.wheel && settings.wheel.isNeeded) ? '.toform' : '.order_block').offset().top;
			e.preventDefault();
			$('body,html').animate({
				scrollTop: top
			}, 800);
           
            
        
	
    })}
    

        

                     

function outputDat(m, fullM) {
	var d = new Date();
	var p = new Date(d.getTime() - m * 86400000);
	var monthA = (fullM === false) ? '01,02,03,04,05,06,07,08,09,10,11,12'.split(',') : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
	var w = p.getDate();
	var ret = (fullM === false) ? p.getDate() + '.' + monthA[p.getMonth()] + '.' + p.getFullYear() : p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear();
	return ret;
}
var time = settings.form.untilExpire;
var intr;

	 function start_timer() {
		intr = setInterval(tick, 1000);
	}


function tick() {
	time = time - 1;
	var mins = Math.floor(time / 60);
	var secs = time - mins * 60;
	if (mins == 0 && secs == 0) {
		clearInterval(intr);
	}
	secs = secs >= 10 ? secs : "0" + secs;
    mins = mins >= 10 ? mins : "0" + mins;
	$("#min").html(mins);
	$("#sec").html(secs);
}
    
    
}

