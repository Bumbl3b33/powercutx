import { PayPalButtons } from "@paypal/react-paypal-js";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./donateWithPayPal.css";
const DonateWithPayPal = (props) => {
  const { type } = props;

  return (
    <>
      {type === "large" && (
        <Container>
          <Row>
            <Col xs={12} xl={9}>
              <div className="mybutton-center">
                <form
                  action="https://www.paypal.com/donate"
                  method="post"
                  target="_top"
                >
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="GB9TH4JYVZKRL"
                  />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                  />
                  <img
                    alt=""
                    border="0"
                    src="https://www.paypal.com/en_LK/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {type === "small" && (
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="hosted_button_id" value="LSLFLPHLUUARY" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_LK/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      )}
    </>
  );
};

export default DonateWithPayPal;
