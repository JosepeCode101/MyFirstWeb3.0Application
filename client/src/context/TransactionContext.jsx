// Import useEffect y useState
import React, { useEffect, useState } from 'react';
// Import del paquete ethers
import { ethers } from 'ethers';
// Importamos la ABI y la dirección del contrato del archivo de constantes en la carpeta utils
import { contractABI, contractAddress } from '../utils/constants';

// Crear nuestro contexto React
export const TransactionContext = React.createContext();

// Ethereum window object estamos desestruccturando el objeto ETH de window.ethereum
const { ethereum } = window;

// ACCEDER A LA BLOCKCHAIN

// construir funcion que nos permite recuperar nuestro contrato ETH
const getEthereumContract = () => {

    // Creamos un nuevo proveerdor del tipo de objeto ethers, y le pasamos el objeto ethereum generado
    // al instalar metamask.
    const provider = new ethers.providers.Web3Provider(ethereum);

    // Obtener firmador
    const signer = provider.getSigner();

    // generamos el transaction contract con la direccion ABI y firmante que nos servirarn para recuperar nuestro SC
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);


    // imprimir los objetos por consola
    console.log({
        provider,
        signer,
        transactionContract
    });

}

export const TransactionProvider = ({ children }) => {
    
    
    // Función para comprobar si el wallet está conectado
    const checkIfWalletIsConnected = async () => {
        // Si no encuentra el objeto ETH de Metamask, que sugiera installar metamask
        if(!ethereum) return alert("Install metamask ");

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        console.log(accounts);

    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])
    
    return (
        <TransactionContext.Provider value={{value: 'test'}}>
            {children}
        </TransactionContext.Provider>
    );
}