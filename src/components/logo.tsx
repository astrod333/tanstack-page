import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
	return (
		<img
			src="/src/assets/CS_Triangle_5.png"
			alt="OrcDev Logo"
			className={cn("size-10", className)}
		/>
	);
};
