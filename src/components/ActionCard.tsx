import { QuickActionType } from "@/constants";
import { Card } from "./ui/card";

// some weird tw bug, but this is how it works
// from-orange-500/10 via-orange-500/5 to-transparent
// from-blue-500/10 via-blue-500/5 to-transparent
// from-purple-500/10 via-purple-500/5 to-transparent
// from-primary/10 via-primary/5 to-transparent

function ActionCard({ action, onClick }: { action: QuickActionType; onClick: () => void }) {
  return (
    <Card
      className="group relative overflow-hidden border border-white/20 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl cursor-pointer rounded-2xl shadow-lg bg-white/30 dark:bg-gray-900/30 backdrop-blur-md hover:-translate-y-1"
      onClick={onClick}
    >
      {/* ACTION GRADIENT OVERLAY */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none`}
        style={{ zIndex: 1 }}
      />

      {/* GLASSMORPHISM OVERLAY */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 pointer-events-none" style={{ zIndex: 2 }} />

      {/* ACTION CONTENT WRAPPER */}
      <div className="relative p-8 size-full flex flex-col items-center justify-center gap-4 z-10">
        {/* ACTION ICON */}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center bg-${action.color}/30 group-hover:scale-110 transition-transform shadow-lg`}
        >
          <action.icon className={`h-8 w-8 text-${action.color}`} />
        </div>

        {/* ACTION DETAILS */}
        <div className="space-y-1 text-center">
          <h3 className="font-bold text-2xl text-white drop-shadow group-hover:text-emerald-200 transition-colors">
            {action.title}
          </h3>
          <p className="text-base text-white/80 font-medium drop-shadow-sm">{action.description}</p>
        </div>
      </div>
    </Card>
  );
}

export default ActionCard;