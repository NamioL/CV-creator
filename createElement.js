
// create Div
const div = ( elemId, elemClass, elemLocation ) => {
    const div = document.createElement('div');
    const parent = document.querySelector(`${elemLocation}`);
          parent.appendChild(div);
          div.setAttribute('id',`${elemId}`);
          div.classList.add(`${elemClass}`);
}
// create input
const input = (type, inputName, idName, elemLocation) => {
    const input = document.createElement('input');
    const parent = document.querySelector(`${elemLocation}`);
          parent.appendChild(input);
          input.setAttribute('type', `${type}`);
          input.setAttribute('name', `${inputName}`);
          input.setAttribute('id', `${idName}`);
}
//create label 
const label = (labelName, text, elemLocation) => {
    const label = document.createElement('label');
    const parent = document.querySelector(`${elemLocation}`);
          parent.appendChild(label);
          label.setAttribute('for',`${labelName}`);
          label.innerHTML = text;
}
//create textarea
const textarea = (textId, textName, row, cols, placeholder, elemLocation) => {
    const textarea = document.createElement('textarea');
    const parent = document.querySelector(`${elemLocation}`);
          parent.appendChild(textarea);
          textarea.setAttribute('name', `${textName}`);
          textarea.setAttribute('id', `${textId}`);
          textarea.setAttribute('row', `${row}`);
          textarea.setAttribute('cols', `${cols}`);
          textarea.setAttribute('placeholder', `${placeholder}`);
}
// create h3
const h3 = (h3ID, elemLocation) => {
    const h3h = document.createElement('h3');
    const parent = document.querySelector(`${elemLocation}`);
          parent.appendChild(h3h);
          h3h.setAttribute('id', `${h3ID}`);
}
// create h4
const h4 = (h4ID, elemLocation) => {
    const h4h = document.createElement('h4');
    const parent = document.querySelector(`${elemLocation}`);
          parent.appendChild(h4h);
          h4h.setAttribute('id', `${h4ID}`);
}
// create h5
const h5 = (h5ID, elemLocation) => {
    const h5h = document.createElement('h5');
    const parent = document.querySelector(`${elemLocation}`);
          parent.appendChild(h5h);
          h5h.setAttribute('id', `${h5ID}`)
}

// create li
const li = (liId,location) => {
    const li = document.createElement('li');
    const parent = document.querySelector(`${location}`);
          parent.appendChild(li);
          li.setAttribute('id', `${liId}`);
}
// create li
const span = (spanId,location) => {
    const span = document.createElement('span');
    const parent = document.querySelector(`${location}`);
          parent.appendChild(span);
          span.setAttribute('id', `${spanId}`);
}
// create i  for the fontawesome
const iconFas = (iId,iClass,location) => {
    const icon = document.createElement('i');
    const parent = document.querySelector(`${location}`);
          parent.appendChild(icon);
          icon.setAttribute('id', `${iId}`);
          icon.classList.add('fas');
          icon.classList.add(`${iClass}`);
}