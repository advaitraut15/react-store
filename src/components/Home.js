
import Products from './Products';
import Options from './Options';
import classes from './Home.module.css'


const Home = () => {
    
    return (
        <div className={classes.home}>
            <Options/>
            <Products/>
            
        </div>
    )
}

export default Home