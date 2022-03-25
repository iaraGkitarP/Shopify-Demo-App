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
            <Segment>
                <Menu>
                    <Container>
                        <Link href="/">
                            Home
                        </Link>
                    </Container>
                </Menu>
            </Segment>
        </Visibility>
    );
}

export default Navbar;