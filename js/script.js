// ----------------меню бургер-------------------------------------------------
let bur = document.querySelector('.header__burger')
let men = document.querySelector('.header__menu')
let bod = document.querySelector('body')
bur.onclick = function () {
  bur.classList.toggle('active')
  men.classList.toggle('active')
  bod.classList.toggle('lock')
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
}

// ----------------/слайдер-------------------------------------------------

// -----------------RADIO---------------------------------------------------

let inputR = document.querySelectorAll('.radiobuttons__item> input')
for (index = 0; index < inputR.length; ++index) {
  if (inputR[index].checked) {
    console.log(inputR[index])
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
let speed = 1 // Скорость скролла
let scroll = document.querySelector('.scroll')
let left = 0 // Отпустили мышку — сохраняем положение скролла
let drag = false
let coorX = 0 // Нажали мышку — сохраняем координаты

scroll.addEventListener('selectstart', function (e) {
  e.preventDefault()
})

scroll.addEventListener('pointerdown', function (e) {
  drag = true
  coorX = e.pageX - this.offsetLeft
})

document.addEventListener('pointerup', function () {
  drag = false
  left = scroll.scrollLeft
})
scroll.addEventListener('pointermove', function (e) {
  if (drag) {
    this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX) * speed
  }
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

scroll.offsetWidth // ширина контейнера
scroll.scrollWidth // ширина скрола
scroll.scrollLeft // проскроленная длина (можно изменять)
let fullScroll = scroll.scrollWidth - scroll.offsetWidth

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
        '/img/testimonials/starG.svg'
      )
    } else {
      starsGal[i].firstElementChild.setAttribute(
        'src',
        '/img/testimonials/star.svg'
      )
    }
  }
}
// ------------/основные функции буллитов-------------------------------

// -----работа стрелок--(класс active передается соседнему item)------------
let arrays = document.querySelectorAll('.array') // колекция стрелок

for (let i = 0; i < arrays.length; i++) {
  arrays[i].addEventListener('click', function () {
    if (this.classList.contains('testimonials-block__array-l')) {
      nextPrevious('left')
    } else if (this.classList.contains('testimonials-block__array-r')) {
      nextPrevious('right')
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
  })
}

// ----------/работа буллитов--(установка класса active  на item соответствующий нажатому буллиту)--------------

// ------поиск элемента с классом activ и центруем его в галерее-----------
function centrumItem() {
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
        alert(' шаг меньше 1')
        alert('шаг : ' + step)
        alert('знак : ' + znak)
        step = 1 * znak
        alert('теперь шаг : ' + step)
      }

      console.log(centrXwindow + ' - центр экрана')
      console.log(centrItem + ' -центр item')
      console.log(pointsForScrol + ' -разница между центрами')
      console.log(scroll.scrollLeft + ' -проскроллено')

      if (pointsForScrol > 0) {
        // элемент справа от центра

        const intervalId = setInterval(function () {
          scroll.scrollLeft += step
          console.log('шаг')

          let newcoords = itemsGal[i].getBoundingClientRect()
          let centrItem2 = newcoords.left + newcoords.width / 2
          console.log(newcoords.width + ' -!!! ширина item')
          console.log(newcoords.left + ' -!!! левый угол item')
          console.log(centrXwindow + ' -!!! центр экрана')
          console.log(centrItem2 + ' -!!! центр item')
          if (centrItem2 == centrXwindow) {
            clearInterval(intervalId)
            console.log('анимация закончилась - item совпал с центром')
            console.log(centrXwindow)
            console.log(centrItem2)
          }
          if (centrItem2 < centrXwindow) {
            clearInterval(intervalId)
            console.log('анимация закончилась - item проскользил')
            console.log(centrXwindow)
            console.log(centrItem2)
          }

          if (whichBorder()) {
            clearInterval(intervalId)
            console.log('анимация закончилась у края')
            console.log(centrXwindow)
            console.log(centrItem2)
          }
        }, time)
        // --------------------------------------------------
      }

      if (pointsForScrol < 0) {
        // элемент слева от центра

        const intervalId = setInterval(function () {
          scroll.scrollLeft += step
          console.log('шаг')

          let newcoords = itemsGal[i].getBoundingClientRect()
          let centrItem2 = newcoords.left + newcoords.width / 2
          console.log(newcoords.width + ' -!!! ширина item')
          console.log(newcoords.left + ' -!!! левый угол item')
          console.log(centrXwindow + ' -!!! центр экрана')
          console.log(centrItem2 + ' -!!! центр item')
          if (centrItem2 == centrXwindow) {
            clearInterval(intervalId)
            console.log('анимация закончилась - item совпал с центром')
            console.log(centrXwindow)
            console.log(centrItem2)
          }
          if (centrItem2 > centrXwindow) {
            clearInterval(intervalId)
            console.log('анимация закончилась - item проскользил')
            console.log(centrXwindow)
            console.log(centrItem2)
          }

          if (whichBorder()) {
            clearInterval(intervalId)
            console.log('анимация закончилась у края')
            console.log(centrXwindow)
            console.log(centrItem2)
          }
        }, time)
      }

      break
    }
  }
}

// --------/поиск элемента с классом activ и центруем его в галерее------

function whichBorder() {
  //функция определения края галереии
  if (scroll.scrollLeft == 0 || scroll.scrollLeft == fullScroll) {
    return true
  }
}
