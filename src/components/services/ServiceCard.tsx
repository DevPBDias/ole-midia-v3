import { CardContainer, ImgContainer, TextContainer, TextContent } from "./styles"

function ServiceCard({ data }: any) {

    return (
        <CardContainer>
            <ImgContainer>
                <img src={data.image} alt={data.name} />
            </ImgContainer>
            <TextContainer>
                <TextContent>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                </TextContent>
            </TextContainer>
        </CardContainer>
    )
}

export default ServiceCard