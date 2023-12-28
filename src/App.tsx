
import './App.css'
import { MainCanvas } from './components/mainCanvas/MainCanvas'
import { ClearBackground } from './components/mainCanvas/ClearBackground'
import { Rectangle } from './components/mainCanvas/Rectangle'
import { Setup } from './components/mainCanvas/Setup'

function App() {
  
  return (
    <div className="m-2">
      <MainCanvas>
        <Setup />
        <ClearBackground />
        <Rectangle />
      </MainCanvas>
    </div>
  )
}

export default App
