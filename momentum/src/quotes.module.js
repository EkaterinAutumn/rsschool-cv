export function getQuotes() {

    const quotesDomElement = document.getElementById('quotes');
    const quoteDomElement = document.querySelector('.quote');
    const authorQuoteDomElement = document.querySelector('.author-quote');
    const reloadDomElement = document.getElementById('reload');

    let quoteStorage = [];

    async function loadQuotes() {
        const url = 'https://type.fit/api/quotes';
        const res = await fetch(url)
        const data = await res.json();
        quoteStorage = data;
        getQuote()
    }

    loadQuotes()

    function getQuote() {
        let quote;
        const randomIndex = Math.round(Math.random() * (quoteStorage.length - 1));
        quote = quoteStorage[randomIndex];
        quotesDomElement.textContent = `"${quote.text}"`;
        authorQuoteDomElement.textContent = `${quote.author}`;
    }


    reloadDomElement.addEventListener('click', getQuote)
}