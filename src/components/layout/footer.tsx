import { Twitter, Github, Disc, Ticket } from "lucide-react";
import Link from 'next/link';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Ticket className="h-7 w-7 text-primary" />
              <span className="text-xl font-headline font-bold">Lotterify</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              The fair, transparent, and decentralized lottery experience built on the Algorand blockchain.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-headline font-semibold mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/dashboard">Dashboard</FooterLink></li>
              <li><FooterLink href="/my-tickets">My Tickets</FooterLink></li>
              <li><FooterLink href="/marketplace">Marketplace</FooterLink></li>
              <li><FooterLink href="/results">Past Results</FooterLink></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-headline font-semibold mb-4 tracking-wide">Resources</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#">How It Works</FooterLink></li>
              <li><FooterLink href="#">About Algorand</FooterLink></li>
              <li><FooterLink href="#">Security</FooterLink></li>
              <li><FooterLink href="#">FAQs</FooterLink></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-headline font-semibold mb-4 tracking-wide">Community</h3>
             <ul className="space-y-3">
              <li><FooterLink href="#">Github</FooterLink></li>
              <li><FooterLink href="#">Discord</FooterLink></li>
              <li><FooterLink href="#">Twitter</FooterLink></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-headline font-semibold mb-4 tracking-wide">Legal</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#">Terms of Service</FooterLink></li>
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between">
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
