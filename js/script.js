// ----------------меню бургер-------------------------------------------------
let bur = document.querySelector('.header__burger')
let men = document.querySelector('.header__menu')
let bod = document.querySelector('body')
let links = document.querySelectorAll('.header__menu  .menu__link')
bur.onclick = function () {
  bur.classList.toggle('active')
  men.classList.toggle('active')
  bod.classList.toggle('lock')
}
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    bur.classList.remove('active')
    men.classList.remove('active')
    bod.classList.remove('lock')
  }
}
// ----------------/меню бургер----------------------------------------------

// ----------------слайдер---------------------------------------------------
let pls = document.querySelectorAll('.pluse')
let itm = document.querySelectorAll('.item')

for (let i = 0; i < pls.length; i++) {
  pls[i].addEventListener('click', function () {
    this.classList.toggle('active')
    this.parentElement.parentElement.classList.toggle('active')

    let titleElement = this.parentElement
    let heightTitleElement = getComputedStyle(titleElement).height
    let textElement = this.parentElement.nextElementSibling
    let heightTextElement = getComputedStyle(textElement).height
    let item = this.parentElement.parentElement
    let heightItem = getComputedStyle(item).height

    if (this.classList.contains('active')) {
      item.style.height =
        titleElement.offsetHeight + textElement.offsetHeight + 'px'
    } else {
      item.style.height = titleElement.offsetHeight + 'px'
    }
  })

      window.addEventListener('load', setHeight)
  function setHeight() {
    pls[i].parentElement.parentElement.style.height =
      pls[i].parentElement.offsetHeight + 'px'
  }


}

// ----------------/слайдер-------------------------------------------------

// -----------------RADIO---------------------------------------------------

let inputR = document.querySelectorAll('.radiobuttons__item> input')
for (index = 0; index < inputR.length; ++index) {
  if (inputR[index].checked) {
    inputR[index].parentElement.classList.add('active')
  }
}

let rb = document.querySelectorAll('.radiobuttons__item')

for (index = 0; index < rb.length; ++index) {
  rb[index].onclick = function () {
    for (index = 0; index < rb.length; ++index) {
      rb[index].classList.remove('active')
      rb[index].firstElementChild.checked = false
    }
    this.firstElementChild.checked = true
    this.classList.toggle('active')
  }
}

// ----------------/RADIO---------------------------------------------------

// ---------------------------- Галерея-------------------------------------
// -------скрол галереии зажатием мыши--------------------

let scroll = document.querySelector('.scroll')

scroll.addEventListener('selectstart', function (e) {
  e.preventDefault()
})

// -------/скрол галереии зажатием мыши--------------------

// -------создание буллитов по колличеству айтемов------

let itemsGal = document.querySelectorAll('.itemm')

if (itemsGal.length > 0) {
  let blockItems = document.querySelector('.testimonials-block__stars')

  let div = document.createElement('div')
  div.classList.add('testimonials-block__star')

  let img = document.createElement('img')
  img.setAttribute('src', 'img/testimonials/star.svg')

  div.insertAdjacentElement('beforeend', img)

  for (let i = 0; i < itemsGal.length; i++) {
    itemsGal[i].setAttribute('id', i + '-item') // добавляем id каждему item для связи с буллитами

    let clon = div.cloneNode(true)

    clon.setAttribute('id', i + '-star') // добавляем id каждему буллиту для связи с айтемами

    blockItems.insertAdjacentElement('beforeend', clon) // вставляем каждый буллит
  }
}
// -------/создание буллитов по колличеству айтемов-----

let starsGal = document.querySelectorAll('.testimonials-block__star') // коллекция буллитов

      window.addEventListener('load', setSc)
  function setSc() {
    alert(7)
scroll.offsetWidth // ширина контейнера
scroll.scrollWidth // ширина скрола
scroll.scrollLeft // проскроленная длина (можно изменять)

  let fullScroll = scroll.scrollWidth - scroll.offsetWidth
  }


// ------------основные функции буллитов-------------------------------
serchActiveItem()
function serchActiveItem() {
  // поиск активного item
  for (let i = 0; i < itemsGal.length; i++) {
    if (itemsGal[i].classList.contains('active')) {
      let key = parseInt(itemsGal[i].getAttribute('id'))
      bullSetActive(key)
    }
  }
}

function bullSetActive(key) {
  // установка соответствующему буллиту класс active
  for (let i = 0; i < starsGal.length; i++) {
    if (key == parseInt(starsGal[i].getAttribute('id'))) {
      for (let i = 0; i < starsGal.length; i++) {
        starsGal[i].classList.remove('active')
      }
      starsGal[i].classList.add('active')
      bullSvgChang()
    }
  }
}

