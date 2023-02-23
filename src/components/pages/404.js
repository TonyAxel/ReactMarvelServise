import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import ErrorMessage from "../errorMessage/errorMessage"

const Page404 = () => {

    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal page not Found"
                />
                <title>Page not Found 404</title>
            </Helmet>
            <ErrorMessage />
            <p style={{ textAlign: 'center', fontSize: '50px', marginTop: '30px' }} >Page not found</p>
            <Link style={{ display: 'block', textAlign: 'center', fontSize: '30px', marginTop: '30px', textDecoration: 'underline' }} to={'/'} >Back to main page</Link>
        </div>
    )
}

export default Page404;