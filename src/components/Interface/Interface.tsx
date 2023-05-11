type Props = {
  children: JSX.Element[];
};

export default function Interface({ children }: Props) {
  return <div className="interface">{children}</div>;
}
