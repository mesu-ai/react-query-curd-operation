import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { deleteData, getData } from '../apis/crudAPIs';

const LandingPage = () => {
  const { data } = useQuery(['get-Data'], () => getData());
  const {mutateAsync}=useMutation(['delete-Data'],(data)=>deleteData(data));

  const handleDelete=async(id)=>{
    const response=await mutateAsync(id);
    console.log(response);
  }

  console.log(data);

  return (
    <div className='' style={{margin:'0 50px'}}>
      <h4>Data Table</h4>
      <hr />
      {data?.map((item) => (
        <div key={item?.id} style={{display:'flex',justifyContent:'start',gap:10,marginTop:'10px'}} className=''>
          <p>{item?.title}</p>
          <button type='button'>Update</button>
          <button onClick={()=>handleDelete(item?.id)} type='button'>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
