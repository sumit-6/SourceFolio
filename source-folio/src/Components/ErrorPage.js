import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();
    return (
    <>
        <div style={{backgroundColor: '#18162d',
			fontFamily: 'Arial, sans-serif', 
			textAlign: 'center',
			margin: '0',
			padding: '0'}}>
        <h1 style={{color: '#fff',
			fontSize: '3rem',
			marginTop: '5rem'}}>Error 404 - Page Not Found</h1>
        <p style={{color: '#fff',
			fontSize: '1.2rem',
			marginTop: '2rem'}}>We're sorry, but the page you're looking for doesn't seem to exist on our website. Please check the URL and try again. If you're still having trouble finding what you're looking for, please contact our support team at support@portfoliomaker.com.</p>
        <button onClick={() => {navigate('/')}} className='error__button'>Return to Homepage</button>
        </div>
    </>
    );
}

export default ErrorPage;