import React from 'react'
import "./style.css"
import { Card } from 'primereact/card';

const GameResult = () => {
  const header = (
    <img alt="Card" src={require('./map.jpg')} />
);
  return (
    <div className='w-full __imgA flex justify-content-center align-items-center'>
         <div className="card  absolute ">
            <Card title="congratulations!"  header={header} className="w-35 m-auto">
                <p className="m-0">
                    You got the Way to your tresure
                </p>
            </Card>
        </div>
    </div>
  )
}

export default GameResult

