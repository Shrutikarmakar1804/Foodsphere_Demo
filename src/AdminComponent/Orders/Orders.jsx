import { Card, FormControl, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import React, { useState } from 'react'
import OrderTable from './OrderTable';

const orderStatus=[
  {FormControlLabel:"Pending",value:"PENDING"},
  {FormControlLabel:"Completed",value:"COMPLETED"},
  {FormControlLabel:"All",value:"ALL"}

]
export const Orders = () => {
  const [filterValue,setFilterValue]=useState();

  const handleFilter=(e,value)=>{
setFilterValue(value)
  }

  return (
    <div className='px-2'>
      <Card className='p-5'>
<Typography sx={{paddingBottom:"1rem"}} variant='h5'>
  Order Status
  
</Typography>
<FormControl>
  <RadioGroup onChange={handleFilter} row name='category' value={filterValue || "all"}>

    {orderStatus?.map((item)=>
    <FormControlLabel
      key={item.value}
      value={item.value}
      control={<Radio />}
      label ={item.FormControlLabel}
      // sx={{color:"gray"}}


    />)}
  </RadioGroup>
</FormControl>        

        </Card>
<OrderTable />
    </div>
  )
}
