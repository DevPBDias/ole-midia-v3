import clientsData from '../../data/clientsData'
import ClientCard from './ClientCard'
import { ClientsContainer } from './styles'

function Clients() {
  return (
    <ClientsContainer>
      <h5>Clientes</h5>
      <section>
        {
          clientsData.map((client) => (
            <ClientCard data={client} key={client.id} />
          ))
        }
      </section>
    </ClientsContainer>
  )
}

export default Clients