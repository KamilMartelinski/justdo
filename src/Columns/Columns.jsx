import "./Module.Columns.css"
import { useState } from "react";
import Rows from "../Rows/Rows";

function Columns() {

    const [toDoList, setToDoList] = useState([{

        columnName: "planed", 
        rows: [{
                  name: "make XYZ",
                  description: "will be made with XYZ",
                  deadline: "06.09.2069", 
                },{
                   name: "make smelting stack",
                   description: "use steel furnaces",
                   deadline: "06.09.2137",
               },
        ]},

       {
        columnName: "in work",
        rows: [{
                   name: "make something",
                   description: "use something to make it",
                   deadline: "02.10.6969"
               },
       ]},

        {
        columnName: "done",
        rows: [{
                   name: "idk",
                   description: "something stupid",
                   deadline: "69.69.2000",            
               },
       ]},
]);

    return(
        <div>
            <button className="add_button">+</button>

            {toDoList.map((element, index) =>
                <div key={index} >
                    <div key={"column" + index}>
                        {element.columnName}
                    </div>
                    {element.rows.map((element, index) => 
                        <Rows row={element} index={index}/>
                    )}
                </div>
            )}
        </div>        
    )
}

export default Columns