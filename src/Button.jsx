import { useContext } from "react";
import styled from "styled-components";
import { Contexto } from "./Context";
import { ThreeDots } from "react-loader-spinner";
const pontinhos = 
<ThreeDots 
height="12" 
width="80" 
radius="9"
color="white" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
 function fazNada(){}
export default function Button(props) {
    const contexto = useContext(Contexto);
    return (
        <ButtonBase onClick={props.onClick ? props.onClick : fazNada} id={contexto.text} type="submit" BtnInfo={contexto} disabled={contexto.disabled}>{contexto.disabled ? pontinhos : contexto.text}</ButtonBase>
    )
}

const ButtonBase = styled.button`
    width: ${x => x.BtnInfo.width};
    height: ${x => x.BtnInfo.height};
    font-family: 'Lexend Deca', sans-serif;
    font-size: ${x => x.BtnInfo.fontSize ? x.BtnInfo.fontSize : '21px'};
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: 1px solid #52B6FF;
    background-color:#52B6FF;
    opacity: ${x=> x.disabled ? '70%' : '100%'};
    border-radius: 4.63636px;
    margin-right: ${x => x.BtnInfo.margin ? '17px' : '0'};
    text-decoration: none;
`