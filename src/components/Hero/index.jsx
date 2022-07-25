const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-title">
                <p className="main-title">Soerat Kabar</p>
                <p className="subtitle">Semua berita di dunia mana pun lengkap semua ada disini</p>
            </div>
            <div className="hero-search">
                <input type="text" name="search" id="search" size="75" placeholder="Ketik keyword artikel disini ......" />
            </div>
        </div>
    )
}

export default Hero;