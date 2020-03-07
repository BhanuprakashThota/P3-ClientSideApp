const meter=(p)=>{return p * 1609.34}

function convertmeters() {
    if (document.getElementById("c").value != " ") {
        var f = document.getElementById("c").value * 1.6 * 1000;
        document.getElementById("d").value = Math.round(f);
    } else {
        document.getElementById("d").value = "please enter the miles in above textbox";
    }
}

const jokeURI = 'https://dog.ceo/api/breeds/image/random'

// fetch information
const getJoke = async () => {
    try {
        const response = await fetch(jokeURI)
        const obj = await response.json()
        console.log(`FETCHED. Response JSON ${obj}`)
        const joke = obj.message || 'No joke for you.'
        return joke
    } catch (error) { console.error(error) }
}
const updateWithJoke = async (event) => {
    try {
        document.querySelector('#dogarea').src = ''
        const answer = await getJoke()
        document.querySelector('#dogarea').src = answer
    } catch (error) { console.error(error) }
}
// document.getElementById('getscore').onclick(getJoke);
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getscore') { updateWithJoke(event) }
})