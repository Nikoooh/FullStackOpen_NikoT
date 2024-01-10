import React from 'react'

const AddNumbers = ({newName, newNumber, handleChange, handleForm}) => {

    return (
        <div>
            <form onSubmit={handleForm}>
                <h2>Add a new entry</h2>
                <div name="inputName">
                    name: <input name='nameInput' value={newName} onChange={handleChange}/>
                    <br/><br/>
                    number: <input name="numberInput" value={newNumber} onChange={handleChange}/>      
                </div>
                <br/>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
      </div>
    )
}

export default AddNumbers