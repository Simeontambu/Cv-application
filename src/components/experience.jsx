import Titlesection from "./titleSection";
import Entryfield from "./entryField";
export default function Experience(){
    return(
        <>
        <Titlesection name="Experience"/>
        <Entryfield placeholder="Company name" />
        <Entryfield placeholder="Position title"/>
        <Entryfield placeholder="Responsibilities"/>
        </>
    )
}