import React, { useState, useEffect  } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { connect } from 'react-redux';
import uuid from "uuid/v4";

import  MONTH  from '../../redux/actions/month';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';
import { green, purple, grey, red } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import Grid from '@material-ui/core/Grid';


//https://www.youtube.com/watch?v=Vqa9NMzF3wc
//https://codesandbox.io/s/nostalgic-varahamihira-76ep6?file=/src/App.js
//https://github.com/atlassian/react-beautiful-dnd


const TrashButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[500],
    minWidth: 40,
    fontSize: 20,

  
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

let itemsFromBackend = [
  
];

  let columnsFromBackend = {
  [uuid()]: {
    name: "Turnos",
    items: itemsFromBackend
  },
  
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  console.log(result)
  console.log(columns)
  console.log(setColumns)

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
    console.log("Entra a IF onDragEnd ")
   
  } else {
    const column = columns[source.droppableId];

    console.log(column)
    const copiedItems = [...column.items];

    console.log(copiedItems)
    const [removed] = copiedItems.splice(source.index, 1);
    console.log(removed)
    copiedItems.splice(destination.index, 0, removed);
    console.log(copiedItems)
    console.log(source)
    console.log(source.droppableId)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
    
    console.log(columns)
    console.log(Object.entries(columns)[0][1].items)
    Object.entries(columns)[0][1].items= copiedItems
    console.log(Object.entries(columns)[0][1].items)
    itemsFromBackend = copiedItems
    Object.entries(columnsFromBackend)[0][1].items= copiedItems
    console.log(itemsFromBackend)
    console.log("No entra a IF onDragEnd ")
  }
};

 function App(props) {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [onBlur, setOnBlur] = useState("");
  const [reset, setReset] = useState({});


  const _onBlurFunction = event => {

    if(event.target.value != ""){

      // Si se pierde el foco del input, y se ejecuta esta función
      console.log(event.target.value)
      console.log(event.target)
      console.log(setOnBlur)
      console.log(setReset)
      setOnBlur(event.target.value)
      setReset(event.target)

    } 


  }
const _handleSubmit = event  => {

    console.log(event)
    //Evitar que se recargue la página al hacer submit
    event.preventDefault()
    let valor = document.getElementById("outlined").value

    if(valor != ""){


      console.log(event)
      console.log(event.target.inner)
      console.log(document.getElementById("outlined"))

      console.log(document.getElementById("outlined").value)

      
      console.log("value " + valor)
      console.log(valor)
      console.log(setOnBlur())
      console.log(setReset())
      setOnBlur(valor)
      console.log(onBlur)
      setReset(document.getElementById("outlined"))
      _onClick(valor)

    } 


  }

const _onClick = (valor) => {

    console.log(onBlur)
    console.log(valor)
    

    //En "onBlur" se guardan los datos del input si se apretó el botón, y en "valor" si se presionó la tecla ENTER o IR (Android) del teclado

    if(onBlur != "" && onBlur != undefined){


      console.log("Entró a onBlur")
      console.log(onBlur)
      Object.entries(columns)[0][1].items.push( { id: uuid(), content: onBlur })
      console.log(Object.entries(columns)[0][1].items)

      setColumns( {
        
        [uuid()]: {
          name: "Turnos",
          items: Object.entries(columns)[0][1].items
        }
        
      })

      console.log(columns)
      console.log(reset)
      setOnBlur("")
      reset.value = ""
      


    } else {

      if (valor  != "" && valor != undefined) {

        console.log("Entró a onBlur")
        console.log(valor)
        Object.entries(columns)[0][1].items.push( { id: uuid(), content: valor })
        console.log(Object.entries(columns)[0][1].items)

        setColumns( {
          
          [uuid()]: {
            name: "Turnos",
            items: Object.entries(columns)[0][1].items
          }
          
        })

        console.log(columns)
        console.log(reset)
        reset.value = ""
        valor=""
        setOnBlur("")
        document.getElementById("outlined").value = ""



      } else{

        console.log("Input vacio" )

      }

    }
   

  }
  //Referenciar al array que contiene los datos mediante "Object.entries(columns)[0][1]" en vez de "itemsFromBackend" permite la actualización asíncrona de los datos
  const deleteOfArray = (param) => {

    
      console.log(itemsFromBackend)
   


      var index = Object.entries(columns)[0][1].items.indexOf( param );

      console.log(index)

      Object.entries(columns)[0][1].items.splice( index, 1 );
      
      setColumns( {
        
        [uuid()]: {
          name: "Turnos",
          items:  Object.entries(columns)[0][1].items
        }
        
      })

      console.log( Object.entries(columns)[0][1].items)
 
  }

const addCall = (param) => {

      //Le agregamos el emoji 📞 al nombre para saber que llamó más de una vez
      console.log(itemsFromBackend)
      console.log(typeof(Object.entries(columns)))
      console.log(Object.entries(columns)[0][1].items)
      console.log(Object.entries(columns))
   
   
      var index = Object.entries(columns)[0][1].items.indexOf( param );
      console.log(index)
    
      console.log(typeof(Object.entries(columns)[0][1].items[index].calls))
      console.log(typeof(typeof(Object.entries(columns)[0][1].items[index].calls)))

      if(typeof(Object.entries(columns)[0][1].items[index].calls) == "undefined" ) {


        Object.entries(columns)[0][1].items[index].originalName = Object.entries(columns)[0][1].items[index].content
        Object.entries(columns)[0][1].items[index].content =   Object.entries(columns)[0][1].items[index].content +  " 📞"
        Object.entries(columns)[0][1].items[index].calls = 1
        console.log("calls is undefined")


      } else{

        Object.entries(columns)[0][1].items[index].content =   Object.entries(columns)[0][1].items[index].content +  " 📞"
        Object.entries(columns)[0][1].items[index].calls = Object.entries(columns)[0][1].items[index].calls + 1
        console.log("calls is defined")


      }
      
      setColumns( {
        
        [uuid()]: {
          name: "Turnos",
          items: Object.entries(columns)[0][1].items
        }
        
      })

      console.log(itemsFromBackend)

  }

const decreaseCall = (param) => {

      //Contamos la cantidad de veces que aparece el emoji 📞 y redefinimos el nombre agregándole el emoji la misma cantidad de veces que tenía menos 1
    
      console.log(param)
      console.log(Object.entries(columns)[0][1].items)

      var index = Object.entries(columns)[0][1].items.indexOf( param );
      console.log(index)
      
      console.log(Object.entries(columns)[0][1].items[index].content.length)
      
      if (Object.entries(columns)[0][1].items[index].calls > 0) {


        Object.entries(columns)[0][1].items[index].calls = Object.entries(columns)[0][1].items[index].calls - 1

      }
      

      if(typeof(Object.entries(columns)[0][1].items[index].calls) != "undefined"   ) {



        console.log(Object.entries(columns)[0][1].items[index].calls)

        for (var i = 0; i < Object.entries(columns)[0][1].items[index].calls ; i++) {
          
          if (i ==0 ) {

            Object.entries(columns)[0][1].items[index].content =   Object.entries(columns)[0][1].items[index].originalName +  " 📞"


          } else {

               Object.entries(columns)[0][1].items[index].content =  Object.entries(columns)[0][1].items[index].content +  " 📞"

          }
        

        }

      }

      if (Object.entries(columns)[0][1].items[index].calls == 0) {

        Object.entries(columns)[0][1].items[index].content = Object.entries(columns)[0][1].items[index].originalName
      }

      setColumns( {
        
        [uuid()]: {
          name: "Turnos",
          items: Object.entries(columns)[0][1].items
        }
        
      })

}

  console.log(columns)
  console.log(itemsFromBackend)
  console.log(columnsFromBackend)

  return (
    <div style={{ display: "flexDirectionex", justifyContent: "center", height: "100%",  }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns,)}
                
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightgrey"//Colores de fondo
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          height: 350,
                          overflow: "auto",
                          

                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div>
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        height: "45px",
                                        width: "70%",

                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        display: "flex",
                                        flexWrap: "wrap",                                    
                                       
                                        ...provided.draggableProps.style
                                      }}
                                    >
                    
                                    <div style={{ flex: "100%" }} > {item.content} </div>

                                    {console.log(item)}
               
                                    <div  style={{ flex: "auto" , flexWrap: "nowrap", alignSelf: "space-around"}}>                               
                                     
                                       <Grid item>
                                          <Tooltip title="Añadir llamada" onClick={() => addCall(item)} >
                                            <IconButton aria-label="delete">
                                              <AddIcon />
                                              </IconButton>
                                          </Tooltip>
                                        </Grid>
                                 
                                      </div> 
                                    
                                     <div  style={{ flex: "auto" , flexWrap: "nowrap", alignSelf: "space-around"}}>                               
                                     
                                       <Grid item>
                                          <Tooltip title="Quitar llamada" onClick={() => decreaseCall(item)}  >
                                            <IconButton aria-label="delete" >
                                              <RemoveIcon />
                                              </IconButton>
                                          </Tooltip>
                                        </Grid>
                                 
                                      </div> 

                                         <div  style={{ flex: "auto" , flexWrap: "nowrap", alignSelf: "space-around"}}>                               
                                       
                                           <Grid item>
                                              <Tooltip title="Borrar"  onClick={() => deleteOfArray(item)}>
                                                <IconButton aria-label="delete">
                                                  <DeleteIcon />
                                                  </IconButton>
                                              </Tooltip>
                                            </Grid>
                                   
                                        </div> 


                                      </div>
                                    </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>

            </div>
          );
        })}
      </DragDropContext>
      <br />
      <div align="center">
      
      <form  autocomplete="off" onSubmit={_handleSubmit}>

      <TextField

        id="outlined"
        styles={{marginLeft:  100}}    


        variant="outlined"
        onBlur={_onBlurFunction}

        // defaultValue={props.currentData}         

      />
      <br />
      <br />
    <Button  variant="contained" color="primary" onClick = { () => _onClick() }> 
          
      Asginar turno
            
    </Button>
     </form>
    </div>
    </div>
  );
}

const mapStateToProps = (state) =>{

  return {

    reducidor: state.month,
        
  }
}      

const mapDispatchToProps = {

  MONTH,
  
}

export default  connect(mapStateToProps, mapDispatchToProps)(App)