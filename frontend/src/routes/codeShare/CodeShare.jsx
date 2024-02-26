import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import axios from 'axios';

export default function CodeShare({ link }) {
    const [url, setUrl] = useState({});

    const PROXY = 'https://cors-anywhere.herokuapp.com';

    useEffect(() => {
        const getContent = async () => {
            try {

                const response = await axios(`${PROXY}/${link}`);
                const data = await response.data;
                setUrl(data);

                console.log("URL:::", url)
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        getContent();
    }, [link])
    return (

        <>
            <Container>
                <div>CodeShare</div>
                {/* link :: {link} <br /> */}
                {/* url :: url <br /> */}
                <div style={{ width: '80%', paddingBottom: '56.25%' }}>
                    <iframe style={{ position: 'absolute', width: '80%', height: '80%' }} srcDoc={url} sandbox='allow-scripts allow-same-origin' title='codeShare' />
                </div>
            </Container>
        </>
    )
}
