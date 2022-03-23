import "./title.css";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const Title = () => {
  return (
    <Container>
      <div className="page-desc">
        See who else has no power in Sri Lanka.
        <br />
        <span className="text-subtitle text-bold">Share your story</span>
      </div>
    </Container>
  );
};

export default Title;
