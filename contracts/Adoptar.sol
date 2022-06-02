pragma solidity ^0.5.16;

contract Adoptar {

    address[10] public perros;

    function adoptar(uint perroIndex) public returns (bool){
        require( perroIndex >= 0 && perroIndex <= 9 , "No existe el perro id");
        bool adoptado = false;

        if ( perros[perroIndex] == address(0) ){
            perros[perroIndex] = msg.sender;
            adoptado = true;
        }

        return adoptado;
    }

    function getPerros() public view returns ( address[10] memory ) {
        return perros;
    }


}
