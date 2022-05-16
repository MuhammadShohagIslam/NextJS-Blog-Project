import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/PP.jpg"
                    alt="An image showing muhammad shohag islam"
                    width={300}
                    height={300}
                />
            </div>
            <h1>{`I'm Muhammad Jhohirul Islam Shohag`}</h1>
            <p>My blog about Web Developent and Hosting and Teaching</p>
        </section>
    );
}

export default Hero;
