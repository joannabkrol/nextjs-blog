import Layout from '../components/layout'
//import {useState, useEffect} from 'react';

function Page({ data }) {
    // Render data...
    return (
        <Layout>
            {data.slice(0, 5).map(todo => {
             return <>
             <p>Task: {todo.title}</p>
                 <p>Task number: {todo.id}</p>
     </>
         })}
        </Layout>
    )
  }
  
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

  // fetch data without server side rendering 
// export default function Page () {
//     const [todos, setTodos] = useState(null)
//     // fetch data
//     useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/todos/')
//         .then(res => res.json())
//         .then(data => setTodos(data))
//     }, [])
//     // global loading state
//     if (!todos) return <p>Loading...</p>
//     return <Layout>
//         {todos.slice(0, 5).map(todo => {
//             return <>
//             <p>Task: {todo.title}</p>
//                 <p>Task number: {todo.id}</p>
//     </>
//         })}
      
//     </Layout>
//   }

export default Page