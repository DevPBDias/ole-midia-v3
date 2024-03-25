import { CardContainer, ImgContainer, TextContainer, TextContent } from './styles'

function ClientCard({ data }: any) {
  return (
    <CardContainer>
      <ImgContainer>
        <source srcSet={data.image_dk} media="(min-width: 600px)" />
        <img src={data.image} alt={data.name} />
      </ImgContainer>
      <TextContainer>
        <TextContent>
          <h3>{data.name}</h3>
          <p>{data.team}</p>
        </TextContent>
      </TextContainer>
    </CardContainer>
  )
}

export default ClientCard