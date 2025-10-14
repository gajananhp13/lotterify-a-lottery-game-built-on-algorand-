import { Twitter, Github, Disc, Ticket } from "lucide-react";
import Link from 'next/link';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors">
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Ticket className="h-7 w-7 text-primary" />
              <span className="text-xl font-headline font-bold">Lotterify</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              The fair, transparent, and decentralized lottery experience built on the Algorand blockchain.
            </p>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/my-tickets">My Tickets</FooterLink></li>
              <li><FooterLink href="/marketplace">Marketplace</FooterLink></li>
              <li><FooterLink href="/results">Past Results</FooterLink></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
                <li><FooterLink href="#">Terms of Service</FooterLink></li>
                <li><FooterLink href="#">Privacy Policy</FooterLink></li>
                <li>
                     <div className="flex items-center space-x-4 mt-4">
                        <Link href="#" aria-label="Twitter">
                            <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                        </Link>
                        <Link href="#" aria-label="GitHub">
                            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                        </Link>
                        <Link href="#" aria-label="Discord">
                            <Disc className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                        </Link>
                    </div>
                </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Lotterify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
