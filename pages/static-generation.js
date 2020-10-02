import Layout from '../components/layout'

const StaticPage = () => {
    return (<>
        <Layout>
            <div className="desctiption-container">
            <h1>This is static page.</h1>
            <p>Random paragraph</p>
            </div>
        </Layout>
        <style jsx>
            {`
                .desctiption-container {
                    text-align: center,
                }
            `}
        </style>
        </>
    )
  }

  export default StaticPage;