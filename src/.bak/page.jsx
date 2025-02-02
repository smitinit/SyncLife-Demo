import AvatarViewer from "@/components/avatar-viewer";

export default function AvatarPage() {
  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
      <h1 className="mb-6 text-2xl font-bold text-white">Avatar Viewer</h1>
      <div className="h-[calc(100vh-16rem)]">
        <AvatarViewer />
      </div>
    </div>
  );
}
