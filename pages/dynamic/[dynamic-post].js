import Layout from '../../components/layout'

const DynamicPost = ({data}) => {
  return <Layout>
         {data && (<><p>Task: {data.title}</p>
               <p>Task number: {data.id}</p></>)}
         </Layout>
}

 // This gets called on every request
 export async function getServerSideProps(query) {
  const id = query.params['dynamic-post'];
  console.log('id: ', id);
   
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default DynamicPost