import React, { useState } from "react";
import KanjiCard from "./components/KanjiCard";
import AnswerOptions from "./components/AnswerOptions";
import ResultModal from "./components/ResultModal";
import { kanjiDataN3 } from "./data/kanjiDataN3";
import { Layout } from "antd";
const { Content } = Layout;

function App() {
  const [current, setCurrent] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentKanji = kanjiDataN3[current];

  const handleSelect = (selected) => {
    const correct = selected === currentKanji.correct;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setCurrent((prev) => (prev + 1) % kanjiDataN3.length);
  };

  return (
    <Layout style={{ padding: "2rem", minHeight: "100vh" }}>
      <Content style={{ maxWidth: 400, margin: "0 auto" }}>
        <KanjiCard kanji={currentKanji.kanji} example={currentKanji.example} />
        <AnswerOptions options={currentKanji.options} onSelect={handleSelect} />
        <ResultModal
          visible={showResult}
          correct={isCorrect}
          onNext={handleNext}
        />
      </Content>
    </Layout>
  );
}

export default App;
