import React, { FC, useEffect, useState } from "react";
import { DateTime } from "luxon";
import { TIMEZONE } from "src/constants";

interface TimezoneBlockProps {
  timezone: string;
}

const TimezoneBlock: FC<TimezoneBlockProps> = ({ timezone }) => {
  const tz = DateTime.local().setZone(timezone);

  return (
    <div className="border-2 rounded-md p-4 flex flex-wrap sm:flex-no-wrap items-center text-xl mb-4 justify-between">
      <div className="flex flex-wrap">
        <div className="w-full font-medium">{tz.zone.name}</div>
        <div className="w-full text-sm opacity-75">
          ( GMT {tz.toFormat("Z")} )
        </div>
      </div>
      <div className="text-lg sm:text-center w-full whitespace-no-wrap">
        {tz.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
      </div>
      <div className="text-sm sm:text-lg whitespace-no-wrap">
        {tz.toFormat("t")}
      </div>
    </div>
  );
};

export const Timezone = () => {
  const userTimezone = DateTime.local().zone.name;
  const [showTimezone, setShowTimezone] = useState(false);

  useEffect(() => {
    setShowTimezone(true);
  }, []);

  if (!showTimezone) {
    return <React.Fragment />;
  }

  return (
    <div className="mb-20">
      <TimezoneBlock timezone={TIMEZONE} />
      {userTimezone != TIMEZONE && <TimezoneBlock timezone={userTimezone} />}
    </div>
  );
};
