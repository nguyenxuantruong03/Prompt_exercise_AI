import React from "react";

interface TopicCardProps {
  topic: {
    id: number;
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    englishDescription: string;
    tenses: string[];
  };
  gradient: string;
  onClick: () => void;
}

const TopicCard = React.memo(({ topic, gradient, onClick }: TopicCardProps) => {
  return (
    <div
      className="group relative border-2 border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 overflow-hidden cursor-pointer"
      style={{ background: gradient }}
      onClick={onClick}
    >
      {/* Static background pattern - no animations */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full translate-y-8 -translate-x-8"></div>

      <div className="relative z-10">
        <div className="text-4xl mb-4">{topic.icon}</div>
        <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
          {topic.title}
        </h3>
        <h4 className="text-lg font-semibold text-white/90 mb-3 drop-shadow">
          {topic.subtitle}
        </h4>
        <div className="space-y-2">
          <p className="text-sm text-white/80 flex items-center gap-2 drop-shadow">
            <span className="w-2 h-2 bg-white/60 rounded-full"></span>
            {topic.description}
          </p>
          <p className="text-sm text-white/80 flex items-center gap-2 drop-shadow">
            <span className="w-2 h-2 bg-white/60 rounded-full"></span>
            {topic.englishDescription}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-white/70 font-semibold">
              {topic.tenses.length} chủ đề
            </span>
            <span className="text-xs text-white/90 bg-white/20 px-2 py-1 rounded-full">
              Click để xem
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

TopicCard.displayName = "TopicCard";

export default TopicCard;
