import { Checkbox } from "../ui/checkbox"

export default function WeekDaysSelect() {
    return (
            <div className="flex gap-3">
                <div data-testid="Sunday" className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1.5">D</span></div>
                <div data-testid="Monday" className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1.5">S</span></div>
                <div data-testid="Tuesday" className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1.5">T</span></div>
                <div data-testid="Wednesday" className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1">Q</span></div>
                <div data-testid="Thursday" className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1">Q</span></div>
                <div data-testid="Friday" className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1.5">S</span></div>
                <div data-testid="Saturday" className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1.5">S</span></div>
            </div>
    )
}