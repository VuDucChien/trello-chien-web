export const initialData = {
    boards:[
        {
            id:'board-1',
            columnOrder:['column-1','column-2','column-3'],
            columns: [
                {
                    id:'column-1',
                    boardId:'board-1',
                    title: 'To do column',
                    cardOrder:['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
                    cards:[
                        {
                            id:'card-1',
                            boardId :'board-1',
                            columnId:'column-1',
                            title:'Title of card 1',
                            cover: 'https://i.pinimg.com/736x/0e/d7/1d/0ed71d95f87559a217802136ac196941.jpg' //if have image then show else null
                        },
                        { columnId:'column-2',id:'card-2',boardId :'board-1', title:'Title of card 2', cover: null },
                        { columnId:'column-3',id:'card-3',boardId :'board-1', title:'Title of card 3', cover: null },
                        { columnId:'column-4',id:'card-4',boardId :'board-1', title:'Title of card 4', cover: null },
                        { columnId:'column-5',id:'card-5',boardId :'board-1', title:'Title of card 5', cover: null },
                        { columnId:'column-6',id:'card-6',boardId :'board-1', title:'Title of card 6', cover: null },
                        { columnId:'column-7',id:'card-7',boardId :'board-1', title:'Title of card 7', cover: null }
                    ]
                },
                {
                    id:'column-2',
                    boardId:'board-1',
                    title: 'Inprogress column',
                    cardOrder:['card-8','card-9','card-10'],
                    cards:[
                        { columnId:'column-8',id:'card-1',boardId :'board-1', title:'Title of card 8', cover: null },
                        { columnId:'column-9',id:'card-2',boardId :'board-1', title:'Title of card 9', cover: null },
                        { columnId:'column-10',id:'card-3',boardId :'board-1', title:'Title of card 10', cover: null }
                    ]
                },
                {
                    id:'column-3',
                    boardId:'board-1',
                    title: 'Done column',
                    cardOrder:['card-11','card-12','card-13'],
                    cards:[
                        { columnId:'column-11',id:'card-1',boardId :'board-1', title:'Title of card 11', cover: null },
                        { columnId:'column-12',id:'card-2',boardId :'board-1', title:'Title of card 12', cover: null },
                        { columnId:'column-13',id:'card-3',boardId :'board-1', title:'Title of card 13', cover: null }
                    ]
                }
            ]
        }
    ]
}