import dynamic from "next/dynamic";

const EditCardComponent = dynamic(() => import("@/component/Subscription/EditNewCard"), {
  ssr: true
});

const EditCard = (props: any) => <EditCardComponent {...props}/>;

export default EditCard;