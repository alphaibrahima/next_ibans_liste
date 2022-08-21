import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";


const NotFound = () => {

    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        }, 3000)
    }, [])

    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <div className="not-found">
                <h1>Ooooooooops...</h1>
                <h2>Page non trouvé -:)</h2>
                <p>Retourner à la page d'accueil <Link href="/"><a>Accueil</a></Link></p>
            </div>
        </>
    );
}
 
export default NotFound;