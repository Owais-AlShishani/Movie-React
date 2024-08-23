import { useState } from "react"

const Form = () => {
    const [person, setPerson] = useState({
        name: "",
        age: ""
    })

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        console.log(person)
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* {referencing the function here not calling it like this ()} */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input value={person.name} onChange={(event) => setPerson({ ...person, name: event.target.value })} id='name' type="text" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input value={person.age} onChange={(event) => setPerson({ ...person, age: parseInt(event.target.value) })} id='age' type="number" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form