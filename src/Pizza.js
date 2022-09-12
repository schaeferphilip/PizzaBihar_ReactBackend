import React , { useEffect, useState }   from "react";
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Pizza = props =>{
    const [data, setData] = React.useState([]);
    let datarows = React.useState([]);
    let datacols = React.useState([]);
    let columns = []
    let rows = []
    let TableTitle
    let columnsinfo

    const STATUSES = {
        PIZZA: 'pizza',
        ING: 'ingredients',
        ORD: 'orders',
        CUS: 'customer',
        STA: 'status',
        PI: 'pizing',
        OP: 'ordpiz'
      }

      const [state, setState] = useState();

    React.useEffect(()=>{
        axios('http://localhost:5000/pizza')
        .then(response=>{
            if(response.status===200){
                const datarows =response.data.rows;
                console.log('----------------------------')
                for (let i = 0; i < datacols.length; i++){
                  datacols = response.data.metaData[i].name;
                  columns.push(datacols)
                  console.log(columns)
                }              
            }
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);

    let datadisplay=<div id='datadisplay'>----</div>;

    const pizza = () => {
        console.log('pizza')
        TableTitle = 'Pizza'
        setState(STATUSES.PIZZA)
        axios('http://localhost:5000/pizza')
            .then(response=>{
                if(response.status===200){
                    datadisplay=<div id='datadisplay'>test</div>
                    datarows =response.data.rows;
                    console.log(datarows);
                    setData(datarows);
                    console.log(datarows[1]);
                    console.log(columns)
                    //return (datadisplay)
                }
            })
            .catch(err=>{
                console.log(err);
            })
    }

    const orders = () => {
      console.log('orders')
      TableTitle = 'Orders'
      setState(STATUSES.ORD)
      axios('http://localhost:5000/orders')
          .then(response=>{
              if(response.status===200){
                  datadisplay=<div id='datadisplay'>test</div>
                  datarows =response.data.rows;
                  console.log(datarows);
                  setData(response.data.rows);
                  console.log(columns)
                  //return (datadisplay)
              }
          })
          .catch(err=>{
              console.log(err);
          })
    }

    const customer = () => {
      console.log('customer')
      TableTitle = 'Customer'
      setState(STATUSES.CUS)
      axios('http://localhost:5000/customer')
          .then(response=>{
              if(response.status===200){
                  datadisplay=<div id='datadisplay'>test</div>
                  datarows =response.data.rows;
                  console.log(datarows);
                  setData(response.data.rows);
                  console.log(columns)
                  //return (datadisplay)
              }
          })
          .catch(err=>{
              console.log(err);
          })
  }
  
  const ingredients = () => {
    console.log('ingredients')
    TableTitle = 'Ingredients'
    setState(STATUSES.ING)
    axios('http://localhost:5000/ingredients')
        .then(response=>{
            if(response.status===200){
                datadisplay=<div id='datadisplay'>test</div>
                datarows =response.data.rows;
                console.log(datarows);
                setData(response.data.rows);
                console.log(columns)
                //return (datadisplay)
            }
        })
        .catch(err=>{
            console.log(err);
        })
}

const status = () => {
  console.log('status')
  TableTitle = 'Status'
  setState(STATUSES.STA)
  axios('http://localhost:5000/status')
      .then(response=>{
          if(response.status===200){
              datadisplay=<div id='datadisplay'>test</div>
              datarows =response.data.rows;
              console.log(datarows);
              setData(response.data.rows);
              console.log(columns)
              //return (datadisplay)
          }
      })
      .catch(err=>{
          console.log(err);
      })
}

const pizzaingredients = () => {
  console.log('Pizza_Ingredients')
  TableTitle = 'Pizza_Ingredients'
  setState(STATUSES.PI)
  axios('http://localhost:5000/pizzaingredients')
      .then(response=>{
          if(response.status===200){
              datadisplay=<div id='datadisplay'>test</div>
              datarows =response.data.rows;
              console.log(datarows);
              setData(response.data.rows);
              console.log(columns)
              //return (datadisplay)
          }
      })
      .catch(err=>{
          console.log(err);
      })
}

const orderspizza = () => {
  console.log('Orders_pizza')
  TableTitle = 'Pizza'
  setState(STATUSES.OP)
  axios('http://localhost:5000/orderspizza')
      .then(response=>{
          if(response.status===200){
              datadisplay=<div id='datadisplay'>test</div>
              datarows =response.data.rows;
              console.log(datarows);
              setData(response.data.rows);
              console.log(columns)
              //return (datadisplay)
          }
      })
      .catch(err=>{
          console.log(err);
      })
}



if(state === STATUSES.PIZZA){
    columnsinfo = <div> 
        PIZZA <br></br> <div>----------------------------</div><br></br>
        <strong>ID , NAME , PRICE</strong>
        </div>
} else if(state === STATUSES.ING){
    columnsinfo = <div> 
        INGREDIENTS <br></br> <div>----------------------------</div><br></br>
        <strong>ID , NAME , PRICE</strong>
        </div>
} else if(state === STATUSES.ORD){
    columnsinfo = <div> 
        ORDERS <br></br> <div>----------------------------</div><br></br>
        <strong>ID , NAME , PRICE , CUSTOMERID , STATUSID</strong>
        </div>
} else if(state === STATUSES.CUS){
    columnsinfo = <div> 
        CUSTOMER <br></br> <div>----------------------------</div><br></br>
        <strong>ID , NAME , EMAIL , BIRTH , VIP</strong>
        </div>
} else if(state === STATUSES.STA){
    columnsinfo = <div> 
        STATUS <br></br> <div>----------------------------</div><br></br>
        <strong>ID , NAME</strong>
        </div>
} else if(state === STATUSES.PI){
    columnsinfo = <div> 
        PIZZA_INGREDIENTS <br></br> <div>----------------------------</div><br></br>
        <strong>PIZZAID , INGREDIENTSID</strong>
        </div>
} else if(state === STATUSES.OP){
    columnsinfo = <div> 
        ORDERS_PIZZA <br></br> <div>----------------------------</div><br></br>
        <strong>PIZZAID , ORDERID</strong>
        </div>
}



    return(<div>

        <button id='button' onClick={pizza}>Pizzas</button>
        <button id='button' onClick={ingredients}>Ingredients</button>
        <button id='button' onClick={customer}>Customer</button>
        <button id='button' onClick={orders}>Orders</button>
        <button id='button' onClick={status}>Status</button>
        <button id='button' onClick={pizzaingredients}>Pizza_Ingredients</button>
        <button id='button' onClick={orderspizza}>Orders_Pizza</button>

        <div>----------------------------</div>
        <div>----------------------------</div>

        {columnsinfo}

        <div>----------------------------</div>
        <div>----------------------------</div>
        {
            data.length>0 &&
            data.map((item,index)=>
            <div>
            <div key={index}> {' ' + item + ' '}</div>
            <div>----------------------------</div>
            </div>
            )

        }
        {datadisplay}

    </div>)
}

export default Pizza;