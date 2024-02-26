import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

export default function CodeShare({ link }) {
    const [url, setUrl] = useState('');

    useEffect(() => {
        const getContent = async () => {
            try {
                const response = await axios.get(`/api/proxy/${encodeURIComponent(link)}`);
                setUrl(response.data);
                console.log("URL:::", response)
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
                <div style={{ width: '80%', paddingBottom: '56.25%' }}>
                    <iframe 
                        style={{ position: 'absolute', width: '80%', height: '80%' }} 
                        srcDoc={url} 
                        sandbox='allow-scripts allow-same-origin' 
                        title='codeShare' 
                    />
                </div>
            </Container>
        </>
    )
}
