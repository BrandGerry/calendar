import React, { useState } from "react";
import { addHours } from "date-fns";
import { Navbar } from "./components/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar } from "react-big-calendar";
import { localizer } from "../../helpers/calendarLocalizer";
import { getMessagesEs } from "../../helpers/getMessages";

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
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log("PUMAS", event, start, end, isSelected);
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
  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        // view={view}
        // onView={setView}
        // date={date}
        // onNavigate={setDate}
        // views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
      />
    </>
  );
};
