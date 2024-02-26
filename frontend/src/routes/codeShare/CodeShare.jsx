import React, { useEffect, useState, useRef } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import axios from 'axios';

export default function CodeShare({ link }) {
    const [html, setHtml] = useState('');
    const iframeRef = useRef(null);

    useEffect(() => {


        const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
        var x = new XMLHttpRequest();
        x.open('GET', cors_api_url + link);
        x.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // 헤더 설정
        x.onreadystatechange = function () {
            if (x.readyState === 4 && x.status === 200) {
                setHtml(x.responseText);
            }
        };
        x.send();
    }, [link])

    useEffect(() => {
        if (html && iframeRef.current) {
            const iframeDoc = iframeRef.current.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(html);
            iframeDoc.close();
        }
    }, [html]);

    const newWindow = () => {

        const width = 400;
        const height = 400;
        const left = window.screen.width - width;
        const top = window.screen.height - height;
        window.open(link, '_blank', `toolbar=yes,scrollbars=yes,resizable=yes,top=${top},left=${left},width=${width},height=${height}`);
    }

    return (
        <>
            <Container fluid style={{ height: '100vh' }}>
                <div>코드 화면을 공유합니다!</div>
                <Button onClick={newWindow}>🖥️ 새창으로 보기</Button>
                <div style={{
                    width: '100%',
                    height: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <iframe ref={iframeRef} style={{ width: '80%', height: '100%' }} title='codeShare' />
                </div>
            </Container>
        </>
    )
}
