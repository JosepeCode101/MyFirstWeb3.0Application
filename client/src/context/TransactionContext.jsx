import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

// 
export const TransactionContext = React.createContext();

// Ethereum window object
const { ethereum } = window;

// ACCEDER A LA BLOCKCHAIN

// construir funcion que nos permite recuperar nuestro contrato ETH
const getEthereumContract = () => {


    // Creamos un nuevo proveerdor del tipo de objeto ethers, y le pasamos el objeto ethereum generado
    // al instalar metamask.
    const provider = new ethers.providers.Web3Provider(ethereum);

    const signer = provider.getSigner();

}