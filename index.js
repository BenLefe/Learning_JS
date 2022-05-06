const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
    console.log('ok');
    img.classList.toggle('show');
})
//********************************************** */
const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove',(e)=>{
    horizontal.innerHTML=e.x;
    vertical.innerHTML=e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

    if (e.x > 500) {
        document.body.style.filter = 'none';
    } else {
        document.body.style.filter = 'none';
    }
})

//******************************************************** */
const yourAnswer = document.querySelector('.yourAnswer')

document.getElementById('input').addEventListener('input', (e) => {
    yourAnswer.innerHTML = e.target.value;

})

//******************************************************** */
const theme = document.querySelectorAll('.theme');

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove('darkTheme', 'salmonTheme');
         switch (e.target.id) {
            case 'dark' : 
                document.body.classList.add('darkTheme');
                break;
            case 'salmon' : 
                document.body.classList.add('salmonTheme');
                break;
            default :
                null;
        }
    })
})
