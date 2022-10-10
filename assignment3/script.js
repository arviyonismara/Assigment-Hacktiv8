const active = document.querySelector('#active')
const newData = document.querySelector('#new')
const recovered = document.querySelector('#recovered')
const total = document.querySelector('#total')
const death = document.querySelector('#death')
const test = document.querySelector('#test')

const input = document.querySelector('#input')
const button = document.querySelector('#button')

button.addEventListener('click', async () => {
    // console.log('jalan')
    const date = new Date();
    const today = date.toISOString().slice(0, 10);

    console.log(input.value);
    // const BASE_URL = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`

    const BASE_URL = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '27cb056452msh5b5828efe9719d6p10a1d5jsnb2a20a48df72',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    const response = await fetch(BASE_URL, options)
    const data = await response.json()

    console.log(data, "<<< in data")
    if (data.response.length){
        const dataResponse = data.response[0];

        console.log(dataResponse);
        active.innerText = dataResponse.cases.active;
        newData.innerText = dataResponse.cases.new ? dataResponse.cases.new : 0;
        recovered.innerText = dataResponse.cases.recovered;
        total.innerText = dataResponse.cases.total;
        death.innerText = dataResponse.deaths.total
        test.innerText = dataResponse.tests.total;
    }
})