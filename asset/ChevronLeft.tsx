type SVGProps = { color?: string; width?: string; height?: string };

export default function ChevronLeft({ color, width, height }: SVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6459 0.979376C13.4531 0.786244 13.2242 0.63302 12.9722 0.528475C12.7202 0.42393 12.45 0.370117 12.1771 0.370117C11.9043 0.370117 11.6341 0.42393 11.3821 0.528475C11.1301 0.63302 10.9011 0.786244 10.7084 0.979376L1.14588 10.5419C0.952747 10.7346 0.799523 10.9635 0.694979 11.2156C0.590434 11.4676 0.536621 11.7378 0.536621 12.0106C0.536621 12.2835 0.590434 12.5536 0.694979 12.8057C0.799523 13.0577 0.952747 13.2866 1.14588 13.4794L10.7084 23.0419C10.9013 23.2348 11.1302 23.3878 11.3822 23.4921C11.6343 23.5965 11.9044 23.6503 12.1771 23.6503C12.4499 23.6503 12.72 23.5965 12.972 23.4921C13.224 23.3878 13.453 23.2348 13.6459 23.0419C13.8388 22.849 13.9918 22.62 14.0961 22.368C14.2005 22.116 14.2543 21.8459 14.2543 21.5731C14.2543 21.3004 14.2005 21.0303 14.0961 20.7782C13.9918 20.5262 13.8388 20.2973 13.6459 20.1044L5.56255 12.0002L13.6459 3.91688C14.4584 3.10438 14.4375 1.77104 13.6459 0.979376Z"
        fill={color}
      />
    </svg>
  );
}