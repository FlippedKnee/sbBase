import { useRouter } from "next/dist/client/router";
import Link from "next/link";

type NextLinkProps = {
  children?: JSX.Element | JSX.Element[] | string;
  href?: string;
  target?: "_self" | "_blank";
  locale?: string;
  scroll?: boolean;
};

export default function NextLink({
  children,
  href,
  locale,
  scroll,
  target,
}: NextLinkProps) {
  const router = useRouter();
  const link = typeof href === "string" ? href.replace(/da-dk\//, "") : "/";
  return (
    <Link
      href={href && target === "_blank" ? href : link}
      scroll={scroll}
      locale={locale || router.locale}
      passHref
    >
      {children}
    </Link>
  );
}
