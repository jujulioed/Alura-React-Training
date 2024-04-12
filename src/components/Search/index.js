import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "./dataSearch";



const SearchConatiner = styled.section `
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%
`

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([]);

    console.log(searchedBooks)

    return (
        <SearchConatiner>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante</Subtitle>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={(event) => {
                    const wroteText = event.target.value;
                    const searchResult = books.filter( book => book.name.includes(wroteText));
                    setSearchedBooks(searchResult);
                }}
            />

        </SearchConatiner>
    );
}

export default Search;