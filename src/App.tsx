import { useEffect, useState } from 'react'
import './App.css'
import Block from './components/Block'

function App() {

  const [state, setState] = useState(Array(9).fill(null))
  const [currentValue, setCurrentValue] = useState('X')
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (gameOver) {
      resetGame()
    }
  }, [gameOver])

  const winCheck = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i]
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        alert(`${currentValue} won the game`)
        setGameOver(true)
        return
      }
    }
  }

  const handleOnclick = (index: number) => {
    if (gameOver) return
    const stateCopy = Array.from(state)
    if (stateCopy[index] !== null) return
    stateCopy[index] = currentValue
    winCheck(stateCopy)
    setCurrentValue(currentValue === 'X' ? 'O' : 'X')
    setState(stateCopy)
  }

  const resetGame = () => {
    setState(Array(9).fill(null))
    setCurrentValue('X')
    setGameOver(false)
  }

  console.log(state)
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div>
          <div className='flex'>
            <Block onClick={() => handleOnclick(0)} value={state[0]} />
            <Block onClick={() => handleOnclick(1)} value={state[1]} />
            <Block onClick={() => handleOnclick(2)} value={state[2]} />
          </div>
          <div className='flex'>
            <Block onClick={() => handleOnclick(3)} value={state[3]} />
            <Block onClick={() => handleOnclick(4)} value={state[4]} />
            <Block onClick={() => handleOnclick(5)} value={state[5]} />
          </div>
          <div className='flex'>
            <Block onClick={() => handleOnclick(6)} value={state[6]} />
            <Block onClick={() => handleOnclick(7)} value={state[7]} />
            <Block onClick={() => handleOnclick(8)} value={state[8]} />
          </div>


        </div>
      </div>
    </>
  )
}

export default App
