import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <div className="device-container mx-auto max-w-7xl px-10 tablet:max-w-xl tablet:px-5 mobile:max-w-full mobile:px-1">
      <AppBar />
      <div className="min-h-[40vh] bg-brand-white">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
