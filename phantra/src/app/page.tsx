import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container">
        
        {/* Logo Image */}
        <div className="logo-area">
          <Image 
            src="/images/logo-icon.png" 
            alt="Phantra Logo" 
            width={150}
            height={150}
          />
        </div>

        {/* Text */}
        <h1>PHANTRA</h1>
        <p className="subtitle">The prosthetic for your imagination.</p>

        {/* Button */}
        <Link href="/create" className="btn-primary">
          Open Your Mind →
        </Link>
        
      </div>
    </main>
  );
}