

const GalletSuerte = (props) => {
    const{beta}= props

    return (
        <article className="responsib">
            <section>
            <h1 className="title">*****GALLETAS DE LA SUERTE *****</h1>
            <h2 className="title-h2">
                <div className="pras">
                    <p>
                    {beta.phrase}
                    </p>
                </div>
            </h2>
            </section>
            <section>
                <div className="aut">
                    <p>
                    {beta.author}
                    </p>
                </div>                    
            </section>
        </article>


    )
}

export default GalletSuerte



