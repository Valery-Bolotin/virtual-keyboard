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

const globalKeys = ['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\'];
const ruKeys = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
const enKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "' ", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];


let n =0;
let l =0;

for (let i = 0; i < 64; i++) {
    const key = document.createElement('div');
    key.className = 'key';
  if(i >= 0 && i < 13 || i ===27){
    key.innerHTML = globalKeys[l];
    l += 1;
  }
  else if (i > 14 && i !== 27 && i !== 28 && i !== 29 && i !== 41 && i !== 42 && i <53){
    key.innerHTML=enKeys[n]
    n += 1;
   }
    keyboard.append(key);
  }