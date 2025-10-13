import { cn } from "@/lib/utils";

const TicketShape = ({ isHorizontal = false }: { isHorizontal?: boolean }) => {
    const dVertical = "M0,10 A10,10,0,0,1,10,0 H290 A10,10,0,0,1,300,10 V150 H0 Z M0,180 H300 V390 A10,10,0,0,1,290,400 H10 A10,10,0,0,1,0,390 Z";
    const dHorizontal = "M10,0 A10,10,0,0,0,0,10 V150 A10,10,0,0,0,10,160 H150 V0 Z M180,0 H350 A10,10,0,0,1,360,10 V150 A10,10,0,0,1,350,160 H180 Z";

    return (
        <div className="absolute inset-0 w-full h-full text-card">
            <svg
                width="100%"
                height="100%"
                viewBox={isHorizontal ? "0 0 360 160" : "0 0 300 400"}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className={cn("drop-shadow-lg")}
                preserveAspectRatio="none"
            >
                <path
                    d={isHorizontal ? dHorizontal : dVertical}
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                />
                 <line 
                    x1={isHorizontal ? "165" : "20"}
                    y1={isHorizontal ? "20" : "165"}
                    x2={isHorizontal ? "165" : "280"}
                    y2={isHorizontal ? "160" : "165"}
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>
    );
};

export default TicketShape;
