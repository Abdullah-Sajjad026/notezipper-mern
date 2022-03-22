import {Container} from "react-bootstrap";
import "./PageTitle.css";

const PageTitle = ({title}) => {
    return (
        <div className="page-title">
            <Container>
                {title && (
                    <>
                        <h1 className="heading">{title}</h1>
                        <hr />
                    </>
                )}
            </Container>
        </div>
    );
};
export default PageTitle;
