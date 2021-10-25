import React, {useState} from 'react';
import { IntlProvider } from 'react-intl';

import mensajesIngles from '../lang/en-US.json';
import mensajesSpanish from '../lang/es-MX.json';



const langContext = React.createContext();

const LangProvider = ({children}) => {

    const [mensajes, setMensajes] = useState(mensajesSpanish);
    const [locale, setLocale] = useState('es-MX');


    const establecerLenguaje = (lenguaje) => {

        switch(lenguaje){
            case 'es-MX' : 
            setMensajes(mensajesSpanish);
            setLocale('es-MX');
            break;

            case 'en-US' : 
            setMensajes(mensajesIngles);
            setLocale('en-US');
            break;

            default:
                setMensajes(mensajesSpanish);
                setLocale('es-MX');
        }
    }


    return (  
        <langContext.Provider value={{establecerLenguaje, locale}}>
            <IntlProvider locale={locale} messages={mensajes}>
            {children}
            </IntlProvider>
        </langContext.Provider>
    );
}
 
export {LangProvider, langContext};