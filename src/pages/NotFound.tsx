import { useRouteError } from 'react-router-dom';

function NotFound() {
    const err = useRouteError();
    console.log(typeof err);
    return <div className='notfound'>
            <h1>Ooops!</h1>
            <p>Sorry, this page Not Found</p>
        </div>
}
export default NotFound