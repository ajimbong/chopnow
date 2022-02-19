document.addEventListener("DOMContentLoaded", function() { 
    let img = document.getElementById('img')
        let text = document.getElementById('text')
        let count = 0;

        let dotOne = document.getElementById('dotOne')
        let dotTwo = document.getElementById('dotTwo')
        let dotThree = document.getElementById('dotThree')

        let data = [
            {
                url : '/pages/home/homew.webp',
                text : 'Delivery within an hour'
            },
            {
                url : '/pages/home/h2.webp',
                text : 'Super Delicious food'
            },
            {
                url : '/pages/home/h3.webp',
                text : 'Always at your service 24/7 '
            }
        ]

        setInterval(()=>{
            count = (count + 1) % 3;
            dotTwo.classList.remove('full')
            dotThree.classList.remove('full')
            dotOne.classList.remove('full')
            if(count == 0){
               img.style.backgroundImage  = `url(${data[count].url})`
               text.innerHTML = data[count].text
               dotOne.classList.add('full')
            }
            else if(count == 1){
               img.style.backgroundImage  = `url(${data[count].url})`
               text.innerHTML = data[count].text
               dotTwo.classList.add('full')
            }
            else if(count == 2){
               img.style.backgroundImage  = `url(${data[count].url})`
               text.innerHTML = data[count].text
               dotThree.classList.add('full')
            }
            //console.log('hello world')
        }, 5000)
  });
        