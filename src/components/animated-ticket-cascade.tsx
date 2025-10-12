const AnimatedTicket = ({
  left,
  animationDelay,
  animationDuration,
}: {
  left: string;
  animationDelay: string;
  animationDuration: string;
}) => {
  return (
    <div
      className="animated-ticket"
      style={
        {
          left,
          animationDelay,
          animationDuration,
        } as React.CSSProperties
      }
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary/20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 9h16" />
        <path d="M4 15h16" />
        <path d="M9.5 9v6" />
        <path d="M14.5 9v6" />
        <path d="M2 12a2 2 0 0 0 2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" />
        <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 1 2-2" />
      </svg>
    </div>
  );
};

export default function AnimatedTicketCascade() {
  const ticketCount = 15;
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]">
      {Array.from({ length: ticketCount }).map((_, i) => (
        <AnimatedTicket
          key={i}
          left={`${Math.random() * 100}%`}
          animationDelay={`${Math.random() * 5}s`}
          animationDuration={`${5 + Math.random() * 5}s`}
        />
      ))}
    </div>
  );
}
