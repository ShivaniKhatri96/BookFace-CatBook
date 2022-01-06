import styled, { keyframes } from 'styled-components';


export const FooterContainer = styled.div`
  height: 200px;
  background-color: #f9fbb2;
  margin-top: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  
  

  @media  (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      height: min-content;
  }


`;

export const Team = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

 
 
`;

export const TeamTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 5px;
  text-decoration: underline;
`;

export const TeamList = styled.ul`
  
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  list-style-type: none;
  text-decoration: none;
  margin: 5px;

  @media  (max-width: 800px) {
      flex-direction: column;
        justify-content: center;
        align-items: center;

  }
`;



export const TeamListMember = styled.li`
  list-style-type: none;
  text-decoration: none;
  list-style: none;
  width: 15rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 20px;

  @media (max-width: 800px) {
    justfiy-content: flex-start;
    width:100%;
    
    }
  
`;

export const Spa = styled.span`
    opacity: 0;
    transform: translateX( -50px);
    transition: transform 1s, opacity 1s;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    padding: 7px;

    @media (max-width: 800px) {
      opacity: 1;
      transform: translateX( 0px);
      
    }
    
`



export const Lnk = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin: 5px;
    align-items: center;

     &:visited {
        color: black;
    }

    &:hover ${Spa}{
      opacity: 1;
      transform: translateX( 0px );
      border: 1px solid rgba(0, 0, 0, 0.5);
      transition: transform 300ms, opacity 1s, border 1s;
    }

    @media (max-width: 800px) {
        justify-content: center;
    }
`


export const Img = styled.img`
    width: 50px;
    height: 50px;
    margin: 0 5px;
    border-radius:50px;
    border: 1px solid rgba(0, 0, 0, 0.2);

    


`



