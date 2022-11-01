import React, { Children } from "react";
import styled from "styled-components";

const ModalConfig = ({children, estadoConfig, cambiarEstadoConfig, titulo}) => {
    return(
        <>
            {estadoConfig && 
            <Overlay className="modalindex">
                <ContenedorModal>
                    <EncabezadoModal>
                        <h3>{titulo}</h3>
                    </EncabezadoModal>
                    <BotonCerrar onClick={() => cambiarEstadoConfig(false)}>X</BotonCerrar>

                    {children}
                </ContenedorModal>
            </Overlay>
            }
        </>
    );
}

export default ModalConfig


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
    width: 700px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    margin-right: 30px;
    margin-bottom:10px;
    border-width: 5px;
    border-style: solid;
    border-color: #f3e035;
    outline: 5px solid #fff;
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
        color: #f3e035;
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
    color: #f3e035;

    &:hover{
        background: #f2f2f2;
    }
`
