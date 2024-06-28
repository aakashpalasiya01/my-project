import dynamic from "next/dynamic";
import ComponentLoader from "@/shared/component-loader";


const AssignmentComponent = dynamic(()=> import("@/component/AssignmentComponent/Assignment"), {
  ssr : false,
  loading : () => <ComponentLoader/>
})

const Assignment = () => <AssignmentComponent/>

export default Assignment;