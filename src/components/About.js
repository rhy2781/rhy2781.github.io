import Card from 'react-bootstrap/Card';

function About() {
    return (
        <Card className="About">
            <Card.Body className="AboutBody">
                <Card.Title>About Me!</Card.Title>
                <Card.Text>
                    <p>
                        Hi, my name is Robert Yamasaki.
                    </p>
                    <p>
                        I am a 20 year old Software Engineer currently attending the Rochester Institute of Technolgy.
                        I code primarily in Python and Java, so if you're wondering why Oshawott is spinning, just think
                        about the react logo.
                    </p>
                    <p>
                        I am passionate about volleyball, and learning about how applications use cloud technologies.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default About;