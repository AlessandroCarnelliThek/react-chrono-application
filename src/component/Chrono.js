/*----------------------------------------------------------
    // COMPONENT ---> ' CHRONO '

    // questo cronometro è formato da più timer, ognuno
    // è assegnato a un unità diversa del quadrante e viene
    // incrementato di un unità ogni secondo, dopo essere
    // arrivato a 9 viene azzerato e il timer successivo
    // viene incrementato di un unità. 
    
    // si scatena una reazione a catena sugli altri timer 
    // gerarchicamente inferiori e così via...funziona!

    // il cronometro è implementato con tre pulsanti
    // abbastanza intuitivi:
    // START  ---> attiva il cronometro
    // STOP   ---> mette in pausa il cronometro
    // RESET  ---> azzera e ferma il cronometro
    //
    //      ho dovuto implementare un timeout nel reset
    //      per un problema di asincronicità

    
    // Enjoy!

    //OUTPUT:-----------------------------------------------
    //                 '00 : 00 : 00 : 00'
    //                 START  STOP  RESET
    //------------------------------------------------------

    // nota:
    // bisogna implementare un quarto pulsante che prende il
    // tempo dei giri e lo stampa nella pagina sotto forma
    // di elenco.
  
----------------------------------------------------------*/

import { useState, useEffect } from 'react';

import './chrono.css';

function Chrono() {
    /*-------------------------------------------------------
        // TEST CONTATORE SINGOLO
        
        const [timer, setTimer]   = useState(0);
            
        useEffect( () => {
            if (timer < 9){
                setTimeout( () => setTimer(timer + 1), 1000);
            } else {
                setTimer(0);
            }
        }
    --------------------------------------------------------*/

    const [cents, setCents] = useState(0);
    const [decs, setDecs] = useState(0);
    const [second, setSecond] = useState(0);
    const [decSec, setDecSec] = useState(0);
    const [minute, setMinute] = useState(0);
    const [decMin, setDecMin] = useState(0);
    const [hour, setHour] = useState(0);
    const [decHour, setDecHour] = useState(0);

    let [isOn, setChrono] = useState(false);
    let [isReset, setReset] = useState(false);

    useEffect(() => {
        if (isReset) {

            setCents(0);
            setDecs(0);
            setSecond(0);
            setDecSec(0);
            setMinute(0);
            setDecMin(0);
            setHour(0);
            setDecHour(0);
            setReset(false);

        } else {
            if (isOn) {

                if (cents >= 9) {
                    setCents(0);
                    setDecs(decs + 1);
                }
                else { setTimeout(() => setCents(cents + 1), 10); }

                if (decs >= 9) {
                    setDecs(0);
                    setSecond(second + 1);
                    if (second >= 9) {
                        setSecond(0);
                        setDecSec(decSec + 1);
                        if (decSec >= 5) {
                            setDecSec(0);
                            setMinute(minute + 1);
                            if (minute >= 9) {
                                setMinute(0);
                                setDecMin(decMin + 1);
                                if (decMin >= 5) {
                                    setDecMin(0);
                                    setHour(hour + 1);
                                    if (hour >= 9) {
                                        setHour(0);
                                        setDecHour(decHour + 1);
                                    }
                                }
                            }
                        }
                    }
                }
                if (decHour >= 2 && hour >= 4) {
                    setHour(0);
                    setDecHour(0);
                }
            }
        }
    }, [isReset, isOn, cents, decs, second, decSec, minute, decMin, hour, decHour]);

    function onButtonStartClick() {
        setChrono(true);
    }
    function onButtonStopClick() {
        setChrono(false);
    }
    function onButtonResetClick() {
        setChrono(false);
        setTimeout(() => setReset(true), 100);
    }

    return (
        <>
            <div className="card">
                <span className="card__monitor">{decHour}{hour} : {decMin}{minute} : {decSec}{second} : {decs}{cents}</span>
                <div className="card__buttonContainer">
                    <button className="card__button" onClick={() => onButtonStartClick()} >START</button>
                    <button className="card__button" onClick={() => onButtonStopClick()} >STOP</button>
                    <button className="card__button" onClick={() => onButtonResetClick()} >RESET</button>
                </div>
            </div>
        </>
    );
}

export default Chrono;