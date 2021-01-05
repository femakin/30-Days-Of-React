import React from 'react'

export default function Countries({country: { name, capital, flag, languages, population, currencies },}) {
    const formatedCapital =
    capital.length > 0 ? (
      <>
        <span>Capital: </span>
        {capital}
      </>
    ) : (
      ''
    )
    const formatLanguage = languages.length > 1 ? `Languages` : `Language`
//   console.log(languages)
  const formatCurrency = currencies.length > 1 ? `Currencies` : `Currency`
//   console.log()
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div class='country_text'>
        <p>{formatedCapital}</p>
        <p>
          <span>{formatLanguage}: </span>
          {languages.map((language) => language.name).join(', ')}
        </p>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>{formatCurrency} </span>

          {currencies.map((cur) => cur.name).join(',')}
        </p>
      </div>
    </div>
  )
}
