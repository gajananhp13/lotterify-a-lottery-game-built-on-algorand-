import { Twitter, Github, Disc, Ticket } from "lucide-react";
import Link from 'next/link';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Ticket className="h-7 w-7 text-primary" />
              <span className="text-xl font-headline font-bold">Lotterify</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              The fair, transparent, and decentralized lottery experience built on the Algorand blockchain.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-headline font-semibold mb-4 tracking-wide text-foreground">App</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/dashboard">Dashboard</FooterLink></li>
              <li><FooterLink href="/my-tickets">My Tickets</FooterLink></li>
              <li><FooterLink href="/marketplace">Marketplace</FooterLink></li>
               <li><FooterLink href="/games">Games</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-headline font-semibold mb-4 tracking-wide text-foreground">Info</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/results">Past Results</FooterLink></li>
              <li><FooterLink href="#">How It Works</FooterLink></li>
              <li><FooterLink href="#">Security</FooterLink></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-headline font-semibold mb-4 tracking-wide text-foreground">Community</h3>
             <ul className="space-y-3">
              <li><FooterLink href="#">Github</FooterLink></li>
              <li><FooterLink href="#">Discord</FooterLink></li>
              <li><FooterLink href="#">Twitter</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-headline font-semibold mb-4 tracking-wide text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#">Terms of Service</FooterLink></li>
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Lotterify. A Decentralized Application on Algorand.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Discord" className="text-muted-foreground hover:text-primary transition-colors">
                  <Disc className="h-5 w-5" />
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
