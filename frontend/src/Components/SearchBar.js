import React from "react"
import { useRef, useState, useEffect } from "react"
import { Container, SearchInput } from './SearchBar.style'
import { BiSearchAlt } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'

function SearchBar() {

    const targetRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocued, setIsFocused ] = useState(false);

    const showSearchInput = isHovered || isFocued;

    useEffect(() => {
        targetRef.current.value = ""
    }, [showSearchInput])

    return (
        <Container
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        hover={showSearchInput}
      >
        <SearchInput ref={targetRef} showSearchInput={showSearchInput} />
        {showSearchInput ? <BsArrowRight /> : <BiSearchAlt />}
      </Container>
    )
}

export default SearchBar
