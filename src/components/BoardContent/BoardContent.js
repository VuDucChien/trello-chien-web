import  React, { useState, useEffect } from 'react'
import {isEmpty} from 'lodash'

import './BoardContent.scss'
import Column from 'components/Column/Column'
import {initialData} from 'actions/initialData'
import {mapOrder} from 'utilities/sort'

function BoardContent(){
    const [board, setBoard]= useState({}) 
    const [columns, setColumns]= useState([])

    useEffect(() => {
      const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
      if(boardFromDB){
        setBoard(boardFromDB)
        
        // //sort
        // boardFromDB.columns.sort((a,b) => {
        //   return boardFromDB.columnOrder.indexOf(a.id) - boardFromDB.columnOrder.indexOf(b.id)
        // })
        setColumns(mapOrder(boardFromDB.columns,boardFromDB.columnOrder,'id'))

      }
    },[])

    if(isEmpty(board)){
      return <div className="not-found" style={{'padding':'10px', 'color':'white' }}>Board not found!</div>
    }

    return (
        <nav className="board-content">
          {columns.map((column, index) => <Column key={index}  column={column} />)}
      </nav>
    )
   
}

export default BoardContent