function bullSvgChang() {
  // поиск активного буллита и у него подменяем иконку
  for (let i = 0; i < starsGal.length; i++) {
    // перебираем буллиты и в зависимости от наличия класса подменяем иконку
    if (starsGal[i].classList.contains('active')) {
      starsGal[i].firstElementChild.setAttribute(
        'src',
        'img/testimonials/starG.svg'
      )
    } else {
      starsGal[i].firstElementChild.setAttribute(
        'src',
        'img/testimonials/star.svg'
      )
    }
  }
}
// ------------/основные функции буллитов-------------------------------
let lock = false
// -----работа стрелок--(класс active передается соседнему item)------------
let arrays = document.querySelectorAll('.array') // колекция стрелок

for (let i = 0; i < arrays.length; i++) {
  arrays[i].addEventListener('click', function () {
    if (!lock) {
      if (this.classList.contains('testimonials-block__array-l')) {
        nextPrevious('left')
      } else if (this.classList.contains('testimonials-block__array-r')) {
        nextPrevious('right')
      }
    }
  })
}

function nextPrevious(direction) {
  if (direction == 'left') {
    for (let i = 0; i < itemsGal.length; i++) {
      if (itemsGal[i].classList.contains('active')) {
        if (itemsGal[i].previousElementSibling) {
          for (let i = 0; i < itemsGal.length; i++) {
            itemsGal[i].classList.remove('active')
          }
          itemsGal[i].previousElementSibling.classList.add('active')

          serchActiveItem()
          centrumItem()
        }
        break
      }
    }
  } else if (direction == 'right') {
    for (let i = 0; i < itemsGal.length; i++) {
      if (itemsGal[i].classList.contains('active')) {
        if (itemsGal[i].nextElementSibling) {
          for (let i = 0; i < itemsGal.length; i++) {
            itemsGal[i].classList.remove('active')
          }
          itemsGal[i].nextElementSibling.classList.add('active')

          serchActiveItem()
          centrumItem()
        }
        break
      }
    }
  }
}
// -----//работа стрелок------------------------------------------------

// ----------работа буллитов--(установка класса active  на item соответствующий нажатому буллиту)--------------

for (let i = 0; i < starsGal.length; i++) {
  // перебираем все буллиты и вешаем событие по клику
  starsGal[i].addEventListener('click', function () {
    if (!lock) {
      let key2 = parseInt(this.getAttribute('id'))
      for (let i = 0; i < itemsGal.length; i++) {
        if (key2 == parseInt(itemsGal[i].getAttribute('id'))) {
          for (let i = 0; i < itemsGal.length; i++) {
            itemsGal[i].classList.remove('active')
          }
          itemsGal[i].classList.add('active')
          serchActiveItem()
          centrumItem()
          break
        }
      }
    }
  })
}

// ----------/работа буллитов--(установка класса active  на item соответствующий нажатому буллиту)--------------

// ------поиск элемента с классом activ и центруем его в галерее-----------
function centrumItem() {
  lock = true
  for (let i = 0; i < itemsGal.length; i++) {
    if (itemsGal[i].classList.contains('active')) {
      let coords = itemsGal[i].getBoundingClientRect()
      let centrXwindow = document.documentElement.clientWidth / 2 // центр экрана
      let centrItem = coords.left + coords.width / 2
      let pointsForScrol = centrItem - centrXwindow
      let time = 5
      let del = 300
      let step = pointsForScrol / del

      if (Math.abs(step) < 1) {
        let znak = step / Math.abs(step)

        step = 1 * znak
      }

      if (pointsForScrol > 0) {
        // элемент справа от центра

        const intervalId = setInterval(function () {
          scroll.scrollLeft += step

          let newcoords = itemsGal[i].getBoundingClientRect()
          let centrItem2 = newcoords.left + newcoords.width / 2

          if (centrItem2 == centrXwindow) {
            clearInterval(intervalId)
            lock = false
          }
          if (centrItem2 < centrXwindow) {
            clearInterval(intervalId)
            lock = false
          }

          if (whichBorder()) {
            clearInterval(intervalId)
            lock = false
          }
        }, time)
        // --------------------------------------------------
      }

      if (pointsForScrol < 0) {
        // элемент слева от центра

        const intervalId = setInterval(function () {
          scroll.scrollLeft += step

          let newcoords = itemsGal[i].getBoundingClientRect()
          let centrItem2 = newcoords.left + newcoords.width / 2

          if (centrItem2 == centrXwindow) {
            clearInterval(intervalId)
            lock = false
          }
          if (centrItem2 > centrXwindow) {
            clearInterval(intervalId)
            lock = false
          }

          if (whichBorder()) {
            clearInterval(intervalId)
            lock = false
          }
        }, time)
      }

      break
    }
  }
}

// --------/поиск элемента с классом activ и центруем его в галерее------

function whichBorder() {
   fullScroll = scroll.scrollWidth - scroll.offsetWidth
  //функция определения края галереии
  if (scroll.scrollLeft == 0 || scroll.scrollLeft == fullScroll) {
    return true
  }
}
