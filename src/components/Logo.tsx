interface LogoProps {
    className: string
}
const Logo = ({className}: LogoProps) => {
  return (
    <div className={className}>
      <p className="logo">B</p>
      <p className="text-2xl font-extrabold">rutalism</p>
    </div>
  );
};

export default Logo;
