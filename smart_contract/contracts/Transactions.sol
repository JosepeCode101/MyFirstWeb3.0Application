//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {

    // Esto va a ser un numero que va a contener el numero de nuestras transacciones
    uint256 transactionCount;

    // Declaración de un evento llamado Transfer. 
    event Transfer(address from, address reciever, uint amount, string message, uint256 timestamp, string keyword);

    // Ahora creamos un 'struct' Es similar a declarar un objeto
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // Nuestra variable 'transactions' será un array de objetos 'TransferStruct'
    TransferStruct[] transactions;

    // Declaramos una función a la que llamamos 'addToBlockchain'. HAY QUE ESPECIFICAR
    // LA VISIBILIDAD de la funcion 'public', 'private'
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {

    // Incrementamos el valor de 'transactionCounter'
    transactionCount += 1;

    // Llamando al array y usando el método push para crear un 'TransferStruct' y guardarlo en nuestro
    // array de transactions.
    transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

    // Para ejecutar la transferencia tenemos que EMITIR al evento Transfer
    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);

    }

    // Las funciones 'view' garantizan que no modificarán el estado 
    // Esta función retornará un array de 'TransferStruct' que obtendremos de 'memory'

    function getAllTransactions() public view returns (TransferStruct[] memory ) {
        return transactions;
    }

    // Retrona el numero de transaccions contadas

    function getTransactionCount () public view returns (uint256) {
        return transactionCount;
    }


}

