import React from "react";
import styled from "styled-components";
import Colours from "../styles/Colours";
import dayjs from "dayjs";

interface CalendarGridProps {
  cells: number;
}

const CalendarContainer = styled.div<CalendarGridProps>`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 4rem 2rem repeat(${(props) => props.cells / 7}, 1fr);
  min-width: 300px;
  height: 100%;
  color: #56503c;
  align-items: center;

  .calendar-banner {
    grid-column: 1 / span 7;
    background-color: ${Colours.calendarPrimary};
    height: 100%;
    border: 1px solid ${Colours.calendarBorder};
    display: flex;
    align-items: center;
    flex: 1;
  }

  .calendar-previous {
    order: 1;
  }

  .calendar-banner button {
    width: 4rem;
    height: 2.5rem;
    margin-right: 0.25em;
    margin-left: 0.25em;
    background-color: #ede3c0;
    border: 1px solid ${Colours.calendarBorder};
    font-size: 1.5em;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  }

  .calendar-current-month {
    flex: 1;
    order: 2;
    text-align: center;
    font-size: 2em;
    white-space: nowrap;
  }

  .calendar-next {
    order: 3;
    text-align: right;
  }

  .calendar-title {
    border: 1px solid ${Colours.calendarBorder};
    background-color: ${Colours.calendarPrimary};
    color: #56503c;
    text-align: center;
    line-height: 2em;
    height: 100%;
  }

  .calendar-cell {
    border: 1px solid ${Colours.calendarBorder};
    height: 100%;
  }

  .calendar-cell h2 {
    line-height: 1.25em;
    text-align: center;
    border: 0;
    margin: 0;
    font-size: 1.25em;
    font-weight: 400;
  }

  .active {
    background-color: ${Colours.calendarActive};
  }

  .current {
    background-color: ${Colours.calendarActive};
  }

  .inactive {
    background-color: ${Colours.calendarPrimary};
    color: ${Colours.calendarTextInactive};
  }

  .current h2 {
    position: relative;
    z-index: 3;
    color: white;
  }

  .current h2::before {
    content: "";
    background-color: rgb(0, 140, 255);
    border-radius: 50%;
    z-index: -2;
    position: absolute;
    top: 0em;
    left: calc(50% - 0.65em);
    width: 1.25em;
    height: 1.2em;
  }
`;

interface StyledCalendarCellProps {
  status: string;
}

const StyledCalendarCell = styled.div<StyledCalendarCellProps>`
  border: 1px solid ${Colours.calendarBorder};
  height: 100%;

  h2 {
    line-height: 1.25em;
    text-align: center;
    border: 0;
    margin: 0;
    font-size: 1.25em;
    font-weight: 400;
  }

  ${(props) =>
    props.status === "active" &&
    `
        background-color: ${Colours.calendarActive};
    `}

  ${(props) =>
    props.status === "current" &&
    `
        background-color: ${Colours.calendarActive};

        h2 {
            position: relative;
            z-index: 3;
            color: ${Colours.white};
        }

        h2::before {
            content: "";
            background-color: rgb(0, 140, 255);
            border-radius: 50%;
            z-index: -2;
            position: absolute;
            top: 0em;
            left: calc(50% - 0.65em);
            width: 1.25em;
            height: 1.2em;
        }
    `}

    ${(props) =>
    props.status === "inactive" &&
    `
        background-color: ${Colours.calendarPrimary};
        color: ${Colours.calendarTextInactive};
    `}
`;

interface CalendarProps {
  date: Date;
}

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const [currentDate, setCurrentDate] = React.useState(date);
  const firstDay = dayjs(currentDate)
    .startOf("month")
    .subtract(parseInt(dayjs(date).startOf("month").format("d")), "day");
  const cells =
    dayjs(currentDate).endOf("month").diff(firstDay, "day") + 1 > 35 ? 42 : 35;
  return (
    <CalendarContainer cells={cells}>
      <div className="calendar-banner">
        <div className="calendar-previous">
          <button
            onClick={() => {
              setCurrentDate(dayjs(currentDate).subtract(1, "month").toDate());
            }}
          >
            {dayjs(currentDate).subtract(1, "month").format("MMM")}
          </button>
        </div>
        <div className="calendar-current-month">
          {dayjs(currentDate).format("MMM YYYY")}
        </div>
        <div className="calendar-next">
          <button
            onClick={() => {
              setCurrentDate(dayjs(currentDate).add(1, "month").toDate());
            }}
          >
            {dayjs(currentDate).add(1, "month").format("MMM")}
          </button>
        </div>
      </div>
      {[...Array(7)].map((_, i) => (
        <div key={`day-${i}`} className="calendar-title">
          {dayjs().startOf("week").add(i, "day").format("ddd")}
        </div>
      ))}
      {[...Array(cells)].map((_, i) => (
        <CalendarCell
          key={`cell-${i}`}
          date={firstDay.add(i, "day")}
          activeDate={dayjs(currentDate).startOf("day")}
        />
      ))}
    </CalendarContainer>
  );
};

interface CalendarCellProps {
  date: dayjs.Dayjs;
  activeDate: dayjs.Dayjs;
}

const CalendarCell: React.FC<CalendarCellProps> = ({ date, activeDate }) => {
  let status = "inactive";
  if (date.isSame(dayjs(), "day")) {
    status = "current";
  } else if (date.get("month") === activeDate.get("month")) {
    status = "active";
  }
  return (
    <StyledCalendarCell status={status} data-testid="calendar-cell">
      <h2>{date.format("D")}</h2>
    </StyledCalendarCell>
  );
};

export default Calendar;
