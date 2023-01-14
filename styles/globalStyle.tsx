import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
  color: #000;
  }

  a {
  color: inherit;
  text-decoration: none;
  }
  * {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    margin: 0;
    padding: 0;
    letter-spacing: .03em;
  }

  p{
    line-height: 22px;
  }

  h1{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    
    @media (max-width: 991px){
      font-size: 32px;
      
    }
  }
  h2{
    font-family: 'Poppins' , sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    
    @media (max-width: 991px){
      font-size: 24px;
      
    }
  }
  h3{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    
    @media (max-width: 991px){
      font-size: 20px;
      
    }
  }
  h4{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    
    @media (max-width: 991px){
      font-size: 18px;
      
    }
  }
  h5{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    
    @media (max-width: 991px){
      font-size: 16px;
      
    }
  }
`;
