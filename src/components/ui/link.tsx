import { cn } from "@/lib/utils";
import { Link as RRDLink } from "react-router-dom";

type LinkProps = React.ComponentPropsWithRef<typeof RRDLink> & {
  disableAnimation?: boolean;
};

const Link = ({
  className,
  children,
  disableAnimation,
  ...props
}: LinkProps) => {
  return (
    <RRDLink
      {...props}
      className={cn(
        "font-medium underline underline-offset-2 hover:text-foreground duration-300 underline-fade-in",
        className
      )}
    >
      {children}
    </RRDLink>
  );
};

export default Link;
