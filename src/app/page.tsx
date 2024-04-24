import { MainComponent } from "@/components/main/main";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  return (
    <>
      <div>
        <Link href="/dnd">
          <Button variant="link">Drag & Drop</Button>
        </Link>
        <Link href="/form">
          <Button variant="link">Hook Form</Button>
        </Link>
        <Link href="/virtual">
          <Button variant="link">Virtual</Button>
        </Link>
        <MainComponent {...searchParams} />
      </div>
    </>
  );
}
