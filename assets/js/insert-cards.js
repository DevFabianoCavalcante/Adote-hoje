dbPets.map((card, index) => {
    const cardModal = document.querySelector('.card-adoption').cloneNode(true);

    cardModal.querySelector('#image-card').setAttribute('src', card.image);
    cardModal.querySelector('#name-card').innerHTML = card.name;
    cardModal.querySelector('#genre').innerHTML = card.genre;
    cardModal.querySelector('#age').innerHTML = card.age;
    cardModal.querySelector('#contact').innerHTML = card.infoDonor.contact;
    cardModal.querySelector('#location').innerHTML = card.infoDonor.localization;
    cardModal.querySelector('#description').innerHTML = card.description;

    document.querySelector('.adoption-row-content').append(cardModal);
});

