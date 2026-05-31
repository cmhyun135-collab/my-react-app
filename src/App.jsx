import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import EmojiPicker from './components/EmojiPicker'
import InfoCard from './components/InfoCard'
import './App.css'

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  return (
    <div className="layout-container">
      <Header />
      <main>
        <h1>Hello React!</h1>
        <p>나의 첫 번째 React 앱입니다.</p>
        
        {/* State Summary Section */}
        <div style={{ margin: '2rem 0' }}>
          <InfoCard 
            icon={selectedEmoji ? selectedEmoji.char : '❓'}
            title={selectedEmoji ? `현재 감정: ${selectedEmoji.char}` : '감정을 선택해주세요'}
            description={selectedEmoji ? '선택하신 감정이 앱 전체에 반영되었습니다.' : '아래 이모지를 클릭하여 현재 기분을 표현해보세요.'}
            badgeText={selectedEmoji ? '진행중' : '대기'}
            badgeColor={selectedEmoji ? '#3498db' : '#95a5a6'}
          />
        </div>

        <EmojiPicker 
          selectedEmoji={selectedEmoji} 
          onSelect={setSelectedEmoji} 
        />

        <div className="card-container">
          <InfoCard 
            icon='🚀' 
            title='React 학습' 
            description='컴포넌트 기반으로 UI를 효율적으로 개발합니다.' 
            badgeText='인기' 
            badgeColor='#E74C3C' 
          />
          <InfoCard 
            icon='⚡' 
            title='Vite 빌드 도구' 
            description='빠른 개발 서버와 핫 리로드를 제공합니다.' 
            badgeText='빠름' 
            badgeColor='#F39C12' 
          />
          <InfoCard 
            icon='🎨' 
            title='CSS 모듈' 
            description='컴포넌트 단위로 스타일을 격리합니다.' 
            badgeText='추천' 
            badgeColor='#27AE60' 
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
