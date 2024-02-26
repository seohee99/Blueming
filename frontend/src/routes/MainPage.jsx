import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import CodeShare from './codeShare/CodeShare';
import SetLink from './codeShare/SetLink';
import Question from './question/Question';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainPage() {
  const [codelink, setCodelink] = useState('');
  const [showCodeShare, setShowCodeShare] = useState(false);
  const [showLinkInput, setshowLinkInput] = useState(false);

  const [showQuestion, setShowQuestion] = useState(false);

  const handleShowCodeShare = () => {
    window.open(codelink, '_blank', "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    setShowCodeShare(showCodeShare => !showCodeShare)
  };
  const handleShowLinkInput = () => {
    setshowLinkInput(showLinkInput => !showLinkInput)
  };
  const handleShowQuestion = () => {
    setShowQuestion(showQuestion => !showQuestion)
  };

  console.log("code", codelink)

  return (
    <div>

      <div style={{ display: 'flex', gap: 50 }}>
        <Button onClick={handleShowQuestion}>🙋‍♀️ 질문하기</Button>
        <Button>👀 질문보기</Button>
        <Button onClick={handleShowLinkInput}>🖥️ 화면공유 하기</Button>
        <Button onClick={handleShowCodeShare}>🖥️ 화면공유 보기</Button>
      </div>

      {showLinkInput && <SetLink setCodelink={setCodelink} handleShowLinkInput={handleShowLinkInput} />}
      {showQuestion && <Question handleShowQuestion={handleShowQuestion} />}
      {showCodeShare && <CodeShare link={codelink} />}



    </div>
  )
}