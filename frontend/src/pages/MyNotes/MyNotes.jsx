import {
    Accordion,
    Badge,
    Button,
    Card,
    Container,
    useAccordionButton,
} from "react-bootstrap";
import {Link} from "react-router-dom";
import PageTitle from "../../componens/PageTitle/PageTitle";
import notes from "../../data/notes";

const CustomToggle = ({children, eventKey}) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log("totally custom!")
    );
};

const MyNotes = () => {
    return (
        <>
            <PageTitle title={"Welcome back Abdullah Sajjad"} />
            <Container className="page-content">
                <Link to="/createnote">
                    <Button>Create New Note</Button>
                </Link>
                <div className="notes-container">
                    {notes.map((note) => (
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item>
                                <Card style={{margin: "30px 0"}}>
                                    <Card.Header style={{display: "flex"}}>
                                        <span
                                            style={{
                                                color: "black",
                                                textDecoration: "none",
                                                flex: "1",
                                                cursor: "pointer",
                                                alignSelf: "center",
                                                fontSize: "18px",
                                            }}
                                        >
                                            <Accordion.Header>
                                                {note.title}
                                            </Accordion.Header>
                                        </span>
                                        <div>
                                            <Button>Edit</Button>
                                            <Button
                                                variant="danger"
                                                className="mx-2"
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </Card.Header>
                                    <Accordion.Body eventKey="0">
                                        <Card.Body>
                                            <h4>
                                                <Badge variant="success">
                                                    Category {note.category}
                                                </Badge>
                                            </h4>
                                            <blockquote className="blockquote mb-0">
                                                <p>{note.content}</p>
                                                <footer className="blockquote-footer">
                                                    Created on - date
                                                </footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Accordion.Body>
                                </Card>
                            </Accordion.Item>
                        </Accordion>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default MyNotes;
