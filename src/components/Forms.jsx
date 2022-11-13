export default function Forms({addNotes, setNotes, notes, setComment, handleSubmit, student, setName}){

return (<div>
                    <div className='center'><form onSubmit={handleSubmit}>
                        
                        <label htmlFor='name'>Name</label>
                        <span className='right'><input
                            id="name"
                            name="name"
                            type="text"
                            onChange={(event) => setName(event.target.value)}
                        /> </span><br></br>
                        <label htmlFor='comment'>Comment</label>
                        <span className='right'><input id="comment" name="comment"
                            type="text"
                            onChange={(event) => setComment(event.target.value)}
                        /></span><br></br>
                        <button type="submit">Submit</button>
                        </form>
                     </div>
                    <div>{notes(student)}</div>
                </div>)
}