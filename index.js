const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
    console.log('ok');
    img.classList.toggle('show');
})
//*********************************************************/
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

//*********************************************************/
const yourAnswer = document.querySelector('.yourAnswer')

document.getElementById('input').addEventListener('input', (e) => {
    yourAnswer.innerHTML = e.target.value;

})

//*********************************************************/
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

//*************************** DATA MANIPULATION ******************************/
const inputVideoUrl = document.querySelector("#inputVideoUrl");
const video = document.querySelector("#video");
let link = " ";

inputVideoUrl.addEventListener("inputVideoUrl", (e) => {
    link = e.target.value;
    console.log(link);

    if (link) {
    video.innerHTML = '<iframe width="1080" height="720" src="${link}" title="YouTube video player" ></iframe>';
}
})

const changeLink = (linkToChange) => {
    let embed = linkToChange.replace(('watch?v=', 'embed/'));
    link = embed.split('&')[0];
}

//*************************** API ******************************/
const quote = document.getElementById('quote');

const getQuote = () => {
   
    fetch('https://api.quotable.io/random')
    .then (response => response.json())
    .then (data => {
        //console.log(data.content);
        //console.log(data.content + '-' + data.author);
        quote.innerHTML = data.content + '<br> -' + data.author;
    })

}
getQuote();

quote.addEventListener('click', () => getQuote());
