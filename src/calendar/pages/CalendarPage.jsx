import React, { useState } from "react";
import { addHours } from "date-fns";
import { Navbar } from "./components/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar } from "react-big-calendar";
import { localizer } from "../../helpers/calendarLocalizer";
import { getMessagesEs } from "../../helpers/getMessages";
import { CalendarEvent } from "./components/CalendarEvent";
import { CalendarModal } from "./components/CalendarModal";

const events = [
  {
    title: "Cumpleaños de brandon",
    notes: "Hay que comprarle algo",
    start: new Date(),
    end: addHours(new Date(), 1),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Brand",
    },
  },
];

export const CalendarPage = () => {
  // const [view, setView] = useState(Views.MONTH);
  // const [date, setDate] = useState(new Date());
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    console.log("hulk", { double: event });
  };

  const onSelect = (event) => {
    console.log("marmota", { click1: event });
  };

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
        // view={view}
        // onView={setView}
        // date={date}
        // onNavigate={setDate}
        // views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
      />
      <CalendarModal />
    </>
  );
};
