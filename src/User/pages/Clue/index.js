import React, { useEffect, useState } from 'react'
import { clueData } from './ClueData'
import { useForm, Controller } from "react-hook-form";

import { InputText } from 'primereact/inputtext';
        
import "./style.css"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils'
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';

    
        
   
const Clue = () => {
  const navigate = useNavigate()
const numarray=['First Clue','Second clue','Third clue','Fourth Clue','Fifth Clue']
 const [clueText,setClueText] =  useState(null)
 const [clue,setClue] =  useState(null)
 const [clues,setClues] =  useState([])
 const [clueNum,setClueNum] =  useState(0)
 const [truevisible, settrueVisible] = useState(false);
 const [falsevisible,setfalseVisible]=useState(false);
 const [gameovervisible,setgameoverVisible]=useState(false);
 const [wrongAnsCount,setWrongAnsCount]=useState(1);
 const [deadpoints,setDeadpoints]=useState(0);


  useEffect(()=>{
    let result = clueData.slice(0, 5).map(function () { 
        return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, clueData.slice());

    console.log(result);
    setClues(result)

    //setClue(result[clueNum])
    console.log(clue)
  },[])

  const { control, handleSubmit, formState: { errors },reset } = useForm({
    defaultValues: {
      ans: '',  
    }
  });

  const onSubmit = (e)=>{
    console.log(e)

    console.log(control)
    
    if(clue.ans.trim().toLowerCase()==e.ans.trim().toLowerCase()){
      setClueText(numarray[clueNum])
      console.log('true')
      settrueVisible(true)
    }
    else{
      console.log('false')
      setfalseVisible(true)
      setWrongAnsCount(wrongAnsCount+1)
      if (wrongAnsCount%3==0) {
        setDeadpoints(deadpoints+1)
      }
        
    }
    reset()
  }

  useEffect(()=>{
    console.log(wrongAnsCount,deadpoints)
    if(deadpoints==2){
      setgameoverVisible(true)
    }
  },[wrongAnsCount])

  useEffect(()=>{
    setClue(clues[clueNum])
    setClueText(numarray[clueNum])
    settrueVisible(false)  
    setWrongAnsCount(1)
    console.log(clues,clue,clueNum)
    if (clueNum==5) {
      navigate('/gameResult')
    }
  },[clueNum,clues])

  const nextClue = ()=>{
    setClueNum(clueNum+1) 
  }

  return (
    <>
        <Dialog header="congratulations!.." visible={truevisible} style={{ width: '50vw' }} onHide={() => settrueVisible(false)}>
                <p className="m-0">
                   You solved your {clueText}, to reach the destination let's solve the next clue
                </p>
                <div className='flex justify-content-center mt-5'>
                      <Button onClick={nextClue}  label="Next Clue" severity="warning" />
                </div>

        </Dialog>
        <Dialog header="Ooops!" visible={falsevisible} style={{ width: '50vw' }} onHide={() => setfalseVisible(false)}>
                <p className="m-0">
                    Ooops! wrong answer. Try again!
                </p>
        </Dialog>
        <Dialog header="Ooops! you didn't reach your destination" visible={gameovervisible} style={{ width: '50vw' }} onHide={() => setgameoverVisible(false)}>
                <p className="m-0">
                    Game Over!
                </p>
        </Dialog>
        <div className='w-full m-auto __img'>
            <div className='__imgDark w-full ' ></div>
            <div className='mt-0 __index w-full  flex flex-column justify-content-center align-items-center'>
              <h1 className='__fontSize'>{clueText}</h1>
            </div>
              <div className='absolute __top w-full flex flex-column justify-content-center align-items-center'>
              <Card className='w-10 flex justify-content-center'>
                    <p className="m-0">
                      {clue && clue.que}
                    </p>

                    <div className='w-full flex  justify-content-center mt-5'>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full  flex  justify-content-center'>
                        <Controller
                          name='ans'
                          control={control}
                          rules={{ required: 'ans is required.' }}
                          render={({ field, fieldState }) => (
                            <InputText
                              id={field.name}                       
                              className={classNames({ 'p-invalid': fieldState.invalid })}
                              placeholder='Enter your ans'
                              {...field}
                            />
                          )}
                        />
                        {errors.ans && <div>*Please Enter Your Answer.</div>}
                        </div>

                        <div className='flex justify-content-center mt-5'>
                          <Button className=' ' type='submit'  label="Submit" severity="warning" />
                        </div>

                        </form>
              </div>   
              </Card>
              </div> 
          
        </div>
  
    </>
  )
}

export default Clue
