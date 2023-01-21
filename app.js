(function () {
    const form = document.querySelector('#message-form');

    form.addEventListener('submit',function(e){
        e.preventDefault()

        const msg= document.querySelector('#message')
        const feedback= document.querySelector('.feedback')
        const messageDisplay= document.querySelector('.message-content')

        if(msg.value === ''){
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            },2000)
        }
        else{
            messageDisplay.textContent= msg.value;
            msg.value='';
        }

    })




})()