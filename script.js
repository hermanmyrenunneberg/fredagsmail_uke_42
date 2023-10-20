document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.querySelector('.game-board');
    const eventList = document.getElementById('event-list');
    const cards = [
        'En siste fest på Bass', 
        'En siste fest på Bass', 
        'Lær å kutte gresskar', 
        'Lær å kutte gresskar',
        '3 x Dj-set', 
        '3 x Dj-set', 
        'Ny Scorsese-film',
        'Ny Scorsese-film', 
        'Slippfest', 
        'Slippfest', 
        'Urpremiere', 
        'Urpremiere'
    ];

    shuffle(cards);

    let flippedCards = [];
    let matchedPairs = 0;

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.value = card;

        cardElement.addEventListener('click', () => {
            if (flippedCards.length < 2 && !cardElement.classList.contains('flipped')) {
                cardElement.classList.add('flipped');
                cardElement.textContent = card;
                flippedCards.push(cardElement);

                if (flippedCards.length === 2) {
                    setTimeout(() => {
                        if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
                            matchedPairs++;
                            if (matchedPairs === 6) {
                                alert('Gratulerer! Du vet nå hva som skjer i Oslo i helgen!');
                                displayEvents();
                            }
                        } else {
                            flippedCards[0].classList.remove('flipped');
                            flippedCards[0].textContent = '';
                            flippedCards[1].classList.remove('flipped');
                            flippedCards[1].textContent = '';
                        }
                        flippedCards = [];
                    }, 1000);
                }
            }
        });

        gameBoard.appendChild(cardElement);
    });

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const events = [
        {
            title: 'En siste fest på Bass',
            description: 'Først stengte de dørene midlertidig, så gjenåpnet de, men nå stenger denne Løkka-favoritten for godt. Derfor skal Bass nå ha et «last hurrah». Festen varer ut i de sene nattetimer, med mat og vin så lenge det rekker. Alle bordene er reservert, men det er mulig med drop-in i baren og på uteserveringen.',
            details: [
                'Når: Lørdag',
                'Hvor: Thorvald Meyers gate 26C'
            ]
        },
        {
            title: 'Lær å kutte gresskar',
            description: 'Endelig høysesong for gresskar, og grønnsaken kan brukes til mye mer enn Halloween-dekor. Nå har du mulighet til å skjære ut gresskar i trygge og hyggelige omgivelser på plantesjappa Stikling, for så å ta kjøttet med hjem. Bruk gresskarkjøttet til å lage ravioli, suppe eller pai.',
            details: [
                'Når: Fredag 18.30–20.30',
                'Grønlandsleiret 31A',
                'Pris: 100kr'
            ]
        },
        {
            title: '3 x Dj-set',
            description: 'Hubbabubbaklubb, Fred Fades og Sure Sivert er tilbake for å spille musikk! Av erfaring blir det hett, jubel og grove dansetrinn. Køen blir lang, kom tidlig.',
            details: [
                'Når: Fredag kl. 23',
                'Hvor: Blå, Brenneriveien 9C',
                'Pris: 180 kroner'
            ]
        },
        {
            title: 'Ny Scorsese-film',
            description: '«Killers of the Flower Moon» foregår i Oklahoma 1920. Det er blitt oppdaget olje på landet til Osage Nation-stammen, og nå blir flere av stammens medlemmer myrdet under mystiske omstendigheter. Dette utløser en stor FBI-etterforskning som avslører brutale hendelser. Både Leonardo DiCaprio og Robert De Niro er med!',
            details: [
                'Når: Premiere fredag',
                'Hvor: Alle Oslo Kino og Vega Scene',
                'Pris: Oslo Kino 185–235 kroner, Vega Scene 155 kroner'
            ]
        },
        {
            title: 'Slippfest',
            description: 'Kjelleren på Parksalongen skal fylles med indietoner fra Oslo-bandet Pelicat. Gjengen har holdt på siden 2015 og er nå klar for å slippe sin andre plate, som du kan høre her. Melodiene gir et snev av håp og en smak av vår, faktisk. Aldersgrense 20 år.',
            details: [
                'Når: Lørdag kl. 20',
                'Hvor: Waldemar Thranes gate 1A',
                'Pris: 200 kroner'
            ]
        },
        {
            title: 'Urpremiere',
            description: 'Forestillingen «I vårt sted» av Arne Lygre settes opp for aller første gang! Teatret pirker borti temaer de fleste vel har et forhold til: Behovet for å ha noen i livet i sitt, hvordan vi stiller opp for hverandre og frykten for å bli valgt bort.',
            details: [
                'Når: Fredag kl. 18 og lørdag kl. 18',
                'Hvor: Kanonhallen, Peter Møllers vei 4B',
                'Pris: 278–550 kroner'
            ]
        }
    ];

    function displayEvents() {
        events.forEach(event => {
            const eventItem = document.createElement('div');
            const eventTitle = document.createElement('h2');
            const eventDescription = document.createElement('p');
            const eventDetails = document.createElement('ul');

            eventTitle.textContent = event.title;
            eventDescription.textContent = event.description;
            event.details.forEach(detail => {
                const listItem = document.createElement('li');
                listItem.textContent = detail;
                eventDetails.appendChild(listItem);
            });

            eventItem.appendChild(eventTitle);
            eventItem.appendChild(eventDescription);
            eventItem.appendChild(eventDetails);

            eventList.appendChild(eventItem);
        });

        eventList.style.display = 'block';
    }
});

