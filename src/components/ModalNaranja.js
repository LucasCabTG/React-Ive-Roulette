import React, { Children } from "react";
import styled from "styled-components";

const ModalNaranja = ({children, estado, cambiarEstado, titulo}) => {
    return(
        <>
            {estado && 
            <Overlay className="modalindex">
                <ContenedorModal>
                    <EncabezadoModal>
                        <h3>{titulo}</h3>
                    </EncabezadoModal>
                    <BotonCerrar onClick={() => cambiarEstado(false)}>X</BotonCerrar>

                    {children}
                </ContenedorModal>
            </Overlay>
            }
        </>
    );
}

export default ModalNaranja


const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    background: rgba(10, 0, 0, 0.5);
    padding:40 px; 
    display: flex;
    align-items: end;
    justify-content: end; 
`;

const ContenedorModal = styled.div`
    width: 48vw;
    max-height: 90vh;
    min-height: 20vh;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 15px;
    margin-right: 30px;
    margin-bottom:10px;
    border-width: 5px;
    border-style: solid;
    border-color: #F18700;
    outline: 5px solid #fff;

    @media (max-width: 1030px) {
    margin-right: 8px;
    }
    @media (max-width: 944px) {
    margin-right: 0;
    }
    @media (max-width: 907px) {
    margin-right: 0;
    width:48vw;
    padding: 5px
    }
    @media (max-width: 901px) {
    margin-right: 0;
    width:46vw;
    padding: 5px
    }
`



const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3{
        font-weight: 500;
        font-size: 16px;
        color: #F18700;
    }
`
const BotonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    
    width: 30px;
    height: 20px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3 ease all;
    border-radius: 5px;
    color: #F18700;

    &:hover{
        background: #f2f2f2;
    }


`

