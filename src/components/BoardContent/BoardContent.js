import React, { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { isEmpty } from 'lodash'

import './BoardContent.scss'
import Column from 'components/Column/Column'
import { initialData } from 'actions/initialData'
import { mapOrder } from 'utilities/sort'
import { applyDrag } from 'utilities/dragDrop'

function BoardContent(){
    const [board, setBoard]= useState({})
    const [columns, setColumns]= useState([])

    useEffect(() => {
      const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
      if (boardFromDB){
        setBoard(boardFromDB)
        // //sort
        // boardFromDB.columns.sort((a,b) => {
        //   return boardFromDB.columnOrder.indexOf(a.id) - boardFromDB.columnOrder.indexOf(b.id)
        // })
        setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))

      }
    }, [])

    if (isEmpty(board)){
      return <div className="not-found" style={{ 'padding':'10px', 'color':'white' }}>Board not found!</div>
    }

     const onColumnDrop = (dropResult) =>
    {
      // console.log(dropResult)
      let newColumns = [...columns]
      newColumns = applyDrag(newColumns, dropResult)

      let newBoard = { ...board }
      newBoard.columnOrder = newColumns.map( c => c.id )
      newBoard.columns = newColumns

      setColumns(newColumns)
      setBoard(newBoard)
    }

    const onCardDrop= (columnId, dropResult) =>
    {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null)
      {
        let newColumns = [...columns]

        let currentColumn = newColumns.find(c => c.id === columnId)
        currentColumn.cards = applyDrag(currentColumn.cards, dropResult)
        currentColumn.cardOrder = currentColumn.cards.map( i => i.id)

        setColumns(newColumns)
        // console.log(dropResult)
      }
    }

    return (
        <nav className="board-content">
          <Container
          orientation="horizontal"
          onDrop={onColumnDrop}
          dragHandleSelector=".column-drag-handle"
          getChildPayload = {index =>
            columns[index]
          }
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'column-drop-preview'
          }}
        >
          {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column={column} onCardDrop={onCardDrop}/>
          </Draggable>
          ))}
          </Container>
          <div className="add-new-column">
            <i className="fa fa-plus icon"/> Add another card
          </div>
      </nav>
    )
}

export default BoardContent