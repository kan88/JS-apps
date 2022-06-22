// Мяу! Ты хорошо справился с задачей, но нет времени на отдых!
// Нужно запрограммировать галерею с моими фотографиями для сайта нашей веб-студии. 
// Заказчики должны знать героя веб-разработки в лицо!
// Галерея состоит из нескольких миниатюр (элементы с классом gallery__photo-preview)
//  и большой фотографии (класс full-photo). По клику на миниатюру должно меняться большое 
//  изображение. Большая картинка должна соответствовать превью, по которой кликнул 
//  пользователь.
// Данные для изображений собраны в массив photos. Каждый элемент массива — путь 
// до полноразмерной фотографии. Порядок элементов в этом массиве такой же, как и 
// порядок миниатюр в разметке.

var photos = [
    'gallery/laptop-large.jpg',
    'gallery/microphone-large.jpg',
    'gallery/keyboard-large.jpg',
    'gallery/signboard-large.jpg',
    'gallery/tree-large.jpg'
  ];
  
  
  var thumbnails = document.querySelectorAll('.gallery__photo-preview');
  var fullPhoto = document.querySelector('.full-photo');
  
  var addThumbnailClickHandler = function (thumbnail, photo) {
    thumbnail.addEventListener('click', function () {
  fullPhoto.src = photo;
    });
  };
  
  for (var i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], photos[i]);
  }
  