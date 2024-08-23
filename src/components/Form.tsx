
const Form = () => {
    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        console.log('Submited')
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* {referencing the function here not calling it} */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id='name' type="text" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input id='age' type="number" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form