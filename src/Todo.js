import React, { useState } from 'react'

const Todo = () => {
    const [inputData,setInputData] = useState(''); 
    const [items,setItems] = useState ([]);

const addItems = () => {
    if(!inputData){
        alert('sorry')

    }else{
        setItems([...items,inputData]);
    setInputData('')

    }
}
const deleteItem = (id) => {
   
    const updateditems = items.filter((elem,ind) => {
        return ind !== id ;
    });
    setItems(updateditems);

}

const removeall = () => {
    setItems([]);
}


    return (
        <>
        <div className="body">
            <div className="main">
                <h1>React Todo App</h1>
                <div className="userinput">
                    <input type="text" name="" id="" placeholder='' value={inputData} 
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <i class="fa fa-plus" aria-hidden="true" onClick={addItems}></i>
                </div>
                <div className="showitem">
{
    items.map((elem,ind)=>{
        return ( <div className="mainshow" key={ind}>

        <p>{elem}</p>
                <i className="fa fa-trash" aria-hidden="true" onClick={()=>deleteItem (ind)}></i>
        </div>
        )
    })
}



                
</div>
<button type='button' className='clearbtn' onClick={removeall} > All Clear</button>

            </div>
            </div>

        </>
    )
}

export default Todo
