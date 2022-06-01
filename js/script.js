let btnDownloadDate = document.getElementById('main-button');

const dataDevelop = $('<div id="dane-programisty"></div>');
    $('body').prepend(btnDownloadDate);

const downDevelop = () => {

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', {
        mode: 'cors',
        method: 'GET',
    })
        .then(res => res.json())
        .then(resJSON => {

        const parName = $(`<p id="name">${resJSON.imie}</p>`);
        const parLastName = $(`<p id="last-name">${resJSON.nazwisko}</p>`);
        const parJob = $(`<p id="job">${resJSON.zawod}</p>`);
        const parCompany = $(`<p id="company">${resJSON.firma}</p>`);

        $('body').after(parName);
        $('body').after(parLastName);
        $('body').after(parJob);
        $('body').after(parCompany);
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });
}

btnDownloadDate.addEventListener('click', downDevelop);


