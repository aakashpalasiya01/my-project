import dynamic from "next/dynamic";

const AddNewCardComponent = dynamic(() => import("@/component/Subscription/AddNewCard"), {
  ssr: true
});

const AddNewCard = (props: any) => <AddNewCardComponent {...props}/>;

export default AddNewCard;