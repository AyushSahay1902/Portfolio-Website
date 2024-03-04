import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding: 3rem;

    @media screen and (max-width:768px){
        flex-direction: column;
        padding: 1rem;
    
    }
`;

export const Texts = styled.div`
    flex: 1;
    h4{
        padding: 1rem;
        font-weight: 500;

        .green{
            color: #01bf71;
            font-weight: 700;
        }
    }
    h1{
        font-size: 2rem;
        font-family: "Secular One",sans-serif;
        letter-spacing: 2px;
        padding-left: 15px;
    }
    h3{
        font-weight: 500;
        font-size: 1.3rem;
        padding-left: 15px;
        text-transform: capitalize;
    }
    button{
        padding: 0.7rem 2rem;
        margin-top: 1rem;
        cursor: pointer;
        background-color: #01bf71;
        border-radius: 20px;
        border: none;
        color: #fff;
        font-weight: 500;

        &:hover{
            background-color: #fff;
            color: #01bf71;
        }

    }
`;
export const Social = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    .social-icons{
        display: flex;
        align-items: center;
        gap: 1rem;
    
        span{
            font-size: 1.5rem;
            cursor: pointer;
            transition: 0.3s;
    
    
        }

    }
`;

export const Profile = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    overflow: hidden;

    @media screen and (max-width:768px){
        width: 100%;
        /* height: 300px; */
    }

    @media screen and (max-width:550px){
        height: 300px;
        width: 300px;
        align-items: center;
    }
        

    &::before{
        content: "";
        position: absolute;
        inset: -10px 140px;
        background: linear-gradient(315deg, #00ccff, #d400d4);
        transition: 0ms.5s;
        animation: animate 10s linear infinite;
    }
    &:hover::before{
        inset: -20px 0px;
    }


    @keyframes animate{
        0%{
            filter: hue-rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            filter: hue-rotate(360deg);
            transform: rotate(360deg);
        }
    }
    &::after{
        content: "";
        position: absolute;
        inset: 6px;
        background: #162016;
        border-radius: 50%;
        z-index: 1;
    }
`;

export const Content = styled.div`
    position: absolute;
    inset: 30px;
    border: 6px solid #070a1c;
    z-index: 3;
    border-radius: 50%;

    img {
    position: absolute;
    top: 0;
    left: 0px;
    transform: scaleX(-1);
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: 0ms.5s;
    pointer-events: none;

    &:hover{
        transform: scale(1.2);
    }
  }
`;