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

    // constante para el setear el estado de la billetera a conectada
    const [currentAccount, setCurrentAccount] = useState('');

    // constante para emitir las transacciones desde la informacion que pasaremos a través del formulario.
    const [formData, setFormData] = useState({addressTo: '', amount: '', keyword: '', message:''});

    // Contexto para el botón de 'Send Transaction'
    const [isLoading, setIsLoading] = useState(false);
    

    // setear las propiedades del FORM
    const handleChange = (e, name) => {

        // para acabar de entender esta parte hacer un formulario y utilizar esta función para ver como cambian los parametros del formulario
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));

    }



    // Función para comprobar si el wallet está conectado
    const checkIfWalletIsConnected = async () => {
        try {
            // Si no encuentra el objeto ETH de Metamask, que sugiera installar metamask
            if(!ethereum) return alert("Install metamask ");

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            //Checkear si hay una cuenta conectada
            if(accounts.length) {
            setCurrentAccount(accounts[0]);

            // getAllTransactions();
            } else {
            console.log('No accounts found');
            }
        } catch (error) {
            console.log(error);

            throw new Error('No ETH object');
        }

        //console.log(accounts);

    }


    //Función para conectar la billetera 
    const connectWallet = async () => {
        try {
            // Comprueba si tienes Metamask instalado
            if(!ethereum) return alert("Install metamask ");
            // Si tienes varias cuentas de metamask ESCOGER QUE BILLETERA CONECTAR
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            // Para conectar la primera cuenta que encuentre por defecto
            setCurrentAccount(accounts[0]);

        } catch (error) {

            console.log(error);

            throw new Error('No ETH object');
            
        }
    }

    // Función para emitir transacciones a la blockchain
    const sendTransaction = async () => {

        try {

            if (!ethereum) return alert("Please install Metamask");

            // obtener los datos del formulario
            const { addressTo, amount, keyword, message } = formData; 
            // Llamar al smartContrat
            getEthereumContract();
            
        } catch (error) {

            console.log(error);

            throw new Error('No ETH object');
            
        }

    }




    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])
    // pasar a través de las propiedades
    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, isLoading }}>
            {children}
        </TransactionContext.Provider>
    );
}