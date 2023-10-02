import { ModeToggle } from "./ModeToggle";

export default function Header(){
    return (
        <div className="flex h-6 mt-4 w-screen pl-4 pr-4 justify-between absolute z-10">
            <h1 className="leading-7">IROUTINE</h1>
            <ModeToggle/>
        </div>
    )
}