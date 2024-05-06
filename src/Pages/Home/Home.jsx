import Banner from "../../Components/Banner/Banner"
import CraftSection from "../../Components/CraftSection/CraftSection"
import NewExhibiztion from "../../Components/NewExhibiztion/NewExhibiztion"
import Ratting from "../../Components/Ratting/Ratting"
import Subarts from "../../Components/subArt/Subarts"


const Home = () => {
    return (
        <div className="">
            <Banner />
            <div className="">
                <CraftSection />
            </div>
            <Subarts/>
            <NewExhibiztion />
            <Ratting />
        </div>
    )
}

export default Home
