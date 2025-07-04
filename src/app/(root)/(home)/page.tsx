"use client";

import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { Loader2Icon } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

export default function Home() {
  const router = useRouter();
  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer(0.1, 0.2)}
      className="container max-w-7xl mx-auto p-4 md:p-6"
    >
      {/* WELCOME SECTION */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="rounded-xl bg-gradient-to-br from-card/70 to-card/30 p-6 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm mb-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Welcome back!
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              {isInterviewer
                ? "Manage your interviews and review candidates effectively"
                : "Access your upcoming interviews and preparations"}
            </p>
          </div>
          {isInterviewer && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-medium shadow-md hover:shadow-lg transition-all"
              onClick={() => {
                setModalType("start");
                setShowModal(true);
              }}
            >
              New Interview
            </motion.button>
          )}
        </div>
      </motion.div>

      {isInterviewer ? (
        <>
          {/* QUICK ACTIONS GRID */}
          <motion.div variants={fadeIn("up", "spring", 0.4, 0.75)}>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Quick Actions</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {QUICK_ACTIONS.map((action, index) => (
                <motion.div
                  key={action.title}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                >
                  <ActionCard
                    action={action}
                    onClick={() => handleQuickAction(action.title)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <MeetingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
            isJoinMeeting={modalType === "join"}
          />
        </>
      ) : (
        <>
          {/* INTERVIEWS SECTION */}
          <motion.div variants={fadeIn("up", "spring", 0.4, 0.75)}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Your Interviews</h2>
                <p className="text-muted-foreground mt-1">
                  View and join your scheduled interviews
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-400 text-white font-medium shadow-md hover:shadow-lg transition-all"
                onClick={() => {
                  setModalType("join");
                  setShowModal(true);
                }}
              >
                Join Interview
              </motion.button>
            </div>

            <div className="mt-6">
              {interviews === undefined ? (
                <div className="flex justify-center py-12">
                  <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : interviews.length > 0 ? (
                <motion.div
                  variants={staggerContainer(0.1, 0.2)}
                  className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                >
                  {interviews.map((interview, index) => (
                    <motion.div
                      key={interview._id}
                      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                    >
                      <MeetingCard interview={interview} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  variants={fadeIn("up", "spring", 0.2, 0.75)}
                  className="text-center py-16 rounded-xl border border-dashed border-white/20 bg-gradient-to-br from-card/50 to-card/10"
                >
                  <div className="text-muted-foreground">
                    <p className="text-lg">No scheduled interviews</p>
                    <p className="mt-2 text-sm">You'll see your interviews here when scheduled</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}