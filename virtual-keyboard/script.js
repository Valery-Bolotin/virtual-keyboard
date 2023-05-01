let wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.append(wrapper);


let title = document.createElement('h1');
title.className = "title";
title.innerHTML = "RSS Виртуальная клавиатура";
wrapper.prepend(title);

let textarea = document.createElement('textarea');
textarea.className = "textarea";
title.after(textarea);

let keyboard = document.createElement('div');
keyboard.className = "keyboard";
textarea.after(keyboard);

let info = document.createElement('div');
info.className = "info";
info.innerHTML = "Клавиатура создана в операционной системе Windows <br> Для переключения языка используйте сочетание клавишь: Ctrl+ Alt";
keyboard.after(info);

let virtualKeyboard = document.querySelector(".keyboard");
let outputArea = document.querySelector(".textarea");


const ruKeys = ['ё','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLoack', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ','Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl' ];
const enKeys = [ '`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLoack', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "' ", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ','Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];


let lang = 'eng';


function createDivs() {
  for(let i = 0; i < 64; i++) {
    const key = document.createElement('div'); // создаем div
    key.className = 'key';
    key.id = `key-${i}`; // присваиваем id вида "key-0", "key-1" и т.д.
    keyboard.append(key); 
    
  }
  
}
function fillDivs() {
  const keyboard = lang === 'rus' ? ruKeys : enKeys; // выбираем нужный массив клавиш в зависимости от языка
  const divs = document.querySelectorAll('.key'); 
  divs.forEach((key, index) => {
    key.innerHTML = keyboard[index % keyboard.length]; 
  });
}


// обработчик нажатия клавиш Ctrl+Alt
document.addEventListener('keydown', (event) => {
  if(event.ctrlKey && event.altKey) { 
    lang = lang === 'rus' ? 'eng' : 'rus'; 
    fillDivs(); 
  }
});
createDivs();
fillDivs();

  // Обрабатываем нажатия на клавиши клавиатуры
  virtualKeyboard.addEventListener("click", function(event) {
    let keyClick = event.target.innerHTML; 
    if(keyClick !== 'Backspace' && keyClick !== 'Tab' && keyClick !== 'Del' && keyClick !== 'CapsLoack' && keyClick !== 'Enter'&& keyClick !== 'Shift' && keyClick !==' ' && keyClick !=='Alt' && keyClick !=='&#9668;' && keyClick !== '&#9660;' && keyClick !== '&#9658;' && keyClick !== 'Ctrl'){
    let keyPressed = event.target.innerText;
    outputArea.innerHTML += keyPressed;
    event.preventDefault();
  }
});

virtualKeyboard.addEventListener('keydown', function(event) {
  if (event.key === 'Backspace') {
    let value = outputArea.value;
    outputArea.value = value.substring(0, value.length - 1);
    event.preventDefault();
  } 
});
  

virtualKeyboard.addEventListener("click", function(event) {
    if (event.target.innerHTML === 'Backspace') {
    let value = outputArea.value;
    outputArea.value = value.substring(0, value.length - 1);
  }
});

// Функция удаления последнего символа
function deleteLastChar(input) {
  const value = input.value;
  if (value.length > 0) {
    input.value = value.substring(0, value.length - 1);
  }
}

document.addEventListener('keydown', (event) => {
  const key = event.key;
  const virtualKey = virtualKeyboard.querySelector(`.key[id="${key}"]`);
  if (virtualKey) {
    virtualKey.classList.add('selected');
  }
});

document.addEventListener('keyup', (event) => {
  const key = event.key;
  const virtualKey = virtualKeyboard.querySelector(`.key[id="${key}"]`);
  if (virtualKey) {
    virtualKey.classList.remove('selected');
  }
});