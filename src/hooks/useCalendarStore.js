import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendar/calendarSlice";
import calendarApi from "../api/calendarApi";

//CUSTUM HOOK PARA ADMINISTRAR TODO EL STORE DE UI ME AHORRO OCUPAR EL USEDISPATCH Y EL SELECTOR EN TODOS LOS ARCHIVOS
export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: llegar al backend

    // Todo bien
    if (calendarEvent._id) {
      // Actualizando
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // Creando
      const { data } = await calendarApi.post("/events", calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
    }
  };

  const startDeletingEvent = () => {
    // Todo: Llegar al backend
    dispatch(onDeleteEvent());
  };

  const hasEventSelected = () => {
    if (activeEvent && activeEvent.title !== "") return true;
    else return false;
  };

  return {
    events,
    activeEvent,
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    hasEventSelected,
  };
};
