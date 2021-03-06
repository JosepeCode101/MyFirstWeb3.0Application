//Import del gancho useContext
import React, { useContext } from "react";

import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

// Import del contexto de transacciones previamente generado
import { TransactionContext  } from "../context/TransactionContext";

//import del Loader
import { Loader } from './';

// import del acortador de direcciones
import { shortenAddress } from "../utils/shortenAddress";

// constante string para definir estilos en la cuadricula
const estilos = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

// Con esta función imprimiremos los imputs en pantalla dentro del 'return' del componente WELCOME 
// dentro de este solo tendremos que invocar el componente '<Formulario/>' y configurarlo con sus
// placeholder, tipo, nombre y HandleChange
const Formulario = ({ placeholder, name, type, value, handleChange }) => (
    <input  
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />

);


// Componente Welcome
const Welcome = () => {
    // constante del valor desestructurado pasandole el valor de Transaction Context con el gancho React de usar contexto
    const { connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, isLoading } = useContext(TransactionContext);
       

    // Ya no necesitamos la funcion conectar billetera porque la tenemos alojada en Transaction Context
    // Por implementar
    const handleSubmit = (e) => {

        const { addressTo, amount, keyword, message } = formData; 

        // Normalmente cuando entregamos un formulario, la página se recarga
        // para prevenir que eso pase llamamos al método preventDefault()
        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();


    }

    return(
        <div className='flex w-full justify-center items-center'>
            <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col mf:mr-10'>
                    <h1 className='text-white text-3xl sm:text-5xl text-gradient py-1'>
                        Send Crypto <br/> across the world
                    </h1>
                    <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
                        Explore cryptocurrencies. Buy, sell, or... build? The choice is yours. Connect your metamask and explore the options #SAFEMOONARMY
                    </p>
                    {!currentAccount &&  (<button
                      type='button'
                      onClick={connectWallet}
                      className="flex flex-row justify-center items-center my-5 bg-[#48C9B0] p-3 rounded-full cursor-pointer hover:bg-[#00A79D]"
                    >
                    <p className="text-white text-base font-semibold">Connect your wallet</p>
                    </button>)}
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className= {`rounded-tl-2xl ${estilos}`} >Relaiability</div>
                        <div className= {estilos}>Security</div>
                        <div className= {`sm:rounded-tr-2xl ${estilos}`}>Ethereum</div>
                        <div className= {`sm:rounded-bl-2xl ${estilos}`}>Web 3.0</div>
                        <div className= {estilos}>Low Fees</div>
                        <div className= {`rounded-br-2xl ${estilos}`}>Blockchain</div>

                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    {/* ETHEREUM CARD */}                    
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#fff"/>
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff"/>
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    Ethereum (ETH)
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* FORMULARIO */}
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        {/* En el valor handleChange pasamos la función del mismo nombre en TransactionContext 
                        Esto actualizará los impus dinámicamente dependiendo del 'nombre' de cada input en específico 
                        Asegurarse de que los nombres de aquí son iguales que en el estado constante declarado 
                        en TransactionContext */}
                        <Formulario placeholder='Address To' name='addressTo' type='text' handleChange={handleChange} />
                        <Formulario placeholder='Amount' name='amount' type='number' handleChange={handleChange} />
                        <Formulario placeholder='Keyword (Gif)' name='keyword' type='text' handleChange={handleChange} />
                        <Formulario placeholder='Enter Message' name='message' type='text' handleChange={handleChange} />
                        {/* SELFCLOSING DIV para crear una separación con una línea */}
                        <div className="h-[1px] w-full bg-gray-400 my-2"/>

                        {/* Aquí se mostrará el Loader (?=if   //  :=else) */}

                        {isLoading ? (
                            <Loader />
                        ) : (
                        <button
                        type="button"
                        onClick={handleSubmit}
                        className="text-white w-full mt-2 border-[3px] p-2 border-[#48C9B0] rounded-full bg-[#00A79D] cursor-pointer"
                        >
                        Send Now  
                        </button>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;