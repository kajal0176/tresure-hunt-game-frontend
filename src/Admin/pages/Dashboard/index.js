import React, { useState } from 'react'


import { Accordion, AccordionTab } from 'primereact/accordion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRegisteredUser, getUserInfo } from '../../../reducer/user.slice';

import { SelectButton } from 'primereact/selectbutton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column'; 
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

    useEffect(()=>{
        if (user.role != 'admin') {
          navigate('/gameIntro')
        }
    },[])

    const navigate = useNavigate();
    const dispatch =  useDispatch();
    const {userInfo,registeredUser} = useSelector(state => state.user);
    const {user} = useSelector(state => state.auth);
    const options = [ 'User Game Info','Registerded User'];
    const [value, setValue] = useState(options[0]);
    const registeredUserColumns = [
        {field: '_id', header: 'ID'},
        {field: 'email', header: 'Email'},     
    ];



    const userInfoColumns = [
        {field: 'clue', header: 'Clue'},
        {field: 'time', header: 'Completion Time'},
        {field: 'wrongAnsCount', header: 'Wrong Ans Count'}, 
        
    ];
  
    useEffect(()=>{
        dispatch(getRegisteredUser())
        .unwrap()
        .then((res)=>{
           //console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })

        dispatch(getUserInfo())
        .unwrap()
        .then((res)=>{
           //console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])


    const registerdUserTable = ()=>{
        return (
            <div className="card mt-8">
                <DataTable value={registeredUser} tableStyle={{ minWidth: '50rem' }}>
                    {registeredUserColumns.map((col, i) => (
                        <Column key={col.field} field={col.field} header={col.header} />
                    ))}
                </DataTable>
            </div>
        );
    }

    

    const userInfoTable = ()=>{
        return (
        
            <Accordion activeIndex={0}>
                { userInfo && userInfo.map((_userInfo)=>{
                     return <AccordionTab className='mt-5' key={_userInfo.email} header={_userInfo.email}>
                        <div className='flex justify-content-between '>
                              <div><h3 className=''>Total Time : {_userInfo.userInfo.avgTime}</h3></div>
                              <div><h3 className=''>Dead Counts : {_userInfo.userInfo.deadCounts}</h3></div>
                              <div><h3 className=''>Soft Skills : {_userInfo.userInfo.softSkills}</h3></div>
                              <div><h3 className=''>Accuracy : {_userInfo.userInfo.acc}</h3></div>
                    
                        </div>    
                        <div className="card mt-5">
                            <DataTable value={_userInfo.userClueInfo} tableStyle={{ minWidth: '50rem' }}>
                                {userInfoColumns.map((col, i) => (
                                    <Column key={col.field} field={col.field} header={col.header} />
                                ))}
                            </DataTable>
                        </div>
    
                           </AccordionTab>
                })

                }
            </Accordion>
        
          
        );
    }


  return (
    <div className='w-11 m-auto  '>

        <div className="card mt-6">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        </div>

         {
            value === 'User Game Info' ? userInfoTable() :<></>
         }
          {
            value === 'Registerded User' ? registerdUserTable() :<></>
         }
           
    </div>
  )
}

export default Dashboard
