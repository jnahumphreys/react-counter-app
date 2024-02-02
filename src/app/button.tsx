import React, { memo, useMemo } from "react";
import { clsx } from "clsx";

/* TO DO: 
- Look into why button text is off-centre on Y-Axis
- Set webkitApperance: none
*/

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const Button = memo(function Button({ className, ...rest }: ButtonProps) {
  const classNames = useMemo(
    () =>
      clsx(
        "m-1 flex-auto rounded border-none bg-[#1b6bce] px-3 py-2 text-xl uppercase leading-[normal] text-white transition-opacity duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-25 ",
        className,
      ),
    [className],
  );

  return <button {...rest} className={classNames} />;
});

export { Button };
