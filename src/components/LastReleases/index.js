import { books } from "./dataLastReleases";
import { Title } from "../Title";
import styled from "styled-components";
import bookImage from "../../images/livro2.png"
import RecomendationCard from "../RecomendationCard";

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
    return(
        <LastReleasesContainer>
            <Title 
                color='#000' 
                fontSize='36px' 
                align='center'
            >Últimos Lançamentos</Title>
            <NewBooksContainer>
                {books.map ( book => (
                    <img src={book.src}/>
                ))}
            </NewBooksContainer>
            <RecomendationCard
                title='Talvez você se interesse por...'
                subtitle='Angular 11'
                desc='Construindo uma aplicação com Angular do zero'
                img={bookImage}
            />
        </LastReleasesContainer>
    )
}

export default LastReleases;