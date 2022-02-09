import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';

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

    {/* Por completar */}
    const conectarBilletera = () => {

    }
    {/* Por completar */}
    const handleSubmit = () => {

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
                    <button
                      type='button'
                      onClick={conectarBilletera}
                      className="flex flex-row justify-center items-center my-5 bg-[#48C9B0] p-3 rounded-full cursor-pointer hover:bg-[#00A79D]"
                    >
                    <p className="text-white text-base font-semibold">Connect your wallet</p>
                    </button>
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className= {estilos} >Relaiability</div>
                        <div className= {estilos}>Security</div>
                        <div className= {estilos}>Ethereum</div>
                        <div className= {estilos}>Web 3.0</div>
                        <div className= {estilos}>Low Fees</div>
                        <div className= {estilos}>Blockchain</div>

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
                                    Address
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    0xDe854e.....dewfT
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* FORMULARIO */}
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Formulario placeholder='Address To' name='addressTo' type='text' handleChange={() =>{}} />
                        <Formulario placeholder='Amount' name='amount' type='number' handleChange={() =>{}} />
                        <Formulario placeholder='Keyword (Gif)' name='keyword' type='text' handleChange={() =>{}} />
                        <Formulario placeholder='Enter Message' name='message' type='text' handleChange={() =>{}} />
                        {/* SELFCLOSING DIV para crear una separación con una línea */}
                        <div className="h-[1px] w-full bg-gray-400 my-2"/>

                        {/* Aquí se mostrará el Loader (?=if   //  :=else) */}

                        {true ? (
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