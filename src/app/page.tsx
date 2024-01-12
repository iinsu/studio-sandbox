import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href="/dnd">
          <Button variant="link">Drag & Drop</Button>
        </Link>
      </div>
    </>
  );
}
