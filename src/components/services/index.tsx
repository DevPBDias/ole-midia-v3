import servicesData from '../../data/servicesData'
import ServiceCard from './ServiceCard'
import { ServicesContainer } from './styles'

function Services() {
  return (
    <ServicesContainer id='services'>
        <h5>Serviços</h5>
        <section>
            {
                servicesData.map((service) => (
                    <ServiceCard data={service} key={service.id} />
                ))
            }
        </section>
    </ServicesContainer>
  )
}

export default Services