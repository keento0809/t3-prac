export const Loader = () => {
  return (
    <div className="min-h-auto relative z-50 m-auto flex h-full min-w-full flex-col items-center justify-center opacity-80">
      <div className="relative m-auto flex h-10 w-10 animate-spin items-center justify-center rounded-full border-4 border-[#3b82f6] border-t-transparent">
        <div className="absolute m-0 h-10 w-10 animate-spin rounded-full border-b-4 border-[#3b82f6] border-t-transparent p-0" />
      </div>
    </div>
  );
};
