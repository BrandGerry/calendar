import { useDispatch, useSelector } from "react-redux";

//CUSTUM HOOK PARA ADMINISTRAR TODO EL STORE DE UI ME AHORRO OCUPAR EL USEDISPATCH Y EL SELECTOR EN TODOS LOS ARCHIVOS
export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  console.log("events, activeEvent", events, activeEvent);

  const openDateModal = () => {};

  const closeDateModal = () => {};

  return {
    events,
    activeEvent,
  };
};
