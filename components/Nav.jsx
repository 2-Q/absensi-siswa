
import NavItem from "./NavItem"


export default function Nav(){
    return (<>
        <ul className="flex justify-center space-x">
            <NavItem>Profile</NavItem>
            <NavItem>Skill</NavItem>
            <NavItem>Project</NavItem>
            <NavItem>Contact</NavItem>
        </ul>
    </>)
}