import axios from 'axios';

const endpoint = 'https://coronavirus-19-api.herokuapp.com/countries';

const getCovidInfo = async (country) => {

    const covidInfo = await axios.get(`${endpoint}/${country}`).then( response => {
        return response.data;
    })

    return covidInfo
}

export default getCovidInfo