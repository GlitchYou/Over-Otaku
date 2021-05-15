const items = document.querySelector('.items');
let item;

function create(tagName, atributes = {}) {
  const tag = document.createElement(tagName);
  Object.keys(atributes).forEach((key) => {
    tag.setAttribute(key, atributes[key]);
  });
  return tag;
}

function createButton(alt, bool) {
  if (bool) {
    return create('img', { src: `src/${alt}_on.png`, alt });
  }
  return create('img', { src: `src/${alt}_off.png`, alt });
}

function appendChilds(element, ...elements) {
  elements.forEach((e) => element.appendChild(e));
}

function createItem(src, title, year, view = false, favorite = false, download = false) {
  const short = title.replace(/^(\S+).*/, '$1').toLowerCase();
  const item = create('div', { class: 'item' });
  const img = create('img', { src, alt: short, class: 'tumb' });

  const info = create('div', { class: 'info' });
  const spanTitle = create('span');
  spanTitle.innerText = title;
  const spanYear = create('span');
  spanYear.innerText = year;
  
  const buttons = create('div', { class: 'buttons' });
  const bview = createButton('view', view);
  const bfavorite = createButton('favorite', favorite);
  const bdownload = createButton('download', download);
  appendChilds(buttons, bview, bfavorite, bdownload);
  appendChilds(info, spanTitle, spanYear, buttons);
  appendChilds(item, img, info);
  return item;
}

item = createItem('https://www.imgvault.xyz/images/animes/3107.jpg', 'Haikyuu!!: Sainou to Sense', '2017');
items.appendChild(item);
