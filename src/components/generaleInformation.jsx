import Titlesection from "./titleSection";
import Entryfield from "./entryField";
export default function GeneraleInformation(){
    return(
        <>
        <Titlesection name="General Information"/>
        <div>
        <Entryfield placeholder="Name"/>
        <Entryfield type="email" placeholder="Email"/>
        <Entryfield type="tel" placeholder="Number"/>
        </div>
       

        </>
    )
}