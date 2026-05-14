import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { BaseTitle, Container } from "./styles";

type LayoutProps = PropsWithChildren<{
  title: ReactNode;
}>;

export function BaseLayout({ children, title }: LayoutProps): ReactElement {
  return (
    <Container>
      <BaseTitle>{title}</BaseTitle>
      {children}
    </Container>
  );
}
