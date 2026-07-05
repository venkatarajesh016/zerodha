import Hero from "./Hero";
import Award from "./Award";
import Education from "./Education";
import Stats from "./Stats";
import Header from "../Header";
import CreateAcc from "../CreateAcc";
import Footer from "../Footer";
export default function Homepage() {
    return (
        <>
        <Hero />
        <Award />
        <Stats />
        <Education />
        <CreateAcc />
        </>
    );
}