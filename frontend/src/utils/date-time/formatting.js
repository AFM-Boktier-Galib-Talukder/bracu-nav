import { format } from "date-fns";

export const formatDateTimeToAMPM = (isoDate) => format(new Date(isoDate), "do MMMM, yyyy h.mm a");
