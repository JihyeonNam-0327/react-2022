import './App.css';
import ResultRows from './components/ResultRows';

function App() {
  let rows = [];
  const candidates = [
    {name: "1. 김일돌", votes: 40, percentage: 0},
    {name: "2. 김이돌", votes: 25, percentage: 0},
    {name: "3. 김삼돌", votes: 15, percentage: 0},
    {name: "4. 김사돌", votes: 11, percentage: 0},
    {name: "5. 김오돌", votes: 83, percentage: 0},
  ]

  // 총합 계산
  const totalVotes = candidates.map(hubo=>hubo.votes).reduce((a, b) => a + b);

  // 퍼센티지 계산
  candidates.forEach((item) => {
    item.percentage = Math.round(item.votes/totalVotes*100, 2);
  })

  // 컴포넌트 반복
  candidates.forEach((item) => {
    rows.push(
      <ResultRows 
        name={item.name}
        votes={item.votes}
        percentage={item.percentage}
        key={item.name}
      />
    )
  })

  return (
    <div className="result-box">
      <h1>후보별 득표 결과</h1>
      
      <div className="table">
        {rows}
      </div>
    </div>
  );
}

export default App;
