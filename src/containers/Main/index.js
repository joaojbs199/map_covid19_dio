import React, { memo, useEffect, useState, useCallback } from 'react';
import getCovidInfo from '../../api';
import '../../styles/Main.css';
import Select from 'react-select';
import {options, customStyles} from '../../selectOptions';


function Main () {

    const [ data, setData ] = useState({});
    const [ country, setCountry ] = useState('brazil');
    const [ updated, setUpdated] = useState(new Date().toLocaleString('pt-br'))
    const [ selectedCountry, setSelectedCountry ] = useState(options[0]);

    const getCovidData = useCallback( (country) => {
        getCovidInfo(country).then( data => setData(data))
    }, []);

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = async (country) => {
        await getCovidData(country.value)
        setUpdated(new Date().toLocaleString('pt-br'))
        setSelectedCountry(country)
    }

    const { cases, todayDeaths, todayCases, deaths, recovered } = data;

    const navigatorHasShare = navigator.share

    const textCovid19 = `${selectedCountry.label} - recuperados: ${recovered}`

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share({
            title: `Dados coronavirus - ${selectedCountry.label}`,
            text: textCovid19,
            url: "https://Eu199309Covid19dio.netlify.app/"
        })
    }

    const copyButton = (
        <button className='headerButton' onClick={copyInfo}>Copiar</button>
    )

    const shareButton = (
        <button className='headerButton' onClick={shareInfo}>Compartilhar</button>
    )

    return (
        <div className='container'>
            <div className='cardsContainer'>
                <header className='headerCard'>
                    <h2>COVID 19</h2>
                    <h3>Painel de acompanhamento</h3>
                    <h5>{`Atualizado em: ${updated}`}</h5>
                    <Select value={selectedCountry} onChange={(e) => handleChange(e)} styles={customStyles} options={options} />
                    {navigatorHasShare ? shareButton : copyButton}
                </header>

                <div style={{ border: '3px solid #0077ff' }} className='infoCards'>
                    <h1>{cases}</h1>
                    <h3>Total de casos</h3>
                </div>

                <div style={{ border: '3px solid #FFba08' }} className='infoCards'>
                    <h1>{todayDeaths}</h1>
                    <h3>Óbitos hoje</h3>
                </div>

                <div style={{ border: '3px solid #b700ff' }} className='infoCards'>
                    <h1>{todayCases}</h1>
                    <h3>Casos hoje</h3>
                </div>

                <div style={{ border: '3px solid #ff0000' }} className='infoCards'>
                    <h1>{deaths}</h1>
                    <h3>Total de mortos</h3>
                </div>

                <div style={{ border: '3px solid #15ff00' }} className='infoCards'>
                    <h1>{recovered}</h1>
                    <h3>Total de recuperados</h3>
                </div>
            </div>
        </div>
    )
}

export default memo(Main)