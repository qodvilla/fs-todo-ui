import styled from 'styled-components';


const FilterContainer = styled.div`
display: flex;
margin-top: 50px;
`

const FilterText = styled.p`
color: rgba(31, 42, 75, 0.59);
margin-right: 7px;
margin-top: 0px;
`
const FilterBy = styled.p`
margin-left: 5px;
color: ${props => props.link ? "#4a77e5" : "black"};
cursor: pointer;
text-decoration: ${props => props.link ? "underline" : "none"} ;
margin-left: 10px;
margin-top: 0px;
`

const Filter = ({handleFilterSelect}) => {
    return <FilterContainer>
        <FilterText>Show:</FilterText>
        <FilterBy onClick={handleFilterSelect}>All</FilterBy>
        <FilterBy onClick={handleFilterSelect} link={true}>Complete</FilterBy>
        <FilterBy onClick={handleFilterSelect} link={true}>Incomplete</FilterBy>
    </FilterContainer>    
}

export default Filter;