import Link from 'next/link';
import styles from '../../styles/Ibans.module.css'

export const getStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {users: data}
    }
}


const Ibans = ({ users }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>All Ibans</h1>
            {
                users.map(user=> (
                    <Link href={'/ibans/'+user.id} key={user.id}>
                        <a className={styles.single}>
                            <h3>{ user.name }</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    );
}
 
export default Ibans;