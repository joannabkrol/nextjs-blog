import Layout from '../components/layout'
import Link from 'next/link'

function Page({ data }) {
    // Render data...
    return (<>
        <Layout>
            {data.slice(0, 5).map((item, index) => {
             return <div className="todo" key={index}>
                      <Link 
                      href="/dynamic/[dynamic-post]"
                      as={`/dynamic/${item.id}`} 
                      >
                        <a>
                        <h3 className="title">Task: {item.title}</h3>
                            
                        </a>
                      </Link>
                      <p>Task number: {item.id}</p>
                </div>
         })}
        </Layout>
        <style jsx>
          {`
            .todo {
              display: flex;
              justify-content: space-between;
            }
            .title {
              width: 70%;
            }
          `}
        </style>
        </>
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

export default Page