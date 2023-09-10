import Link from "next/link";
import "./main.css"

export default function Navigation(){
    return (<div>
        <ul className="navigation-main">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/login">Login</Link>
            </li>
            <li>
                <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link href="/course">Course</Link>
            </li>
        </ul>
    </div>)
}