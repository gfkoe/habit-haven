import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
export default function Header() {
  return (
    <header className="header-component flex items-center justify-between h-12">
      <div className="flex items-center">
        &nbsp;
        <h2 className="font-semibold">Welcome to Habit Haven!</h2>
        &nbsp; &nbsp;
        <ModeToggle />
      </div>{" "}
    </header>
  );
}
