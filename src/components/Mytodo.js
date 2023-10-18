import React,{useState} from "react";



const Mytodo=()=>{
    const[data,setData] = useState("")
    const[listData,updateListData] =useState([])


    const onChangeHandler=(e)=>{

        console.log(e.target.value)
        setData(e.target.value)
    }
    
    const addDataToList=()=>{

        updateListData([...listData,{item:data,key:Date.now()}])
        console.log(listData)
        setData("")
    }
    console.log(listData)
    const deleteAllFn=()=>{

        updateListData([""])

    }
    const clickToEdit=()=>{

    }
    const deleteFn =(key)=>{
         const updatedItem = listData.filter((id)=> {
             return id.key !== key ;
           })
            
              console.log(updatedItem)
              updateListData(updatedItem)
    }

    return(
        <div>
            <input type="text"  value={data} onChange={onChangeHandler} placeholder="Enter your Todo"/>
            <button onClick={addDataToList}>Add</button>
            <div>
                 
                {
                    listData.map((elelment,ind)=> <h5 key={ind} >{elelment.item}
                    {<button onClick={()=>clickToEdit(elelment.key)}>EDIT</button>}
                    {<button onClick={()=>deleteFn(elelment.key)}>Del</button>}</h5> )
                  
                }
                
            </div>
            <div>
            <button onClick={deleteAllFn}>Delete All</button>
            </div>
           
        </div>
        
    )
}
export default Mytodo;