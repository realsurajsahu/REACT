import React from 'react'

const App = () => {
  const submit = (e) => {
e.preventDefault()
console.log('Submitted');
    }

  return (
    <div>
      <form onSubmit={(e)=>{submit(e)}}>
        <input type="text" placeholder='name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
