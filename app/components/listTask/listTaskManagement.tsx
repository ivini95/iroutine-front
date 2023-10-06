import Link from "next/link";
import { Button } from "../ui/button";

export default function ListTaskManagement() {
  return (
    <div>
      <p>Description task</p>
      <Link href={'editTask'}><Button data-testid='editTask'></Button></Link>
    </div>
  );
}