import styles from "../styles/Home.module.css"
import Head from "next/head";
const About = () => {
    return (
        <>
            <Head>
                <title>Ibans | About</title>
            </Head>
            <div className={styles.container}> 
                <h1 className={styles.title}>About</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa culpa quasi eos, inventore ut, asperiores qui ea quam eaque neque atque? Mollitia, ullam laudantium vitae quia sit eaque dolore voluptas,
                </p>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo, odio vero corrupti itaque aspernatur officiis, ea harum quos et cum? Consequatur nisi aperiam dolor corrupti porro deserunt numquam repudiandae!
                </p>
            </div>
        </>
     );
}
 
export default About;