import * as API from "../serverApiAction/clientApis";
import { AppDispatch } from "../store";
import * as assignmentReducer from "@/store/reducers/assignmentReducer";



export const beginnersSection = (Params : any) => async (dispatch: AppDispatch) => {
    const response = await API.get("/wp-json/wp/v2/assignment/",{Params});
    dispatch(assignmentReducer.setBeginners(response?.data?.data));
    return response.data.data;
  };



export const AssignmentDetials = (assignment_id :number |string) => async (dispatch: AppDispatch) => {
  const response = await API.get(`/wp-json/wp/v2/assignment/${assignment_id}`,);
  dispatch(assignmentReducer?.setAssignmentDetails(response?.data?.data));
  return response?.data?.data;
};
