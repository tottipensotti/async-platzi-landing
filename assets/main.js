// import fetch from 'node-fetch';

const API = 'https://crypto-news16.p.rapidapi.com/news/cointelegraph';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f01b6fa3a4msh12c2ce33302e83ap1a50fcjsne5194b78ae4e',
		'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
	}
};

const content = null || document.querySelector('#content');

async function fetchData(url) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const news = await fetchData(API);
        let view = `
            ${news.map(article => `
            <div class="group relative">
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-500">${article.date}</h3>
                </div>
                <div class="mt-1 flex justify-between">
                    <h3 class="text-xl text-gray-700 font-bold">${article.title}</h3>
                </div>
                <div class="mt-2 flex justify-between">
                    <h3 class="text-m text-gray-700">${article.description}</h3>
                </div>
                <div class="mt-1 flex justify-between font-bold">
                    <a href="${article.url}" target="_blank" class="hover:text-blue-800">Read full note</a>
                </div>
            </div>
            `).slice(0, 12).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();