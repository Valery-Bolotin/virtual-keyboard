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

let count = 1;
for (let i = 0; i < 64; i++) {
    const key = document.createElement('div');
    key.className = 'key';
    
    key.innerHTML = count;
    count +=1
    keyboard.append(key);
  }