import Image from "next/image";
import Link from "next/link";
import { baseUrl } from "../url";
import Search from "../../components/Search";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center">
      {children}
      <Search/>
    </main>
    
  );
}
