import react from "react";
import img1 from '../components/img/1.jpg'
import img2 from '../components/img/2.jpg'
import img3 from '../components/img/3.jpg'
import img4 from '../components/img/4.jpg'
import {ReactComponent as SVGflechaIzquierda} from '../components/img/arrowLeft.svg'
import {ReactComponent as SVGflechaDerecha} from './img/arrowRight.svg'
import styled from "styled-components";

const SlideShow = () => {
    return (
        <ContenedorPrincipal>
            <ContenedorSlideShow>
                <Slide>
                    <a href="#">
                        <img src={img1}></img>
                    </a>
                    <TextSlide>
                        <p>Descuento de 15% en productos de Apple</p>
                    </TextSlide>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={img2}></img>
                    </a>
                    <TextSlide>
                        <p>Descuento de 15% en productos de Apple</p>
                    </TextSlide>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={img3}></img>
                    </a>
                    <TextSlide>
                        <p>Descuento de 15% en productos de Apple</p>
                    </TextSlide>
                </Slide>
                <Slide>
                    <a href="#">
                        <img src={img4}></img>
                    </a>
                    <TextSlide>
                        <p>Descuento de 15% en productos de Apple</p>
                    </TextSlide>
                </Slide>
            </ContenedorSlideShow>
            <Controles>
                <Boton>
                    <SVGflechaIzquierda />
                </Boton>
                <Boton derecho>
                    <SVGflechaDerecha />
                </Boton>
            </Controles>
        </ContenedorPrincipal>
    )
}

const ContenedorPrincipal = styled.div `
    position: relative;
`;

const ContenedorSlideShow = styled.div `
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div `
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 9;
    position: relative;

    img {
        width: 100%;
        vertical-align: top;
    }
`;

const TextSlide = styled.div `
    background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
    color: ${props => props.colorTexto ? props.colorTexto : "#fff"};
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    bottom: 0;

    @media (max-width: 992px) {
        position: relative;
        background: rgba(0,0,0);
        color: #fff;
    } 
`;

const Controles = styled.div `
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Boton = styled.button `
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;

    /*&:hover {
        background: rgba(0,0,0,.2);
        path {
            fill: #fff;
        }
    }*/

    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)' };
    }

    ${props => props.derecho ? 'right: 0' : 'left: 0' }

`;



export default SlideShow;