import Banner from "../../Components/Banner/Banner"
import CraftSection from "../../Components/CraftSection/CraftSection"
import NewExhibiztion from "../../Components/NewExhibiztion/NewExhibiztion"
import Ratting from "../../Components/Ratting/Ratting"


const Home = () => {
    return (
        <div className="  bg-[#FFF2E2]">
            <Banner />
            <div className="bg-gray-100">
                <CraftSection />
            </div>
            <NewExhibiztion />
            <Ratting />
        </div>
    )
}

export default Home
