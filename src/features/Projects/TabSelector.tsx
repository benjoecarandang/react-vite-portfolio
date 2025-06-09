import { type JSX } from "react";
import { cn } from "../../lib/utils/cn";

type TabSelectorProps = {
  activeTab: string;
  onChange: (tab: string) => void;
};

const TABS = ["All", "Web Design", "Application", "Feature"];

const TabSelector = ({
  activeTab,
  onChange
}: TabSelectorProps): JSX.Element => (
  <div className="flex justify-center mb-8 gap-4" role="tablist">
    {TABS.map((tab) => (
      <button
        key={tab}
        type="button"
        role="tab"
        aria-selected={activeTab === tab}
        onClick={() => onChange(tab)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition",
          activeTab === tab
            ? "bg-white/10 text-white"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        )}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default TabSelector;
