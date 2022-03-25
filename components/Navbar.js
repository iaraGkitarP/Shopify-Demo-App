import { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Container, Grid, Header, Image, Segment, Menu, Sidebar, Visibility } from "semantic-ui-react";

const Navbar = () => {

    const [fixed, setFixed] = useState(false);

    return (
        <Visibility
            once={false}
            onBottomPassed={() => setFixed(true)}
            onBottomPassedReverse={() => setFixed(false)}
        >
            <Segment
                inverted
                textAlign="center"
                style={{
                    minHeight : 50,
                    padding : '1em 2em'
                }}
            >
                <Menu
                    fixed={fixed? "top" : null}
                    inverted={!fixed}
                    secondary={!fixed}
                    size={'medium'}
                >
                    <Container>
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                    </Container>
                </Menu>
            </Segment>
        </Visibility>
    );
}

export default Navbar;