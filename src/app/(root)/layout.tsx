import StreamClientProvider from "@/components/providers/StreamClientProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StreamClientProvider>
      {children}
    </StreamClientProvider>
  );
};

//all files in the root layout are 

export default layout