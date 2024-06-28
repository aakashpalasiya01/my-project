import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { setSubscriptionPlan } from "@/store/actions/authAction";
import CheckoutForm from "@/shared/stripe-setup";
import { StripeTokenType } from "@/types/commonTypes";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import Link from 'next/link';
import { ROUTES_PATH } from '@/utils/constant';

const CheckoutFormModal = ({ productId }:{productId:string}) => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state: RootState) => state.auth);

    const [show, setShow] = useState(false);
    const [loaded, setLoaded] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setCardData = (cardTokenData: StripeTokenType) => {
        const body = {
            user_id: user?.user_id,
            product_id: productId,
            payment_token: cardTokenData.id,
        }
        dispatch(setSubscriptionPlan(body)).then(res => {
            if(res.success) {
                Swal.fire({
                    title: "Subscribed!",
                    text: "You have been subscribed successfully.",
                    icon: "success"
                });
                setLoaded(false);
                handleClose()
            }
        });
    }

    return (
      <>
      {user ? 
        <button className="btn_animated primary_btn btn_blockmd" onClick={handleShow}>
            Get Started
        </button>
        :
        <Link href={ROUTES_PATH.LOGIN} className="btn_animated primary_btn btn_blockmd over_hidden">
          Get Started
        </Link>
      }
  
        <Modal show={show} onHide={handleClose} className='checkout-modal'>
          <Modal.Header closeButton>
            <Modal.Title>Subscription</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CheckoutForm setCardData={setCardData} loaded={loaded} setLoaded={setLoaded} />
          </Modal.Body>
          <Modal.Footer>
            <button className='cancel_btn' onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default CheckoutFormModal