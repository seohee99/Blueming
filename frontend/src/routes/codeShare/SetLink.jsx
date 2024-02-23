import React, { useCallback, useState } from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';

export default function SetLink({ setCodelink, handleShowLinkInput }) {
    const [link, setLink] = useState('');

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        setCodelink(link)
        handleShowLinkInput()
    }, [handleShowLinkInput, link, setCodelink])

    return (
        <>
            <Modal show={true} onHide={handleShowLinkInput}>
                <Modal.Header closeButton>

                    <Modal.Title>모달창</Modal.Title>

                </Modal.Header>
                <Form onSubmit={onSubmit}>
                    <Modal.Body>
                        <Form.Group className='mb-3'>

                            <Form.Label>VSCode LiveShare 링크를 입력해주세요.</Form.Label>
                            <Form.Control as='textarea' rows={5} placeholder='input Link' value={link} onChange={(e) => setLink(e.target.value)} />

                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit'>입력</Button>
                        <Button onClick={handleShowLinkInput} >취소</Button>
                    </Modal.Footer>
                </Form>
            </Modal >
        </>
    )
}

