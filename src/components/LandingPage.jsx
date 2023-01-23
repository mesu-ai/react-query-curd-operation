import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addData, deleteData, getData, updateData } from '../apis/crudAPIs';

const LandingPage = () => {
  // const [postData, setPostData] = useState([]);
  const queryClient = useQueryClient();
  const { data } = useQuery(['get-data'], () => getData());
  const { mutateAsync:deleteAsyncDate } = useMutation(['delete-data'], (data) => deleteData(data),
    // {
    //   onSuccess: () => queryClient.invalidateQueries(['get-Data']),
    // }
  );

  const {mutateAsync:updateAsyncData}=useMutation(['update-data'],(data)=>updateData(data))
  const {mutateAsync:addAsyncData}=useMutation(['add-data'],(data)=>addData(data))

  const handleDelete = async (id) => {
    // setPostData(postData.filter((item) => item.id !== id));
    const response = await deleteAsyncDate(id);
    console.log(response);
  };

  const handleUpdate = async(id)=>{
    const updateData={
      id: id,
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    
    const response=await updateAsyncData(updateData);
    console.log(response)

  }

  const handleAdd= async()=>{
    const addData={

      title: 'foo',
      body: 'bar',
      userId: 1
    }
    const response=await addAsyncData(addData);
    console.log(response);
  }

  // useEffect(() => {
  //   setPostData(data);
  // }, [data]);

  return (
    <div
      className=''
      style={{ margin: '0 50px' }}
    >
      <h4>Data Table</h4>

      <hr />
      <button onClick={()=>handleAdd()} type='button'>Add New</button>
      {data?.map((item) => (
        <div
          key={item?.id}
          style={{
            display: 'flex',
            justifyContent: 'start',
            gap: 10,
            marginTop: '10px',
          }}
          className=''
        >
          <p>{item?.title}</p>
          <button onClick={()=>handleUpdate(item?.id)} type='button'>Update</button>
          <button
            onClick={() => handleDelete(item?.id)}
            type='button'
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
