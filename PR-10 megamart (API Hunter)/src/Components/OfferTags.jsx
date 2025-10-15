import { Badge, Container } from "react-bootstrap";

const OfferTags = () => {
  const offers = ["B2G1", "JEANS 40-60%", "DEAL ZONE", "MEGAPASS AT 149"];

  return (
    <Container className="d-flex gap-3 flex-wrap my-4 justify-content-center">
      {offers.map((offer, index) => (
        <Badge
          key={index}
          bg="light"
          text="dark"
          className="px-4 py-2 rounded-pill fw-bold shadow-sm"
          style={{
            backgroundColor: "#3d3030ff",
            fontSize: "16px",
            border: "0px solid #665151ff",
          }}
        >
          {offer}
        </Badge>
      ))}
    </Container>
  );
};

export default OfferTags;
