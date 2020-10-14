import React, {Component} from 'react'
import ToyslandService from '../../services/ToyslandService'
import { Link } from 'react-router-dom'
import Comics from '../../assets/images/home/comics.jpg'
import Consolas from '../../assets/images/home/consolas.jpg'
import Disfraces from '../../assets/images/home/disfraces.jpg'
import Patinete from '../../assets/images/home/patinete.jpg'
import Ps from '../../assets/images/home/ps.jpg'
import Rollers from '../../assets/images/home/rollers.jpg'
import Construccion from '../../assets/images/home/construccion.jpg'
import Peluches from '../../assets/images/home/peluches.jpg'
import Libros from '../../assets/images/home/libros.jpg'
import Teledirigido from '../../assets/images/home/teledirigido.jpg'
import Vintage from '../../assets/images/home/vintage-mazinger.jpg'
import Mesa from '../../assets/images/home/mesa.jpg'
import Puzzle  from '../../assets/images/home/puzzle.jpg'
import Casa  from '../../assets/images/home/aire-libre.jpg'
import Monkey  from '../../assets/images/home/monkey.jpg'


class Slider extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        ToyslandService.categories()
            .then(categories => {
                this.setState({categories}, () => console.log(this.state.categories.category))
            })
    }

    render() {
        return(



<div className="Home">
<div className="HomeContainer">
    <div className="HomeContainerContainer">

        <div className="titleContainer"> Juegos para todos </div>
        <div className="subtitleContainer"> Juguetes d elos 70, 80, 90 hasta hoy </div>

        <div className="HomeContainerContainerBlock">
            
            <div className="HomeContainerContainerHalf">
                <div className="full">
                    <img src={Consolas} alt="Consolas" />
                    <Link to="/categories/Vintage"><div className="categoryName">Consolas</div></Link> 
                </div>
            </div>

            <div className="HomeContainerContainerHalf">
                <div className="half">
                    <img src={Comics} alt="Comics" />
                    <Link to="/categories/Comics"><div className="categoryName">Comics</div></Link> 
                </div>

                <div className="half">
                    <img src={Disfraces} alt="Disfraces" />
                    <Link to="/categories/Disfraces"><div className="categoryName">Disfraces</div></Link> 
                </div>
            </div>

        </div> 


        <div className="HomeContainerContainerBlock">

            <div className="HomeContainerContainerHalf">
                <div className="half">
                    <img src={Patinete} alt="Comics" />
                    <Link to="/categories/Transporte"><div className="categoryName">Transporte</div></Link> 
                </div>

                <div className="half">
                    <img src={Construccion} alt="Construcción" />
                    <Link to="/categories/Construccion"><div className="categoryName">Construcción</div></Link> 
                </div>
            </div>

            <div className="HomeContainerContainerHalf">
                <div className="full">
                    <img src={Rollers} alt="Patines" />
                    <Link to="/categories/Aire-Libre"><div className="categoryName">Aire Libre</div></Link> 
                </div>
            </div>

        </div> 
    </div> 
</div> 






<div className="HomeContainer">
    <div className="HomeContainerContainer">

        <div className="titleContainer"> Más de 10 categorías </div>
        <div className="subtitleContainer"> Vende aquellos juguetes que ya no usan en casa! </div>

        <div className="HomeContainerContainerBlock">
            
            <div className="HomeContainerContainerHalf">
                <div className="full">
                    <img src={Ps} alt="Consolas" />
                    <Link to="/categories/Consolas"><div className="categoryName">Consolas</div></Link> 
                </div>
            </div>

            <div className="HomeContainerContainerHalf">
                <div className="half">
                    <img src={Peluches} alt="Peluches" />
                    <Link to="/categories/Peluches"><div className="categoryName">Peluches</div></Link> 
                </div>

                <div className="half">
                    <img src={Libros} alt="Libros" />
                    <Link to="/categories/Libros"><div className="categoryName">Libros</div></Link> 
                </div>
            </div>

        </div> 


        <div className="HomeContainerContainerBlock">

            <div className="HomeContainerContainerHalf">
                <div className="half">
                    <img src={Teledirigido} alt="Comics" />
                    <Link to="/categories/Telidirigido"><div className="categoryName">Teledirigido</div></Link> 
                </div>

                <div className="half">
                    <img src={Mesa} alt="Mesa" />
                    <Link to="/categories/Mesa"><div className="categoryName">Mesa</div></Link> 
                </div>
            </div>

            <div className="HomeContainerContainerHalf">
                <div className="full">
                    <img src={Vintage} alt="Mazinger Z" />
                    <Link to="/categories/Vintage"><div className="categoryName">Vintage</div></Link> 
                </div>
            </div>

        </div> 
    </div> 
</div> 







<div className="HomeContainer">
    <div className="HomeContainerContainer">

        <div className="titleContainer"> Los Más Vendidos </div>
        <div className="subtitleContainer"> Estas son las Categorías Top 3 </div>





        <div className="HomeContainerContainerBlock">

            <div className="HomeContainerContainerHalf">

            <div className="half">
                    <img src={Puzzle} alt="Puzzle" />
                    <Link to="/categories/Puzzles"><div className="categoryName">Puzzle</div></Link> 
                </div>
                
                <div className="half">
                    <img src={Monkey} alt="Comics" />
                    <Link to="/categories/Vintage"><div className="categoryName">Vintage</div></Link> 
                </div>

            </div>

            <div className="HomeContainerContainerHalf">
                <div className="full">
                    <img src={Casa} alt="Mazinger Z" />
                    <Link to="/categories/Aire-Libre"><div className="categoryName">Aire Libre</div></Link> 
                </div>
            </div>

        </div> 
    </div> 
</div> 




</div>


        )
    }
}

export default Slider