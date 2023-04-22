import React, { useState } from 'react'


import { Accordion, AccordionTab } from 'primereact/accordion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRegisteredUser, getUserInfo } from '../../../reducer/user.slice';

import { SelectButton } from 'primereact/selectbutton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column'; 


            
const Dashboard = () => {

    const dispatch =  useDispatch();
    const {userInfo,registeredUser} = useSelector(state => state.user);
    const options = [ 'User Game Info','Registerded User'];
    const [value, setValue] = useState(options[0]);
    const registeredUserColumns = [
        {field: '_id', header: 'ID'},
        {field: 'email', header: 'Email'},     
    ];

    const userInfoColumns = [
        {field: 'email', header: 'Email'},
        {field: 'deadCounts', header: 'Total deadpoints'},
        {field: 'avgTime', header: 'Average Time'}, 
        {field: 'acc', header: 'accuracy'},    
        {field: 'softSkills', header: 'soft Skills'},  
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
            <div className="card mt-8">
                <DataTable value={userInfo} tableStyle={{ minWidth: '50rem' }}>
                    {userInfoColumns.map((col, i) => (
                        <Column key={col.field} field={col.field} header={col.header} />
                    ))}
                </DataTable>
            </div>
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
