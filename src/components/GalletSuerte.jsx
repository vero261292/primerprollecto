import './styles/Galleta.css'

const GalletSuerte = ({data}) => {
   

    return (
      <article className='responsib'>
        <h1 className='title__galleta'>**GALLETA DE LA SUERTE**</h1>
        <div className='galleta__frase'>{data.phrase}</div>
        <div className='galleta__autor'>{data.author}</div>
      </article>
    )
}

export default GalletSuerte



