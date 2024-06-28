'use client';
import { toast } from 'react-toastify';
import { BehaviorSubject } from "rx";

// for global loader service
export const isLoading = new BehaviorSubject<boolean>(false);

export const isDialogOpen = new BehaviorSubject<any>({
  open: false,
  data: { message: "Are you Sure?", title: "" },
  cancelText: "Cancel",
  confirmText: "Okay",
  onConfirm: () => { },
});

export const forSuccess = (message: string, id?: string) => 
  toast.success(message, { autoClose: 3000, toastId: id ?? 1 })

export const forError = (message: string, id?: string) => 
  toast.error(message, { autoClose: 3000, toastId: id ?? 1 })

export const forWarning = (message: string, id?: string) => 
  toast.warning(message, { autoClose: 3000, toastId: id ?? 1 })

export function formatString(s:string|undefined) {
  const words = s?.split("-");
  
  const TitleCaseWords = words?.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return TitleCaseWords?.join(" ");
};

export const decodeHTMLEntities = (text:string) => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

export const formatDateString = (dateStr:string) => {
  //Parse date string into object
  const dateObj = new Date(dateStr);
  //Format date into desired Format
  let beforeCommaOptions:Intl.DateTimeFormatOptions = {day:'2-digit',month:'short'};
  let afterCommaOptions: Intl.DateTimeFormatOptions = {year:'numeric'}
  const formattedDate = `${dateObj.toLocaleDateString('en-GB',beforeCommaOptions)}, ${dateObj.toLocaleDateString('en-GB',afterCommaOptions)}`;
  return formattedDate;
};

export function limitWords(paragraph:string, limit:number) {
  // Split the paragraph into words
  const words = paragraph?.split(" ");
  // Select the number of words you want to display
  const limitedWords = words?.slice(0, limit);
  // Concatenate the words back together
  const limitedParagraph = limitedWords?.join(" ");
  return limitedParagraph;
}

export const uniqueid = () => {
  return new Date().getTime().toString();
}

