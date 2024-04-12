import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "./dataSearch";

const SearchConatiner = styled.section `
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

const BookSlot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([]);

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
            {searchedBooks.map( book=> (
                <BookSlot>
                    <p>{book.name}</p>
                    <img src={book.src}/>
                </BookSlot>
            ))}
        </SearchConatiner>
    );
}

export default Search;