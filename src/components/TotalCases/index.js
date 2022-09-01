import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getCases } from '../../redux/slice/trackerSlice'

const CaseCard = styled.div`
padding: 2rem;
max-width: 350px;
background-color: ${props => props.bgColor || "#706fd3"};
border-radius: 1rem;


`
const Title = styled.div`
font-size: 2rem;
color: #fff;
text-align: center;
`
const Text = styled.p`
font-size: 2.2rem;
margin-top: 2px;
`



const TotalCases = () => {
    const { cases, status, error } = useSelector(state => state.cases)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCases())

    }, [dispatch])
    return (
        <>

            <CaseCard>
                <Title>Confirmed</Title>
                <Text>{cases.confirmed.value}</Text>
                <Text>Last Update : {cases.lastUpdate}</Text>
            </CaseCard>


        </>
    )
}

export default TotalCases