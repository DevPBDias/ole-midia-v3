import clientsData from '../../data/clientsData'
import ClientCard from './ClientCard'
import { ClientsContainer } from './styles'

function Clients() {

const clientsOrdered = [...clientsData].sort((a, b) => {
  if (a.name === 'CAMV Sports') return 1;
  if (b.name === 'CAMV Sports') return -1;
  return a.name.localeCompare(b.name);
});

return (
  <ClientsContainer id="clients">
    <h5>Clientes</h5>
    <section>
      {clientsOrdered.map((client) => (
        <ClientCard data={client} key={client.id} />
      ))}
    </section>
  </ClientsContainer>
);
}

export default Clients