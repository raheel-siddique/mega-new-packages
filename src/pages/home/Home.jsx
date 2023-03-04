import { Col, Row } from "antd";
import React from "react";
import "./Home.css";
import image from "../../Component/Images/download (2).jpeg";
import Sceond_image from "../../Component/Images/Ragdoll.jpg";
import Cards from "../../Component/Content/Cards";
// import Cards from "./Cards";

const Home = () => {
  return (
    <>
      <Row className="Content_Main_Row">
        <Col lg={13} className="Col_Text">
          <h1 className="Col_Heading_Text">The Groom Room</h1>
          <p className="Col_Para_Text">
            {/* Lorem ipsum dolor sit amet consectetur. */}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            nulla dolores ipsa quae incidunt. Obcaecati distinctio, dolorum
            nulla vero temporibus similique tenetur dignissimos non possimus,
            fuga totam. Similique, optio provident!
          </p>
          <button className="Col_Button_Text">Click Me</button>
        </Col>

        <Col lg={11}>
          <img src={image} className="Col_Image" />
        </Col>
      </Row>

      <Cards />

      <Row className="Content_Sceond_Main_Row">
        <Col lg={10}>
          <img src={Sceond_image} className="Col_Sceond_Image" />
        </Col>

        <Col lg={14} className="Col_Text">
          <h1 className="Col_Heading_Text">About Us </h1>
          <p className="Col_Sceond_Para_Text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum nemo
            praesentium velit,{" "}
            <span
              style={{
                color: "rgb(0, 51, 102)",
                fontWeight: "bolder",
                cursor: "pointer",
              }}
            >
              aliquam quidem impedit unde aspernatur fugit.
            </span>{" "}
          </p>
          <p className="Col_Sceond_Para_Text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugit dolore nobis laudantium molestiae quae aliquid nemo sed
            repellendus atque doloribus, consequuntur eaque ea harum asperiores
            molestias itaque.{" "}
            <span
              style={{
                color: "rgb(0, 51, 102)",
                fontWeight: "bolder",
                cursor: "pointer",
              }}
            >
              {" "}
              Praesentium saepe voluptas dicta.
            </span>{" "}
            Mollitia explicabo possimus molestias natus quod ipsam incidunt
            fugit adipisci ducimus eveniet iure quis facilis vero, eligendi
            voluptates libero nemo quae excepturi eos saepe repudiandae!
            Repellendus, voluptas esse sunt quas cumque est exercitationem
            perferendis vel obcaecati suscipit nobis.
          </p>

          <button className="Col_Button_Text">Click Me</button>
        </Col>
      </Row>
    </>
  );
};
export default Home;
