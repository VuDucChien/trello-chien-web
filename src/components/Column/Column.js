import  React from 'react'

import './Column.scss'
import Task from 'components/Task/Task'

function Column(){
    return (
        <div className="column">
        <header>chien</header>
        <ul className="task-list">
          <Task/>
          <li>add what you'd jjjjjjj</li>
          <li>add what you'd jjjjjjj</li>
          <li>add what you'd jjjjjjj</li>
          <li>add what you'd jjjjjjj</li>
          <li>add what you'd jjjjjjj</li>
        </ul>
        <footer>
          Add another card
        </footer>
        </div>
    )
}

export default Column