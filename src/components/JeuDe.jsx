import React from "react";
class JeuDe extends React.Component {

    constructor(props)
    {
        super(props);  
        this.state = { face: null, compteur: 0, fin: false };
    }
    jouer() 
    {
        const valeur = Math.floor(Math.random() * 6) + 1;
        this.setState({ face: valeur, compteur: this.state.compteur + 1, fin: false });
        if (valeur == this.props.cache) {
            this.setState({ fin: true });
        }
    }
    initialiser()
    {
        this.setState({ face: null, compteur: 0, fin: false });
    }
    render() {
        return (
            <div>
                <img src='images/de.jpeg' />
                <h1>Jeu de Dé...</h1>
                <h2>face: {this.state.face}</h2>
                {
                    this.state.face!= null && <img src={`images/face${this.state.face}.png`}/>
                }
                <h2>nombre d'essais : {this.state.compteur}</h2>
                {
                    this.state.fin  ?
                        <div>
                            <p>Bravo vous avez trouvez la face cachée...</p>
                            <button onClick={() => this.initialiser()}>Initialiser</button>
                        </div>
                        : <button onClick={() => this.jouer()}>jouer</button>
                }
            </div>
        );
    }
}
export default JeuDe;
