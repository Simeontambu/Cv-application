import Titlesection from "./titleSection";
import Entryfield from "./entryField";
export default function Formation(){
    return(
        <>
        <Titlesection  name="Formation"/>
        <Entryfield placeholder="School name"/>
        <Entryfield placeholder="Title of study"/>
        <Entryfield placeholder="Date of study"/>
        </>
    )
}