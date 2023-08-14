import { Menu } from "./Menu"
import { _Home } from "./-Home"
import { _HomeFooter } from "./-HomeFooter"
import { _About } from "./-About"
import { _Listining } from "./Listining"
import { _AourService } from "./-AourService"
import { _Service } from "./-Service"
import { _OurTeam } from "./-OurTeam"
import { _Blogs } from "./-Blogs"
import { _Testimonials } from "./-TESTIMONIALS"
import { _Agent } from "./-Agent"
import { _Contacts } from "./-Contacts"

export const Home = () => {
    return (
        <div>
            <Menu />
            <_Home />
            <_HomeFooter />
            <_About />
            <_Listining />
            <_AourService />
            <_Service />
            <_OurTeam />
            <_Blogs />
            <_Testimonials />
            <_Agent />
            <_Contacts />
        </div>
    )
}