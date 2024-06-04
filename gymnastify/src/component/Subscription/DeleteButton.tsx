"use client";
import Image from "next/image";
import ccdelete from "@/assets/images/icons/cc_delete_icn.svg";
import Swal from "sweetalert2";
import { deleteStripCard } from "@/store/actions/authAction";
import { useAppSelector } from "@/store/hooks";
import { revalidateCardList } from "@/utils/RevalidateService";

const DeleteButton = ({ itemId }: { itemId: string }) => {
    const { user } = useAppSelector(state => state.auth);

    const handleConfirm = () => {
        Swal.fire({
            title: "Are you sure delete?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
          }).then(async (result: any) => {
            if (result.isConfirmed) {
                const body = {
                    user_id: user?.user_id,
                    card_token: itemId
                }
                const res = await deleteStripCard(body);
                if(res?.data?.success) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "You have been deleted successfully.",
                      icon: "success",
                    });
                    revalidateCardList();
                } else {
                  Swal.fire({
                    title: "Warning!",
                    text: res?.data?.data?.message ? res?.data?.data?.message : "Somethine went wrong!",
                    icon: "warning",
                  });
                }
                
            }
          });
    }
  return (
    <button className="btn_acdeleted" onClick={handleConfirm}>
        <Image src={ccdelete} alt="icons"></Image>
    </button>
  )
}

export default DeleteButton