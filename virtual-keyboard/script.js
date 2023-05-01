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
info.innerHTML = "Клавиатура создана в операционной системе Windows <br> Для переключения языка используйте сочетание клавишь:";
keyboard.after(info);


const ruKeys = ['ё','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',  'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLoack', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ','Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl' ];
const enKeys = [ '`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',  'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLoack', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "' ", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ','Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];



for (let i = 0; i < 64; i++) {
    const key = document.createElement('div');
    div.setAttribute("id", `div-${i+1}`);
    key.className = 'key';
    keyboard.append(key);
  }

  // Получаем ссылки на элементы клавиатуры и области вывода
let virtualKeyboard = document.querySelector(".keyboard");
let outputArea = document.querySelector(".textarea");



// Обрабатываем нажатия на клавиши клавиатуры
virtualKeyboard.addEventListener("click", function(event) {
    // Получаем символ, соответствующий нажатой клавише
    let keyPressed = event.target.innerText;
    
    // Отображаем символ в области вывода
    outputArea.innerHTML += keyPressed;
});
