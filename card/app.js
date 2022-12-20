const template = document.getElementById('template');

const slide = template.content.querySelector('.slide');

getData().forEach(e => {
    const elem = document.importNode(slide, true);
    for (const key in e) {
      if (key === 'img') {
        elem.style.backgroundImage = `url(${e.img})`;
      } else {
        elem.querySelector('.' + key).textContent = e[key];
      }
    }
    template.appendChild(elem)
    console.log(template)
  });

const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearactiveClasses()
        slide.classList.add('active')
    })
}

function clearactiveClasses () {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

function getData() {
  return [
    {
      "name": "Суды",
      "img": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
    },
    {
      "name": "Поставка",
      "img": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
    },
    {
      "name": "Купля/продажа",
      "img": "https://images.unsplash.com/photo-1642543348745-03b1219733d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
    },
    {
      "name": "Аренда",
      "img": "https://images.unsplash.com/photo-1618347191821-51285853505f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
    },
    {
      "name": "Трудовой",
      "img": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
    },
  ];
}