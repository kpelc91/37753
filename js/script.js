let btnDownloadDate = document.getElementById('main-button');

const downDevelop = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', {
        mode: 'cors',
        method: 'GET',
    })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

btnDownloadDate.addEventListener('click', downDevelop);

const dataDevelop = $('<div id="dane-programisty"></div>');
$('body').prepend(btnDownloadDate);

$('#main-button').click(function () {
    
})
