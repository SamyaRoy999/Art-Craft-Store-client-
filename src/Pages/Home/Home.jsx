import Banner from "../../Components/Banner/Banner"
import CraftSection from "../../Components/CraftSection/CraftSection"
import NewExhibiztion from "../../Components/NewExhibiztion/NewExhibiztion"
import Ratting from "../../Components/Ratting/Ratting"


const Home = () => {
    return (
        <div className="  bg-[#FFF2E2]">
            <Banner/>
            <CraftSection/>
            <NewExhibiztion/>
            <Ratting/>
        </div>
    )
}

export default Home
