# Notes for coding in JS

## Basics

Good website : https://htmlcheatsheet.com/js/

### Theory

__variables__
syntax : let variable = 'string'
display in console test : console.log(variable)
constant : const constant = 'string' __can never be changed__

__functions__
declare :
```js
function doSthg() {
    console.log("example")
}
doSthg();
//
const doSthg2 = () => {
    console.log("test success")
}
doSthg2();
//
const doSthg3 = (type) => {
    console.log("i do " + type);
}
doSthg3('the laundry');

function doSthg() {
    console.log("example")
}
//doSthg();

const doSthg2 = () => {
    console.log("test success")
}
//doSthg2();

const doSthg3 = (type) => {
    console.log("i do " + type);
}
doSthg3('the laundry');
doSthg3('ride bentleys and coupes')
```

__events__

Click of a button :

```js
const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
    console.log('ok');
    img.classList.toggle('show');
})
```
If we want to record the position of the mouse :
```html
<div class="mouseEvent">
        <div>Horizontal : <span class="horizontal">0</span></div>
        <div>Vertical : <span class="vertical">0</span></div>
    </div>
```
```css
.mouseEvent {
    border: 6px solid salmon;
    width: 220px;
    position: absolute;
    left : 50%;
    transform: translateX(-50%);
    padding : 10px;
}
```
/*********************************************************/
Follow mouse position :

```js
const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove',(e)=>{
    horizontal.innerHTML=e.x;
    vertical.innerHTML=e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";
})
```
Add style tied to mouse position :

```js
mouseEvent.addEventListener('mousemove',(e)=>{
    horizontal.innerHTML=e.x;
    vertical.innerHTML=e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

    if (e.x > 500) {
        document.body.style.filter = 'blur(3px)';
    } else {
        document.body.style.filter = 'none';
    }
```
/*********************************************************/
Input event :
```html
    <div class="inputEvent">
        <label for="input">Sup ?</label>
        <br>
        <input type="text" id="input">
        <div class="result"></div>
    </div>
```
```js
const yourAnswer = document.querySelector('.yourAnswer')

document.getElementById('input').addEventListener('input', (e) => {
    yourAnswer.innerHTML = e.target.value;

})
```
/*********************************************************/

Theme container :

```html
    <div class="themeContainer">
        <div class="theme" id="dark"></div>
    </div>
```

```css
.themeContainer {
    position: fixed;
    top : 0;
}

.theme {
    height: 30px;
    width: 30px;
    cursor: pointer;
}

#dark {
    background: black;
}

.darkTheme {
    background: black;
    color : white;
}
```



