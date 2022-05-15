import { Fragment } from "react";
import FeaturePosts from "../components/feature-posts/feature-posts";
import Hero from "../components/hero/hero";

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturePosts />
        </Fragment>
    );
}

export default HomePage;
