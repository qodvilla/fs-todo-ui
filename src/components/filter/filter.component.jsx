import styled from 'styled-components';


const FilterContainer = styled.div`
display: flex;
`

const FilterText = styled.p`
color: rgba(31, 42, 75, 0.59)
`
const FilterBy = styled.p`
margin-left: 5px;
color: ${props => props.link ? "#4a77e5" : "black"};
cursor: pointer;
text-decoration: ${props => props.link ? "underline" : "none"} ;
`

const Filter = ({handleFilterSelect}) => {
    return <FilterContainer>
        <FilterText>Show:</FilterText>
        <FilterBy onClick={handleFilterSelect}>All</FilterBy>
        <FilterBy link='blue'>Complete</FilterBy>
        <FilterBy link={true}>Incomplete</FilterBy>
    </FilterContainer>    
}

export default Filter;