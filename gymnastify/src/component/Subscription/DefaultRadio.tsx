"use client";

import { defaultStripCard } from "@/store/actions/authAction";
import { revalidateCardList } from "@/utils/RevalidateService";
import { useRef } from "react";
import Swal from "sweetalert2";

const DefaultRadio = ({ is_default, card_token }: { is_default: number, card_token: string }) => {
    const isInput = useRef<HTMLInputElement>(null);
    const handleChange = async () => {
        Swal.fire({
            title: "Confirm!",
            text: "Are you sure to change default card!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then(async result => {
            if(result.isConfirmed) {
                try {
                    if(isInput.current) {
                        isInput.current.checked = true;
                        const a = isInput.current;
                        if(isInput?.current?.parentElement?.parentElement?.parentElement?.style?.boxShadow){
                            isInput.current.parentElement.parentElement.parentElement.style.boxShadow = "1px 2px 3px 1px rgb(0 0 0 / 50%)"
                        }
                        const nodes = isInput?.current?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.getElementsByClassName("shadow_card");
                        if(nodes) {
                            for(let i=0; nodes.length > i; i++) {
                                const node: any = nodes[i];
                                if(node?.childNodes[2]?.childNodes[0]?.childNodes[1]?.checked) {
                                    node.style.boxShadow = 'rgba(0, 0, 0, 0.5) 1px 2px 3px 1px';
                                } else {
                                    node.style.boxShadow = '';
                                }
                            }
                        }
                    }
                    await defaultStripCard({ card_token });
                    revalidateCardList();
                } catch(err) {
                    revalidateCardList();
                }
            }
        });
        
    }

    return (
        <input
            type="radio"
            checked={is_default === 1 ? true : false}
            name="is_default"
            onChange={handleChange}
            ref={isInput}
        />
    )
}

export default DefaultRadio