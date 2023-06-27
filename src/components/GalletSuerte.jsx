

const GalletSuerte = (props) => {
    const{beta}= props

    return (
        <article >
            <h1>*****GALLETAS DE LA SUERTE *****</h1>
            <h2>
                <div className="pras">
                    <p>
                    {beta.phrase}
                    </p>
                </div>
            </h2>

            <h3>
                <div className="aut">
                    <p>
                    {beta.author}
                    </p>
                </div>
            </h3>          
        </article>


    )
}

export default GalletSuerte



