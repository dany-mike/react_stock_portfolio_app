import { Container } from '@material-ui/core'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import AddCompanyIntoWalletForm from '../../components/AddCompanyIntoWalletForm/AddCompanyIntoWalletForm'
import CompanyDescriptionCard from '../../components/CompanyDescriptionCard/CompanyDescriptionCard'


export default function AddValuePage() {
    return <>
            <Container>
                <AddCompanyIntoWalletForm />
                <CompanyDescriptionCard />
            </Container>
    </>
}
