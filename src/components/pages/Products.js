import React, { useEffect, useState } from 'react'
import '../../App.css'
import CardItem from '../CardItem';
import '../Cards.css';
import img3 from '../../assets/images/img-3.jpg'
import img4 from '../../assets/images/img-4.jpg'
import img5 from '../../assets/images/img-5.jpg'
import img8 from '../../assets/images/img-8.jpg'
import img9 from '../../assets/images/img-9.jpg'

export default function Products() {

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [provincias, setProvincias] = useState({

    // });



    // API de provincias de Argentina
    // useEffect(() => {
    //     fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data.provincias)
    //             setIsLoaded(true);
    //             setProvincias(data.provincias);
    //             console.log(provincias)
    //         },
    //             // Nota: es importante manejar errores aquí y no en 
    //             // un bloque catch() para que no interceptemos errores
    //             // de errores reales en los componentes.
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error)
    //             }
    //         )
    // }, [])

    return (
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                        src={img9}
                        text="Visita las Cataratas de Iguazú"
                        label="Misiones"
                        path="/travel_planner/sign-up"
                    />
                    <CardItem
                        src={img3}
                        text="Visita las termas naturales de Entre Rios"
                        label="Entre rios"
                        path="/travel_planner/sign-up"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                        src={img4}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Santa Fe"
                        path="/travel_planner/sign-up"
                    />
                    <CardItem
                        src={img5}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Cordoba"
                        path="/travel_planner/sign-up"
                    />
                    <CardItem
                        src={img8}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Chubut"
                        path="/travel_planner/sign-up"
                    />
                </ul>
            </div>
        </div>
    )
}