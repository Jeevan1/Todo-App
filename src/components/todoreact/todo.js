import React,{useState, useEffect} from 'react';
import "./style.css";

//get the local storage data bachk
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");

    if(lists){
        return JSON.parse(lists);
    }else {
        return ([]);
    }
}

const Todo = () => {
   const [inputData,setInputData] = useState("");
   const [items, setItems] = useState(getLocalData());
   const [isEditItem,setIsEditItem] = useState("");
   const [toggleButton, setToggleButton] = useState(false);

//    add items function 
    const addItem = () => {
        if(!inputData) {
            alert("plz fill the data..");
        }else if(inputData && toggleButton){
            setItems(
                items.map((curElem) =>{
                    if(curElem.id === isEditItem){
                        return{...curElem, name: inputData}
                    }
                    return curElem;
                })
            );
            setInputData("");
        setIsEditItem(null);
        setToggleButton(false);
        }
        else{
            const newItemData  = {
                id:new Date().getTime().toString(),
                name: inputData,
            }
            setItems([...items, newItemData]);
            setInputData("");
        }
    }
    //edit yhe items
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id ===index;
        });
        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);
    }
    

    //delete item
    const deleteItem = (index) => {
        const updatedItem = items.filter((curElem) =>{
            return curElem.id !==index;
        });
        setItems(updatedItem);
    }
    //remove all
    const removeall =()=>{
        setItems([]);
    }

    //adding local storage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.webp" alt="todologo" />
                        <figcaption>Add Your List Here ✍️</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='Add Item' className='form-control' value={inputData} onChange={(event)=> setInputData(event.target.value)}/>
                        {toggleButton ? (<i class="fas fa-edit add-btn" onClick={addItem}></i>) : (<i class="fas fa-plus add-btn" onClick={addItem}></i>)}
                        
                    </div>
                    {/* show all  */}
                    <div className="showItems">
                        {
                            items.map((curElem, index) => {
                                return (
                                    <div className="eachItem" key={index}>
                            <h3>{curElem.name}</h3>
                            <div className="todo-btn">
                            <i class="fas fa-edit add-btn" onClick={()=>{
                                editItem(curElem.id);
                            }}></i>
                            <i class="fas fa-trash-alt add-btn" onClick={() => deleteItem(curElem.id)}></i>
                            </div>
                        </div>
                                )
                            })
                        }
                    </div>

                    {/* remove all  */}
                    <div className="showItems">
                        <button className="btn" data-sm-link-text="Remove All" onClick={removeall}>Check List</button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Todo;