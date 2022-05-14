let info = {
    name: 'Mckade Daines',
    photo: 'profile.jpg',
    favoriteFoods: [
        'Fettucini',
        'Pizza',
        'Tacos',
        'French Toast'
    ],
    hobbies: [
        'Video games',
        'Modding cars',
        'Hockey'
    ]
};

info.placesLived = [
    {
        place: 'Rexburg, ID',
        length: '3 years'
    },
    {
        place: 'Mesa, Arizona',
        length: '10+ years'
    }
]


document.querySelector('#name').textContent = info.name;

document.querySelector('#photo').setAttribute('src', info.photo);

document.querySelector('#photo').setAttribute('alt', info.name);

info.favoriteFoods.forEach((food) => {
    let favoriteFoodElem = document.createElement('li');
    favoriteFoodElem.textContent = food;

    document.querySelector('#foods').appendChild(favoriteFoodElem);
});

info.hobbies.forEach((hobby) => {
    let hobbyElem = document.createElement('li');
    hobbyElem.textContent = hobby;

    document.querySelector('#hobbies').appendChild(hobbyElem);
});

info.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;
    
    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;

    document.querySelector('#lived').appendChild(placesLivedPlace);
    document.querySelector('#lived').appendChild(placesLivedLength);
})